#ifndef _BMP388_H__
#define _BMP388_H__
#if ARDUINO >= 100
 #include "Arduino.h"
#else
 #include "WProgram.h"
#endif

/* define BMP388 Device I2C address*/
#define I2C_ADD_BMP388_AD0_LOW      0x76
#define I2C_ADD_BMP388_AD0_HIGH     0x77
#define I2C_ADD_BMP388    I2C_ADD_BMP388_AD0_LOW

#define BMP388_REG_ADD_WIA          0x00
    #define BMP388_REG_VAL_WIA              0x50
#define BMP388_REG_ADD_ERR          0x02
    #define BMP388_REG_VAL_FATAL_ERR        0x01
    #define BMP388_REG_VAL_CMD_ERR          0x02
    #define BMP388_REG_VAL_CONF_ERR         0x04
#define BMP388_REG_ADD_STATUS       0x03
    #define BMP388_REG_VAL_CMD_RDY          0x10
    #define BMP388_REG_VAL_DRDY_PRESS       0x20
    #define BMP388_REG_VAL_DRDY_TEMP        0x40
#define BMP388_REG_ADD_CMD          0x7E
    #define BMP388_REG_VAL_EXTMODE_EN       0x34
    #define BMP388_REG_VAL_FIFI_FLUSH       0xB0
    #define BMP388_REG_VAL_SOFT_RESET       0xB6

#define BMP388_REG_ADD_PWR_CTRL     0x1B
    #define BMP388_REG_VAL_PRESS_EN         0x01
    #define BMP388_REG_VAL_TEMP_EN          0x02
    #define BMP388_REG_VAL_NORMAL_MODE      0x30

#define BMP388_REG_ADD_PRESS_XLSB   0x04
#define BMP388_REG_ADD_PRESS_LSB    0x05
#define BMP388_REG_ADD_PRESS_MSB    0x06
#define BMP388_REG_ADD_TEMP_XLSB    0x07
#define BMP388_REG_ADD_TEMP_LSB     0x08
#define BMP388_REG_ADD_TEMP_MSB     0x09

#define BMP388_REG_ADD_T1_LSB       0x31
#define BMP388_REG_ADD_T1_MSB       0x32
#define BMP388_REG_ADD_T2_LSB       0x33
#define BMP388_REG_ADD_T2_MSB       0x34
#define BMP388_REG_ADD_T3           0x35
#define BMP388_REG_ADD_P1_LSB       0x36
#define BMP388_REG_ADD_P1_MSB       0x37
#define BMP388_REG_ADD_P2_LSB       0x38
#define BMP388_REG_ADD_P2_MSB       0x39
#define BMP388_REG_ADD_P3           0x3A
#define BMP388_REG_ADD_P4           0x3B
#define BMP388_REG_ADD_P5_LSB       0x3C
#define BMP388_REG_ADD_P5_MSB       0x3D
#define BMP388_REG_ADD_P6_LSB       0x3E
#define BMP388_REG_ADD_P6_MSB       0x3F
#define BMP388_REG_ADD_P7           0x40
#define BMP388_REG_ADD_P8           0x41
#define BMP388_REG_ADD_P9_LSB       0x42
#define BMP388_REG_ADD_P9_MSB       0x43
#define BMP388_REG_ADD_P10          0x44
#define BMP388_REG_ADD_P11          0x45



#ifdef __cplusplus
extern "C" {
#endif
typedef struct bmp388_st_calibration
{
    uint16_t T1;    /*<calibration T1 data*/
    uint16_t T2;      /*<calibration T2 data*/
    int8_t T3;      /*<calibration T3 data*/
    int16_t P1;       /*<calibration P1 data*/
    int16_t P2;     /*<calibration P2 data*/
    int8_t P3;      /*<calibration P3 data*/
    int8_t P4;      /*<calibration P4 data*/
    uint16_t P5;      /*<calibration P5 data*/
    uint16_t P6;      /*<calibration P6 data*/
    int8_t P7;      /*<calibration P7 data*/
    int8_t P8;      /*<calibration P8 data*/
    int16_t P9;     /*<calibration P9 data*/
    int8_t P10;       /*<calibration P10 data*/
    int8_t P11;       /*<calibration P11 data*/
    int64_t T_fine;     /*<calibration t_fine data*/
}BMP388_ST_CALI;

typedef struct bmp388_st_avg
{
  uint8_t u8Index;
  int32_t s32AvgBuffer[8];
}BMP388_ST_AVG;


typedef enum {
  PRESS_EN_SENSOR_TYPY_BMP180 = 0,
  PRESS_EN_SENSOR_TYPY_BMP280,
  PRESS_EN_SENSOR_TYPY_BMP388,
  PRESS_EN_SENSOR_TYPY_MAX
}PRESS_EN_SENSOR_TYPY;

void pressSensorInit(PRESS_EN_SENSOR_TYPY *penPressSensorTyep);
void pressSensorDataGet(int32_t* ps32Temp, int32_t* ps32Press, int32_t*ps32Alti);
#ifdef __cplusplus
}
#endif

#endif //_BMP388_H__
