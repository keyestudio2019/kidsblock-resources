#include "DRV8833.h"

void DRV8833::setMotorAll(uint8_t direction, uint8_t pwmvalue){
    if(direction){
        DRV_Write(0x01,pwmvalue);
        DRV_Write(0x02,0);
        DRV_Write(0x03,pwmvalue);
        DRV_Write(0x04,0);
    }else{
        DRV_Write(0x01,0);
        DRV_Write(0x02,pwmvalue);
        DRV_Write(0x03,0);
        DRV_Write(0x04,pwmvalue);
    }
}

void DRV8833::setMotorA(uint8_t direction, uint8_t pwmvalue){
    if(direction){
        DRV_Write(0x01,pwmvalue);
        DRV_Write(0x02,0);
    }else{
        DRV_Write(0x01,0);
        DRV_Write(0x02,pwmvalue);
    }

}
void DRV8833::setMotorB(uint8_t direction, uint8_t pwmvalue){
    if(direction){
        DRV_Write(0x03,pwmvalue);
        DRV_Write(0x04,0);
    }else{
        DRV_Write(0x03,0);
        DRV_Write(0x04,pwmvalue);
    }
}

void DRV8833::init(){
    Wire.begin();       // join I2C bus as master (no address provided).
    setMotorAll(0,0);
    setMotorAll(1,0);
}

void DRV8833::DRV_Write(uint8_t motor, uint8_t pwmvalue){
    Wire.beginTransmission(MOTORADDR); // transmit to device
    Wire.write(motor);              // sends one byte
    Wire.write(pwmvalue);
    Wire.endTransmission();
}