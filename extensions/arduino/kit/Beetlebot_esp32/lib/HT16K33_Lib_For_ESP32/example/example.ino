#include "HT16K33_Lib_For_ESP32.h"

#define SDA 21
#define SCL 22

ESP32_HT16K33 matrix = ESP32_HT16K33();

//The brightness values can be set from 1 to 15, with 1 darkest and 15 brightest
#define  A  15

//byte arrow[8][8] =
//{
//  {0, 0, 0, A, A, 0, 0, 0},
//  {0, 0, A, A, A, A, 0, 0},
//  {0, A, 0, A, A, 0, A, 0},
//  {0, 0, 0, A, A, 0, 0, 0},
//  {0, 0, 0, A, A, 0, 0, 0},
//  {0, 0, 0, A, A, 0, 0, 0},
//  {0, 0, 0, A, A, 0, 0, 0},
//  {0, 0, 0, A, A, 0, 0, 0},
//};

byte arrow[8][8] =
{
  {0, 0, 0, 1, 1, 0, 0, 0},
  {0, 0, 1, 1, 1, 1, 0, 0},
  {0, 1, 0, 1, 1, 0, 1, 0},
  {0, 0, 0, 1, 1, 0, 0, 0},
  {0, 0, 0, 1, 1, 0, 0, 0},
  {0, 0, 0, 1, 1, 0, 0, 0},
  {0, 0, 0, 1, 1, 0, 0, 0},
  {0, 0, 0, 1, 1, 0, 0, 0},
};

byte result[8][8];
byte test1[8] = {0x70, 0x88, 0x84, 0x42, 0x42, 0x84, 0x88, 0x70};

void setup()
{
  matrix.init(0x70, SDA, SCL);//Initialize matrix
  //matrix.showLedMatrix2(arrow,0,0);
  matrix.showLedMatrix(test1,0,0);
  matrix.show();
}

void loop()
{
  for (int i = 0; i <= 7; i++)
  {
    matrix.setBrightness(i);
    delay(100);
  }
  for (int i = 7; i > 0; i--)
  {
    matrix.setBrightness(i);
    delay(100);
  }
}
