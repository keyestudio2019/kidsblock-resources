#include "DigitLedDisplay.h"

#define DECODEMODE_ADDR 9
#define BRIGHTNESS_ADDR 10
#define SCANLIMIT_ADDR 11
#define SHUTDOWN_ADDR 12
#define DISPLAYTEST_ADDR 15

DigitLedDisplay::DigitLedDisplay(int dinPin, int csPin, int clkPin)
{
    DIN_PIN = dinPin;
    CS_PIN = csPin;
    CLK_PIN = clkPin;

    pinMode(DIN_PIN, OUTPUT);
    pinMode(CS_PIN, OUTPUT);
    pinMode(CLK_PIN, OUTPUT);
    digitalWrite(CS_PIN, HIGH);
}

void DigitLedDisplay::setBright(int brightness)
{
    if (brightness >= 0 && brightness < 16)
        write(BRIGHTNESS_ADDR, brightness);
}

void DigitLedDisplay::setDigitLimit(int limit)
{
    _digitLimit = limit;

    write(DISPLAYTEST_ADDR, 0);
    write(SCANLIMIT_ADDR, limit - 1);

    // 0: Register Format
    // 255: Code B Font (0xff)
    write(DECODEMODE_ADDR, 0);
    clear();
    write(SHUTDOWN_ADDR, 1);
}

void DigitLedDisplay::on()
{
    write(SHUTDOWN_ADDR, 0x01);
}

void DigitLedDisplay::off()
{
    write(SHUTDOWN_ADDR, 0x00);
}

void DigitLedDisplay::clear()
{
    for (int i = 1; i <= _digitLimit; i++)
    {
        write(i, B00000000);
    }
}

void DigitLedDisplay::table(byte address, int val)
{
    byte tableValue;
    tableValue = charTable[val];
    write(address, tableValue);
}

void DigitLedDisplay::write(volatile byte address, volatile byte data)
{
    digitalWrite(CS_PIN, LOW);
    shiftOut(DIN_PIN, CLK_PIN, MSBFIRST, address);
    shiftOut(DIN_PIN, CLK_PIN, MSBFIRST, data);
    digitalWrite(CS_PIN, HIGH);
}

void DigitLedDisplay::printDigit(float num, uint8_t decimal)
{
    uint32_t number = round(fabs(num) * pow(10, decimal));

    for (int i = 0; i < _digitLimit - (num < 0 ? 1 : 0); ++i)
    {
        int j = i + 1;
        uint8_t dot = 0;

        if (number != 0)
        {
            if (decimal == i)
            {
                dot = B10000000;
            }
            write(j, charTable[number % 10] | dot);
        }
        else
        {
            write(j, 0x00); // display nothing
        }

        number /= 10;
    }

    if (num < 0)
    {
        write(_digitLimit, B00000001); // Display '-'
    }
}
