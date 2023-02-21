#include <Wire.h>
#include "Keyestudio_LEDBackpack.h"
#include "Keyestudio_GFX.h"

Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();
int K1=3;
int K2=2;
int x;
void setup() 
{
 matrix.begin(0x70);  // pass in the address 
  pinMode(K1,INPUT);
  pinMode(K2,INPUT);

  matrix.drawCircle(3,8, 3, LED_ON);
  matrix.writeDisplay();  // write the changes we just made to the display


}



void loop() 
{
  int K1_level=digitalRead(K1);
  int K2_level=digitalRead(K2);
  if(K1_level==0)
{  
  matrix.setTextSize(1);
  matrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely
  matrix.setTextColor(LED_ON);
  matrix.setRotation(1);
  matrix.clear();
  matrix.setCursor(2,0);
  matrix.print("L");
  matrix.writeDisplay();
  
  
}
  if(K2_level==0)
{ 
  matrix.setTextSize(1);
  matrix.setTextWrap(false);  // we dont want text to wrap so it scrolls nicely
  matrix.setTextColor(LED_ON);
  matrix.setRotation(1);
  matrix.clear();
  matrix.setCursor(9,0);
  matrix.print("R");
  matrix.writeDisplay(); 
}


}
