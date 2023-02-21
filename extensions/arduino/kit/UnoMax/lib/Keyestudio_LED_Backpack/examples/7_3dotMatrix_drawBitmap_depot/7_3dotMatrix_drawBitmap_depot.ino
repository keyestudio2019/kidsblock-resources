#include <Wire.h>
#include "Keyestudio_LEDBackpack.h"
#include "Keyestudio_GFX.h"
#include "faces.h"

Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();

void setup() 
{
 matrix.begin(0x70);  // pass in the address
}


void loop() {

  matrix.clear();
  matrix.drawBitmap(0, 0,Bmp_6, 8, 16, LED_ON); 
  matrix.writeDisplay();
  delay(1000);
  
  matrix.clear();
  matrix.drawBitmap(0, 0,Bmp_16, 8, 16, LED_ON);
  matrix.writeDisplay();
  delay(1000);

  matrix.clear();
  matrix.drawBitmap(0, 0, Bmp_24, 8, 16, LED_ON);
  matrix.writeDisplay();
  delay(1000);

  matrix.clear();
  matrix.drawBitmap(0, 0, Bmp_28, 8, 16, LED_ON);
  matrix.writeDisplay();
  delay(1000);

  matrix.clear();
  matrix.drawBitmap(0, 0, Bmp_27, 8, 16, LED_ON);
  matrix.writeDisplay();
  delay(1000);

  matrix.clear();
  matrix.drawBitmap(0, 0, Bmp_1, 8, 16, LED_ON);
  matrix.writeDisplay();
  delay(1000);
}
