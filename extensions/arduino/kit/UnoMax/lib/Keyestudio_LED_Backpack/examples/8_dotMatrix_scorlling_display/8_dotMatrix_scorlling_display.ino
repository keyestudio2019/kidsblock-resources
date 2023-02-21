#include <Wire.h>
#include "Keyestudio_LEDBackpack.h"
#include "Keyestudio_GFX.h"

Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();

void setup() 
{
 matrix.begin(0x70);  // pass in the address
}



void loop() {
  matrix.setTextSize(2);
  matrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely
  matrix.setTextColor(LED_ON);
  for (int8_t x=0; x>=-64; x--) {
  matrix.clear();
  matrix.setCursor(x,0);
  matrix.print("Hello");
  matrix.writeDisplay();
  delay(100);
  }

  matrix.setTextSize(1);
  matrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely
  matrix.setTextColor(LED_ON);
  matrix.setRotation(1);
  for (int8_t x=7; x>=-45; x--) {
  matrix.clear();
  matrix.setCursor(x,0);
  matrix.print("keyestudio");
  matrix.writeDisplay();
  delay(100);
  }
  matrix.setRotation(0);
}
