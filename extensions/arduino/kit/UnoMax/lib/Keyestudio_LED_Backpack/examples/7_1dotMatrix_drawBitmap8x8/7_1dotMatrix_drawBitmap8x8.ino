#include <Wire.h>
#include "Keyestudio_LEDBackpack.h"
#include "Keyestudio_GFX.h"

Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();

void setup() 
{
 matrix.begin(0x70);  // pass in the address
}

static const uint8_t PROGMEM
  smile_bmp[] =
  { 0x00, 0x04, 0x22, 0x44, 0x40, 0x44, 0x22, 0x04},
  neutral_bmp[] =
  { 0x00, 0x04, 0x22, 0x24, 0x20, 0x24, 0x22, 0x04 },
  frown_bmp[] =
  { 0x00, 0x02, 0x44, 0x22, 0x20, 0x22, 0x44, 0x02 };

void loop() {

  matrix.clear();
  matrix.drawBitmap(0, 0, smile_bmp, 8, 8, LED_ON);
  matrix.writeDisplay();
  delay(1000);
  
  matrix.clear();
  matrix.drawBitmap(0, 8, neutral_bmp, 8, 8, LED_ON);
  matrix.writeDisplay();
  delay(1000);

  matrix.clear();
  matrix.drawBitmap(0, 0, frown_bmp, 8, 8, LED_ON);
  matrix.writeDisplay();
  delay(1000);


}
