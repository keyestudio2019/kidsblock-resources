#ifndef LPS331AP_H
#define LPS331AP_H
#include "Wire.h"
#include "Arduino.h"

#define I2C_ADDR                0x5D        //SA0引脚接低电平：0x5d 高电平0x5e

#define WHO_AM_ID               0x0F

#define REF_P_XL                0x08        //压力参考值
#define REF_P_LR                0x09
#define REF_P_HR                0x0A
#define RES_CONF                0x10        //压力分辨率
#define CTRL_REG1               0x20        //数据控制寄存器
#define CTRL_REG2               0x21        //内存控制寄存器

#define CTRL_REG3               0x22        //中断控制寄存器
#define INTERRUPT_CFG           0x23        //中断配置
#define INT_SOURCE              0x24        //中断源
#define THS_P_L                 0x25        //中断压力阈值（LSB）
#define THS_P_HT                0x26
#define STATUS_REG              0x27        //状态寄存器

#define PRESS_OUT_XLP           0x28        //压力数据[7:0]
#define PRESS_OUT_LP            0x29        //压力数据[15:8]
#define PRESS_OUT_H             0x2A        //压力数据[23:16]

#define TEMP_OUT_L              0x2B        //温度数据
#define TEMP_OUT_H              0x2C
#define AMP_CTELA               0x2D        //模拟运算放大器数据采集电流控制

#define DELTA_PRESS_XL          0x3C        //压力偏差[7:0]
#define DELTA_PRESS_L1          0x3D        //压力偏差[15:8]
#define DELTA_PRESS_L2          0x3E        //压力偏差[23:16]
#define CHIP_ID                 0xBB

class LPS331AP
{
private:
    bool * config;
    uint8_t _address;
    TwoWire *_i2cPort;
    float *_Pressure;
    float *_Temperature;
    void IIC_Write_Byte(uint8_t reg, uint8_t data);
    void IIC_Read_Byte(uint8_t reg, uint8_t* buf, int lenght);
    bool IsExist();
    void _dataConversion(int32_t P_DATA,int16_t T_DATA,float *P_RESULT,float *T_RESULT);

public:

    float pressure;
    float temperature;
    bool begin(uint8_t address = I2C_ADDR, TwoWire &wirePort = Wire);
    // void begin(uint8_t address = I2C_ADDR, TwoWire &wirePort = Wire);
    void measure(void);
};

#endif
