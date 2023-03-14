#ifndef DRV8833_H
#define DRV8833_H

#include "Arduino.h"
#include "Wire.h"

#define MOTORADDR   0x30
#define MOTORA1     0x01
#define MOTORA2     0x02
#define MOTORB1     0x03
#define MOTORB2     0x04

class DRV8833{
  private:
      void DRV_Write(uint8_t motor, uint8_t pwmvalue);
  public:
      void init();
      void setMotorAll(uint8_t direction, uint8_t pwmvalue);
      void setMotorA(uint8_t direction, uint8_t pwmvalue);
      void setMotorB(uint8_t direction, uint8_t pwmvalue);
};

#endif
