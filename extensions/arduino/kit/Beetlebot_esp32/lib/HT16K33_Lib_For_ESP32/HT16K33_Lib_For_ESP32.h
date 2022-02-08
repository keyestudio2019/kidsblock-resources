#ifndef _ESP32_HT16K33_H
  #define _ESP32_HT16K33_H

  // include appropriate version of Arduino code
#if defined(ARDUINO) && ARDUINO >= 100
#include "arduino.h"
#else
#include "WProgram.h"
#endif

  // include Wire for I2C comms
  #include <Wire.h>

  // different commands
  #define HT16K33_CMD_RAM     0x00
  #define HT16K33_CMD_SETUP   0x80
  #define HT16K33_CMD_DIMMING 0xE0

  // other options
  #define HT16K33_DISPLAY_OFF 0x00
  #define HT16K33_DISPLAY_ON  0x01
  #define HT16K33_BLINK_OFF   0x00
  #define HT16K33_BLINK_1HZ   0x02
  #define HT16K33_BLINK_2HZ   0x04
  #define HT16K33_BLINK_0HZ5  0x06

  #define uint8_t unsigned char
  #define uint16_t unsigned int

  // actual class
  class ESP32_HT16K33
  {
    public:
	  uint16_t *_buffer;
	  void init(uint8_t addr = 0x70);

#if defined (ESP8266) || defined(ESP32)
      void init(uint8_t addr = 0x70, int sda = 21, int scl = 22);
#endif

      // brightness control
      void setBrightness(uint8_t brightness);
      // blink controls
      void setBlink(uint8_t blink);
      // orientation
      void resetDirection(void);
      void reverse(void);
      void flipVertical(void);
      void flipHorizontal(void);
      // buffer stuff
      void clear(void);
	  //Sets the value of a particular row in the LED matrix
      void setRow(uint8_t row, uint8_t value, bool rowDirection = 0);
      // trun on led matrix
      void show(void);
	  
	  // show led matrix
      void showStaticArray(byte *array1, byte *array2);
	    void showLedMatrix2(byte array[8][8],int x_offset=4,int y_offset=4);
      void showLedMatrix(uint8_t array1[8],int x_offset=4,int y_offset=4);
	  
    private:
      //uint16_t *_buffer;
      uint8_t  _i2c_addr;
      bool     _reversed;
      bool     _vFlipped;
      bool     _hFlipped;
      int      _brightness;
	  
      void writeRow(uint8_t row);
      void setPixel(uint8_t row, uint8_t col, uint8_t val, bool rowDirection);
  };

#endif // #HT16K33
