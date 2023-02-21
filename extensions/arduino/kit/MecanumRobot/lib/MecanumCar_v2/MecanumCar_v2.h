/**
   名字：mecanumCar_v2.h
   功能：实现自定义库头文件
   适用于raspberry pi pico
   作者：邓飞
   时间：2021/7/4
*/

#ifndef _MecanumCar_v2_H__
#define _MecanumCar_v2_H__

#include "Arduino.h"
extern uint8_t speed_Upper_L;
extern uint8_t speed_Lower_L;
extern uint8_t speed_Upper_R;
extern uint8_t speed_Lower_R;

class mecanumCar
{
  private:
    int SDA;
    int SCL;
	//uint8_t speed_Upper_L = 80;
	//uint8_t speed_Lower_L = 80;
	//uint8_t speed_Upper_R = 80;
	//uint8_t speed_Lower_R = 80;
    
  public:
    mecanumCar(int _sda, int _scl);
    void Init();
    void Stop();
    void Advance();
	void Back();
	void Turn_Left();
	void Turn_Right();
	void L_Move();
	void R_Move();
	void LU_Move();
	void LD_Move();
	void RU_Move();
	void RD_Move();
	void drift_left();
	void drift_right();
	void Motor_Upper_L(bool stateL, int left1);
	void Motor_Lower_L(bool stateL, int left1);
	void Motor_Upper_R(bool stateR, int right1);
	void Motor_Lower_R(bool stateR, int right1);
	void right_led(bool onoff);
	void left_led(bool onoff);
	void digitalWrite_P55(bool val);
	void digitalWrite_P54(bool val);
	void PWM_OUT(uint8_t ch, uint8_t pwm);
	void Writebyte(uint8_t addr, uint8_t dat);
    void IIC_Start();
    void IIC_Stop();
    void IIC_SendACK(bool ack);
    bool IIC_RecvACK();
    void IIC_SendByte(unsigned char dat);
    unsigned char IIC_RecvByte();
};

#endif