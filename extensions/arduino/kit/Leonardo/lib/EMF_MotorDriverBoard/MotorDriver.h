#ifndef _MotorDriver_h_
#define _MotorDriver_h_

#include <inttypes.h>
#include <Wire.h>
#include <SPI.h>
#include "MS_PWMServoDriver.h"
#include "IRremote.h"
#include "PS2X_lib.h"  //for v1.6
#include "Buzzer.h"
#include "RGBLed.h"
#include "Sounds.h"
#include "nRF24L01.h"
//#define MOTORDEBUG

#define MOTOR_DRIVER_BOARD_V3 3
#define MOTOR_DRIVER_BOARD_V4 4
#define MOTOR_DRIVER_BOARD_V5 5

#define MICROSTEPS 16         // 8 or 16

#define MOTOR1_A 2
#define MOTOR1_B 3
#define MOTOR2_A 1
#define MOTOR2_B 4
#define MOTOR3_A 5
#define MOTOR3_B 7
#define MOTOR4_A 0
#define MOTOR4_B 6

#define M1 1
#define M2 2
#define M3 3
#define M4 4

#define FORWARD 1
#define BACKWARD 2
#define BRAKE 3
#define RELEASE 4

#define SINGLE 1
#define DOUBLE 2
#define INTERLEAVE 3
#define MICROSTEP 4

#define RGB_PIN A1
#define ECHO_PIN A3
#define TRIG_PIN A2
#define IR_PIN 8

#if (MOTOR_DRIVER_BOARD_VER == 3)
#define BUZZER_PIN 9
#else
#define BUZZER_PIN A0
#endif

#define PS2_DAT   12
#define PS2_CMD   11
#define PS2_SEL   10
#define PS2_CLK   13

#define NRF24L01_CE 10
#define NRF24L01_CSN 9

#define NRF_NAME "emakefun"
#define NRF_DATA_LEN 12

#define UL_LIMIT_MIN 16
#define UL_LIMIT_MID 20
#define UL_LIMIT_MAX 500

typedef enum
{
    E_RGB = 0,
    E_IR = 1,
    E_BUZZER = 2,
    E_PS2X = 3,
    E_NRF24L01 = 4,
	  E_ULTRASONIC_ = 5,
    E_EXTERN_PIN = 6,
    E_SENSOR_MAX,
} E_SENSOR_INDEX;

typedef void (*FuncPtr)(void);

class MotorDriver;

class Sensor
{
public:
  Sensor(void);
  friend class MotorDriver;
  IRremote  *mIrRecv;
  PS2X *mPs2x;
  Buzzer *mBuzzer;
  RGBLed *mRgb;
  Nrf24l *mNrf24L01;
  void SetRgbColor(E_RGB_INDEX index, long Color);
  void Sing(byte songName);
  uint16_t GetUltrasonicDistance(void);
  int  GetNrf24L01(char *RxaddrName);
  void sendNrf24l01(char *TxaddrName,int SendNrfData);
private:
  uint8_t IrPin;      // Infrared remoter pin
  uint8_t BuzzerPin;  // Buzzer pin
  uint8_t RgbPin;     // Rgb pin
  uint8_t EchoPin,TrigPin;
  uint8_t Ps2xClkPin, Ps2xCmdPin, Ps2xAttPin, Ps2xDatPin;    // for Ps2 remoter
  uint8_t P1, P2, P3, P4, P5;    // for Infrared tracing pin
  int GetNrfData,SendNrfData;
  MotorDriver *MC;
};

class DCMotor
{
 public:
  DCMotor(void);
  friend class MotorDriver;
  void run(uint8_t);
  void setSpeed(int16_t);

 private:
  uint8_t PWMpin, IN1pin, IN2pin;
  int DcSpeed;
  MotorDriver *MC;
  uint8_t motornum;

};

class EncoderMotor {
 public:
  EncoderMotor(void);
  friend class MotorDriver;
  void run(uint8_t);
  void setSpeed(uint8_t);
  void release(void);
  void init(FuncPtr encoder_fun);
  void EncoderCallback1(void);
  void EncoderCallback2(void);
  static FuncPtr CallBack[2];
 private:
  uint8_t PWMpin, IN1pin, IN2pin;
  uint8_t ENCODER1pin, ENCODER2pin;
  uint8_t pluse;
  int DcSpeed;
  MotorDriver *MC;
  uint8_t encodernum;
};

class StepperMotor {
 public:
  StepperMotor(void);
  friend class MotorDriver;
  void step(uint16_t steps, uint8_t dir,  uint8_t style = SINGLE);
  void setSpeed(uint16_t);
  uint8_t onestep(uint8_t dir, uint8_t style);
  void release(void);
  uint32_t usperstep;

 private:
  uint8_t PWMApin, AIN1pin, AIN2pin;
  uint8_t PWMBpin, BIN1pin, BIN2pin;
  uint16_t revsteps; // # steps per revolution
  uint8_t currentstep;
  MotorDriver *MC;
  uint8_t steppernum;
};

class Servo
{
public:
  Servo(void);
  friend class MotorDriver;
  void setServoPulse(double pulse);
  void writeServo(uint8_t angle);
  uint8_t readDegrees();
private:
  uint8_t PWMpin;
  MotorDriver *MC;
  uint8_t servonum, currentAngle;
};

class MotorDriver
{
 public:
    MotorDriver(uint8_t addr = 0x60, uint8_t version = 4);
    uint8_t _version;
    void begin(uint16_t freq = 1600);
    void setPWM(uint8_t pin, uint16_t val);
    void setPin(uint8_t pin, boolean val);
    DCMotor *getMotor(uint8_t n);
    StepperMotor *getStepper(uint16_t steps, uint8_t n);
    EncoderMotor *getEncoderMotor(uint8_t num);
    Servo *getServo(uint8_t n);
    //Sensor *getSensor();
    void *getSensor(E_SENSOR_INDEX n);
 private:

    uint8_t _addr;
    uint16_t _freq;
    DCMotor dcmotors[4];
    EncoderMotor encoder[2];
    StepperMotor steppers[2];
    MS_PWMServoDriver _pwm;
#if (MOTOR_DRIVER_BOARD_VER == 3)
    Servo servos[4];
#else
    Servo servos[8];
#endif
    Sensor sensors;
};

#endif
