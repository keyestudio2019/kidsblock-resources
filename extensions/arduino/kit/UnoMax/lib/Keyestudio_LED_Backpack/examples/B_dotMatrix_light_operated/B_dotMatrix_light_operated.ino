#include <Wire.h>
#include "Keyestudio_LEDBackpack.h"
#include "Keyestudio_GFX.h"
int light = A6;
int Light_val;
Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();

void setup() {
  Serial.begin(9600);
  Serial.println("16x8 LED Matrix Test");
  pinMode(A6,INPUT);
  matrix.begin(0x70);  // pass in the address
}


void loop() {

  Light_val=analogRead(A6);
  Light_val=map(Light_val,0,1023,0,15);
  
 


  matrix.clear();
  matrix.drawLine(3,0, 3,Light_val, LED_ON);
  matrix.writeDisplay();  // write the changes we just made to the display
  delay(10);




}
