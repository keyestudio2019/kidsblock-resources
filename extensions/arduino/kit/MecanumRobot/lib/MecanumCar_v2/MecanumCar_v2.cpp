/**
 * 文件：mecanumCar_v2.cpp
 * 功能：mecanum car v2控制源文件
 * 适用于raspberry pi pico
 * 作者：邓飞
 * 时间：2022.7.4
 */

#include "MecanumCar_v2.h"
#include "Arduino.h"

uint8_t speed_Upper_L = 80;
uint8_t speed_Lower_L = 80;
uint8_t speed_Upper_R = 80;
uint8_t speed_Lower_R = 80;

mecanumCar::mecanumCar(int _sda, int _scl)
{
  SDA = _sda;
  SCL = _scl;
  pinMode(SDA, OUTPUT); //SDA总线为输出模式
  pinMode(SCL, OUTPUT); //SCL总线为输出模式
}

/* mecanumCar初始化函数
 */
void mecanumCar::Init() {
  delay(1000);
  right_led(0);
  left_led(0);
  Stop();
}


void mecanumCar::Stop() {
  Motor_Upper_L(0, 0);
  Motor_Lower_L(0, 0);
  Motor_Upper_R(0, 0);
  Motor_Lower_R(0, 0);
}


void mecanumCar::Advance()
{
  Motor_Upper_L(1, speed_Upper_L);
  Motor_Lower_L(1, speed_Lower_L);
  Motor_Upper_R(1, speed_Upper_R);
  Motor_Lower_R(1, speed_Lower_R);
}


void mecanumCar::Back()
{
  Motor_Upper_L(0, speed_Upper_L);
  Motor_Lower_L(0, speed_Lower_L);
  Motor_Upper_R(0, speed_Upper_R);
  Motor_Lower_R(0, speed_Lower_R);
}


void mecanumCar::Turn_Left()
{
  Motor_Upper_L(0, speed_Upper_L);
  Motor_Lower_L(0, speed_Lower_L);
  Motor_Upper_R(1, speed_Upper_R);
  Motor_Lower_R(1, speed_Lower_R);
}


void mecanumCar::Turn_Right()
{
  Motor_Upper_L(1, speed_Upper_L);
  Motor_Lower_L(1, speed_Lower_L);
  Motor_Upper_R(0, speed_Upper_R);
  Motor_Lower_R(0, speed_Lower_R);
}



void mecanumCar::L_Move()
{
  Motor_Upper_L(0, speed_Upper_L);
  Motor_Lower_L(1, speed_Lower_L);
  Motor_Upper_R(1, speed_Upper_R);
  Motor_Lower_R(0, speed_Lower_R);
}


void mecanumCar::R_Move()
{
  Motor_Upper_L(1, speed_Upper_L);
  Motor_Lower_L(0, speed_Lower_L);
  Motor_Upper_R(0, speed_Upper_R);
  Motor_Lower_R(1, speed_Lower_R);
}


void mecanumCar::LU_Move()
{
  Motor_Upper_L(0, 0);
  Motor_Lower_L(1, speed_Lower_L);
  Motor_Upper_R(1, speed_Upper_R);
  Motor_Lower_R(0, 0);
}


void mecanumCar::LD_Move()
{
  Motor_Upper_L(0, speed_Upper_L);
  Motor_Lower_L(0, 0);
  Motor_Upper_R(0, 0);
  Motor_Lower_R(0, speed_Lower_R);
}




void mecanumCar::RU_Move()
{
  Motor_Upper_L(1, speed_Upper_L);
  Motor_Lower_L(0, 0);
  Motor_Upper_R(0, 0);
  Motor_Lower_R(1, speed_Lower_R);
}


void mecanumCar::RD_Move()
{
  Motor_Upper_L(0, 0);
  Motor_Lower_L(0, speed_Lower_L);
  Motor_Upper_R(0, speed_Upper_R);
  Motor_Lower_R(0, 0);
}



void mecanumCar::drift_left()
{
  Motor_Upper_L(0, 0);
  Motor_Lower_L(0, speed_Lower_L);
  Motor_Upper_R(0, 0);
  Motor_Lower_R(1, speed_Lower_R);
}


void mecanumCar::drift_right()
{
  Motor_Upper_L(0, 0);
  Motor_Lower_L(1, speed_Lower_L);
  Motor_Upper_R(0, 0);
  Motor_Lower_R(0, speed_Lower_R);
}




void mecanumCar::Motor_Upper_L(bool stateL, int left1)
{
  if (stateL) {
    PWM_OUT(3, 0);
    PWM_OUT(4, left1);
  } else {
    PWM_OUT(3, left1);
    PWM_OUT(4, 0);
  }
}



void mecanumCar::Motor_Lower_L(bool stateL, int left1)
{
  if (stateL) {
    PWM_OUT(7, 0);
    PWM_OUT(8, left1);
  } else {
    PWM_OUT(7, left1);
    PWM_OUT(8, 0);
  }
}



void mecanumCar::Motor_Upper_R(bool stateR, int right1)
{
  if (stateR) {
    PWM_OUT(1, 0);
    PWM_OUT(2, right1);
  } else {
    PWM_OUT(1, right1);
    PWM_OUT(2, 0);
  }
}


