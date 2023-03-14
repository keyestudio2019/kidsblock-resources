#include <Arduino.h>
#include <Wire.h>

#ifndef TM1650_H
#define TM1650_H

#define TM1650_USE_PROGMEM

#ifdef TM1650_USE_PROGMEM
#include <avr/pgmspace.h>
#endif

#define TM1650_DISPLAY_BASE 0x34 // Address of the left-most digit 
#define TM1650_DCTRL_BASE   0x24 // Address of the control register of the left-most digit
#define TM1650_NUM_DIGITS   16   // max number of digits
#define TM1650_MAX_STRING   128  // number of digits

#define TM1650_BIT_ONOFF	0b00000001
#define TM1650_MSK_ONOFF	0b11111110
#define TM1650_BIT_DOT		0b00000001
#define TM1650_MSK_DOT		0b11110111
#define TM1650_BRIGHT_SHIFT	4
#define TM1650_MSK_BRIGHT	0b10001111
#define TM1650_MIN_BRIGHT	0
#define TM1650_MAX_BRIGHT	7

#ifndef TM1650_USE_PROGMEM
const byte TM1650_CDigits[128] {
#else
const PROGMEM byte TM1650_CDigits[128] {
#endif
//0x00  0x01  0x02  0x03  0x04  0x05  0x06  0x07  0x08  0x09  0x0A  0x0B  0x0C  0x0D  0x0E  0x0F
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 0x00
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 0x10
  0x00, 0x82, 0x21, 0x00, 0x00, 0x00, 0x00, 0x02, 0x39, 0x0F, 0x00, 0x00, 0x00, 0x40, 0x80, 0x00, // 0x20
  0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7f, 0x6f, 0x00, 0x00, 0x00, 0x48, 0x00, 0x53, // 0x30
  0x00, 0x77, 0x7C, 0x39, 0x5E, 0x79, 0x71, 0x6F, 0x76, 0x06, 0x1E, 0x00, 0x38, 0x00, 0x54, 0x3F, // 0x40
  0x73, 0x67, 0x50, 0x6D, 0x78, 0x3E, 0x00, 0x00, 0x00, 0x6E, 0x00, 0x39, 0x00, 0x0F, 0x00, 0x08, // 0x50 
  0x63, 0x5F, 0x7C, 0x58, 0x5E, 0x7B, 0x71, 0x6F, 0x74, 0x02, 0x1E, 0x00, 0x06, 0x00, 0x54, 0x5C, // 0x60
  0x73, 0x67, 0x50, 0x6D, 0x78, 0x1C, 0x00, 0x00, 0x00, 0x6E, 0x00, 0x39, 0x30, 0x0F, 0x00, 0x00  // 0x70
};

class TM1650 {

    public:

    TM1650(unsigned int aNumDigits = 4);

    void                init();

    void                clear();

    void                displayOn();

    void                displayOff();

    void                displayState(bool aState);

    void                displayString(char *aString);

    void                displayString(String aString);

    void                displayString(double value);

    void                displayString(int value);

    void                displayString(long value);

    int                 displayRunning(char *aString);

    int                 displayRunningShift();

    void                setBrightness(unsigned int aValue = TM1650_MAX_BRIGHT);

    void                setBrightnessGradually(unsigned int aValue = TM1650_MAX_BRIGHT);

    inline unsigned int getBrightness() { return iBrightness; };

    void                controlPosition(unsigned int aPos, byte aValue);

    void                setPosition(unsigned int aPos, byte aValue);

    void                setDot(unsigned int aPos, bool aState);

    byte                getPosition(unsigned int aPos) { return iBuffer[aPos]; };

    inline unsigned int	getNumPositions() { return iNumDigits; };

    private:

    char          *iPosition;

    bool          iActive;

    unsigned int  iNumDigits;

    unsigned int  iBrightness;

    char          iString[TM1650_MAX_STRING+1];

    byte          iBuffer[TM1650_NUM_DIGITS+1];

    byte          iCtrl[TM1650_NUM_DIGITS];

};

#endif

