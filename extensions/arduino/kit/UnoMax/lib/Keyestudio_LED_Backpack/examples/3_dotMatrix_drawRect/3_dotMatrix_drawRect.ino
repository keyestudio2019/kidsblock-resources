#include <Wire.h>
#include "Keyestudio_LEDBackpack.h"
#include "Keyestudio_GFX.h"

Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();

void setup() 
{
 matrix.begin(0x70);  // pass in the address
}



void loop() {
  


  matrix.clear();

  matrix.fillRect(2,2, 4,12, LED_ON);
  matrix.writeDisplay();  // write the changes we just made to the display
 

}