void mecanumCar::Motor_Lower_R(bool stateR, int right1)
{
  if (stateR) {
    PWM_OUT(5, 0);
    PWM_OUT(6, right1);
  } else {
    PWM_OUT(5, right1);
    PWM_OUT(6, 0);
  }
}


void mecanumCar::right_led(bool onoff)
{
  digitalWrite_P55(onoff);
}


void mecanumCar::left_led(bool onoff)
{
  digitalWrite_P54(onoff);
}



/**
  设置P55的数字信号输出
  val为写入的数字信号，1则输出高，0则输出低
**/
void mecanumCar::digitalWrite_P55(bool val)
{
  Writebyte(0x0A, val);
}


/**
  设置P54的数字信号输出
  val为写入的数字信号，1则输出高，0则输出低
**/
void mecanumCar::digitalWrite_P54(bool val)
{
  Writebyte(0x09, val);
}


/**
  PWM输出函数
  ch为PWM输出通道 1~8，val为写入的pwm值0~255
**/
void mecanumCar::PWM_OUT(uint8_t ch, uint8_t pwm) 
{
  Writebyte(ch, pwm);
}

/****指定地址写入1个字节数据  dat数据 addr寄存器地址*****/
void mecanumCar::Writebyte(uint8_t addr, uint8_t dat) 
{
  IIC_Start();
  IIC_SendByte(0x30<<1);
  IIC_RecvACK();
  IIC_SendByte(addr);
  IIC_RecvACK();
  IIC_SendByte(dat);
  IIC_RecvACK();
  IIC_Stop();
}

/***I2C起始信号***/
void mecanumCar::IIC_Start() {
  digitalWrite(SDA, HIGH);
  delayMicroseconds(1);
  digitalWrite(SCL, HIGH); //拉高时钟线
  delayMicroseconds(1);  //延时2us
  digitalWrite(SDA, LOW);
  delayMicroseconds(1);
  digitalWrite(SCL, LOW);
  delayMicroseconds(1);
}

/*****I2C停止信号******/
void mecanumCar::IIC_Stop() {
  digitalWrite(SCL, LOW);  //拉低数据线
  delayMicroseconds(1);
  digitalWrite(SDA, LOW);  //拉低时钟线
  delayMicroseconds(1);    //延时us
  digitalWrite(SCL, HIGH);
  delayMicroseconds(1);
  digitalWrite(SDA, HIGH);
  delayMicroseconds(1);
}

/**************************************
  发送应答信号
  入口参数:ack (0:ACK 1:NAK)
**************************************/
void mecanumCar::IIC_SendACK(bool ack) {
  digitalWrite(SDA, ack);   //写应答信号
  delayMicroseconds(1);
  digitalWrite(SCL, HIGH);  //拉高时钟线，等待读取应答信号
  delayMicroseconds(1);  //延时
  digitalWrite(SCL, LOW);   //拉低时钟线
  delayMicroseconds(1);   //延时
}

/**************************************
  接收应答信号
**************************************/
bool mecanumCar::IIC_RecvACK() {
  bool CY;
  digitalWrite(SCL, LOW);
  //digitalWrite(SDA, HIGH); //释放总线，<这里不拉高波形更好。。。>
  pinMode(SDA, INPUT);  //这里要读取信号，所以数据线设置为INPUT
  digitalWrite(SCL, HIGH);
  delayMicroseconds(1);
  CY = digitalRead(SDA);
  digitalWrite(SCL, LOW);
  pinMode(SDA, OUTPUT);//必须要重新设置输出模式
  return CY;
}

/**************************************
  向IIC总线发送一个字节数据
**************************************/
void mecanumCar::IIC_SendByte(unsigned char dat) { //dat是要发送的一个字节的数据
  uint8_t i;
  for (i = 0; i < 8; i++) {  //高位开始传输
    digitalWrite(SCL, LOW);
    delayMicroseconds(1);
    if (0x80 & dat) digitalWrite(SDA, HIGH);  //置1
    else digitalWrite(SDA, LOW);  //置0
    dat <<= 1;
    delayMicroseconds(1);  //延时
    digitalWrite(SCL, HIGH);  //拉高时钟线 读取数据
    delayMicroseconds(1);
  }
}

/**************************************
  在IIC总线接收一个字节数据
**************************************/
unsigned char mecanumCar::IIC_RecvByte() {
  digitalWrite(SDA, HIGH); //释放总线
  uint8_t i;
  uint8_t dat = 0;    //dat是存放接收到的一个字节的数据
  pinMode(SDA, INPUT);  //这里要读取信号，所以数据线设置为INPUT
  for (i = 0; i < 8; i++) {
    digitalWrite(SCL, HIGH);
    delayMicroseconds(1);
    dat <<= 1;
    if (digitalRead(SDA)) dat++;
    delayMicroseconds(1);
    digitalWrite(SCL, LOW);
    delayMicroseconds(1);
  }
  pinMode(SDA, OUTPUT);
  return dat;
}