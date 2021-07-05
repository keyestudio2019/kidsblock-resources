#include "BMP388.h"
#include <Wire.h>

static BMP388_ST_AVG gsstBMP388AvgFilter[3];
static BMP388_ST_CALI gsstCali;

#ifdef __cplusplus
extern "C" {
#endif

static bool bmp388Check(void);
static uint8_t bmp388Init(void);
static void bmp388DataGet(int32_t* ps32Temp, int32_t* ps32Press, int32_t*ps32Alti);

static void bmp388GetCalibrationData(void);
static int64_t bmp388CompensateTemp(uint32_t u32RegData);
static int64_t bmp388CompensatePress(uint32_t u32RegData);
static void bmp388CalAvgValue(uint8_t *pu8Index, int32_t *ps32AvgBuffer, int32_t s32InVal, int32_t *ps32OutVal);

/******************************************************************************
 * interface driver                                                           *
 ******************************************************************************/
uint8_t I2C_ReadOneByte(uint8_t DevAddr, uint8_t RegAddr)
{
  uint8_t value;

  Wire.beginTransmission(DevAddr);
  Wire.write((byte)RegAddr);
  Wire.endTransmission();

  Wire.requestFrom(DevAddr, (byte)1);
  value = Wire.read();

  return value;
}

void I2C_WriteOneByte(uint8_t DevAddr, uint8_t RegAddr, uint8_t value)
{
  Wire.beginTransmission(DevAddr);
  Wire.write(RegAddr);
  Wire.write(value);
  Wire.endTransmission();
}
/******************************************************************************
 * pressure sensor module                                                     *
 ******************************************************************************/
void pressSensorInit(PRESS_EN_SENSOR_TYPY *penPressSensorTyep)
{
  bool bRet = false;
  Wire.begin();
  bRet = bmp388Check();
  if( true == bRet)
  {
    *penPressSensorTyep = PRESS_EN_SENSOR_TYPY_BMP388;
    bmp388Init();
  }
  else
  {
    *penPressSensorTyep = PRESS_EN_SENSOR_TYPY_MAX;
  }

  
}
void pressSensorDataGet(int32_t* ps32Temp, int32_t* ps32Press, int32_t*ps32Alti)
{
  bmp388DataGet( ps32Temp, ps32Press, ps32Alti);
  return;
}


/******************************************************************************
 * BMP388 sensor device                                                       *
 ******************************************************************************/
static bool bmp388Check(void)
{
    bool bRet = false;
    if(BMP388_REG_VAL_WIA == I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_WIA))
    {
        bRet = true;
    }
    return bRet;
}
static uint8_t bmp388Init(void)
{
  uint8_t u8RegData;
  uint8_t u8Ret;
  //reset 
  u8RegData = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_STATUS);
  if( u8RegData & BMP388_REG_VAL_CMD_RDY )
  {
    I2C_WriteOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_CMD, BMP388_REG_VAL_SOFT_RESET);
    delay(5);
    u8RegData = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_ERR);
    if( u8RegData & BMP388_REG_VAL_CMD_ERR)
    {
        u8Ret =  0;
        return u8Ret;
    }
  }
  //calibration data read
  bmp388GetCalibrationData();
  //seting
  I2C_WriteOneByte( I2C_ADD_BMP388, BMP388_REG_ADD_PWR_CTRL, 
                    BMP388_REG_VAL_PRESS_EN | BMP388_REG_VAL_TEMP_EN | BMP388_REG_VAL_NORMAL_MODE);
  return 0;
}

static void bmp388DataGet(int32_t* ps32Temp, int32_t* ps32Press, int32_t*ps32Alti)
{
  uint32_t u32TempRegData, u32PressRegData;
  uint8_t u8Xlsb, u8Lsb, u8Msb;
  int32_t s32Pressure0 = 101325;  // Mean Sea Level Pressure = 1013.25 hPA (1hPa = 100Pa = 1mbar)
  int32_t s32Temp, s32Press, s32Alti;

  u8Xlsb= I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_TEMP_XLSB);
  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_TEMP_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_TEMP_MSB);
  u32TempRegData = u8Msb;
  u32TempRegData <<= 8;
  u32TempRegData |= u8Lsb;
  u32TempRegData <<= 8;
  u32TempRegData |= u8Xlsb;

  u8Xlsb= I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_PRESS_XLSB);
  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_PRESS_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_PRESS_MSB);
  u32PressRegData = u8Msb;
  u32PressRegData <<= 8;
  u32PressRegData |= u8Lsb;
  u32PressRegData <<= 8;
  u32PressRegData |= u8Xlsb;

  s32Temp  = bmp388CompensateTemp(u32TempRegData);
  s32Press = bmp388CompensatePress(u32PressRegData);
  s32Alti  = 4433000 * (1 - pow((float)((float)((float)(s32Press)/100.0f) / (float)s32Pressure0), 0.1903)); 

  bmp388CalAvgValue( &(gsstBMP388AvgFilter[0].u8Index), gsstBMP388AvgFilter[0].s32AvgBuffer, s32Temp,  ps32Temp );
  bmp388CalAvgValue( &(gsstBMP388AvgFilter[1].u8Index), gsstBMP388AvgFilter[1].s32AvgBuffer, s32Press, ps32Press);
  bmp388CalAvgValue( &(gsstBMP388AvgFilter[2].u8Index), gsstBMP388AvgFilter[2].s32AvgBuffer, s32Alti,  ps32Alti );

  return;
}

static void bmp388GetCalibrationData(void)
{
  uint8_t u8Lsb, u8Msb;

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_T1_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_T1_MSB);
  gsstCali.T1 = u8Msb;
  gsstCali.T1 <<= 8;
  gsstCali.T1 |= u8Lsb;
  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_T2_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_T2_MSB);
  gsstCali.T2 = u8Msb;
  gsstCali.T2 <<= 8;
  gsstCali.T2 |= u8Lsb;
  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_T3);
  gsstCali.T3 = (int8_t)(u8Lsb);


  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P1_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P1_MSB);
  gsstCali.P1 = (int16_t)(u8Msb << 8 | u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P2_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P2_MSB);
  gsstCali.P2 = (int16_t)(u8Msb << 8 | u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P3);
  gsstCali.P3 = (int8_t)(u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P4);
  gsstCali.P4 = (int8_t)(u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P5_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P5_MSB);
  gsstCali.P5 = (u8Msb << 8 | u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P6_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P6_MSB);
  gsstCali.P6 = (u8Msb << 8 | u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P7);
  gsstCali.P7 = (int8_t)(u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P8);
  gsstCali.P8 = (int8_t)(u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P9_LSB);
  u8Msb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P9_MSB);
  gsstCali.P9 = (int16_t)(u8Msb << 8 | u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P10);
  gsstCali.P10 = (int8_t)(u8Lsb);

  u8Lsb = I2C_ReadOneByte(I2C_ADD_BMP388, BMP388_REG_ADD_P11);
  gsstCali.P11 = (int8_t)(u8Lsb);

  return;
}

static int64_t bmp388CompensateTemp(uint32_t u32RegData)
{ 
  uint64_t partial_data1;
  uint64_t partial_data2;
  uint64_t partial_data3;
  int64_t partial_data4;
  int64_t partial_data5;
  int64_t partial_data6;
  int64_t comp_temp;

  partial_data1 = (uint64_t)(u32RegData - (256 * (uint64_t)(gsstCali.T1)));
  partial_data2 = (uint64_t)(gsstCali.T2 * partial_data1);
  partial_data3 = (uint64_t)(partial_data1 * partial_data1);
  partial_data4 = (int64_t)(((int64_t)partial_data3) * ((int64_t)gsstCali.T3));
  partial_data5 = ((int64_t)(((int64_t)partial_data2) * 262144) + (int64_t)partial_data4);
  partial_data6 = (int64_t)(((int64_t)partial_data5) / 4294967296);
  /* Store t_lin in dev. structure for pressure calculation */
  gsstCali.T_fine = partial_data6;
  comp_temp = (int64_t)((partial_data6 * 25)  / 16384);
  return comp_temp;   
}

static int64_t bmp388CompensatePress(uint32_t u32RegData)
{
  int64_t partial_data1;
  int64_t partial_data2;
  int64_t partial_data3;
  int64_t partial_data4;
  int64_t partial_data5;
  int64_t partial_data6;
  int64_t offset;
  int64_t sensitivity;
  uint64_t comp_press;

  partial_data1 = gsstCali.T_fine * gsstCali.T_fine;
  partial_data2 = partial_data1 / 64;
  partial_data3 = (partial_data2 * gsstCali.T_fine) / 256;
  partial_data4 = (gsstCali.P8 * partial_data3) / 32;
  partial_data5 = (gsstCali.P7 * partial_data1) * 16;
  partial_data6 = (gsstCali.P6 * gsstCali.T_fine) * 4194304;
  offset = (int64_t)(int64_t(gsstCali.P5) * (int64_t)140737488355328) + 
            partial_data4 + partial_data5 + partial_data6;

  partial_data2 = (((int64_t)gsstCali.P4) * partial_data3) / 32;
  partial_data4 = (gsstCali.P3 * partial_data1) * 4;
  partial_data5 = ((int64_t)(gsstCali.P2) - 16384) * ((int64_t)gsstCali.T_fine) * 2097152;
  sensitivity = (((int64_t)(gsstCali.P1) - 16384) * (int64_t)70368744177664) + 
                partial_data2 + partial_data4 + partial_data5;

  partial_data1 = (sensitivity / 16777216) * u32RegData;
  partial_data2 = (int64_t)(gsstCali.P10) * (int64_t)(gsstCali.T_fine);
  partial_data3 = partial_data2 + (65536 * (int64_t)(gsstCali.P9));
  partial_data4 = (partial_data3 * u32RegData) / 8192;
  partial_data5 = (partial_data4 * u32RegData) / 512;
  partial_data6 = (int64_t)((uint64_t)u32RegData * (uint64_t)u32RegData);
  partial_data2 = ((int64_t)(gsstCali.P11) * (int64_t)(partial_data6)) / 65536;
  partial_data3 = (partial_data2 * u32RegData) / 128;
  partial_data4 = (offset / 4) + partial_data1 + partial_data5 + partial_data3;
  comp_press = (((uint64_t)partial_data4 * 25) / (uint64_t)1099511627776);

  return comp_press;
}

static void bmp388CalAvgValue(uint8_t *pu8Index, int32_t *ps32AvgBuffer, int32_t s32InVal, int32_t *ps32OutVal)
{ 
  uint8_t i;

  *(ps32AvgBuffer + ((*pu8Index) ++)) = s32InVal;
  *pu8Index &= 0x07;

  *ps32OutVal = 0;
  for(i = 0; i < 8; i ++) 
  {
    *ps32OutVal += *(ps32AvgBuffer + i);
  }
  *ps32OutVal >>= 3;

  return;
}


#ifdef __cplusplus
}
#endif
