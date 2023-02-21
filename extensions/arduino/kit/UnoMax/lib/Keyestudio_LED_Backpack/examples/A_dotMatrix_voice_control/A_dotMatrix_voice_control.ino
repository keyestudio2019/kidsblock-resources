#include <Wire.h>
#include "Keyestudio_LEDBackpack.h"
#include "Keyestudio_GFX.h"

int mic = A7;
Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();
int Mic_val;
void setup() {
  Serial.begin(9600);
  Serial.println("16x8 LED Matrix Test");
  pinMode(mic,INPUT);
  matrix.begin(0x70);  // pass in the address
}



void loop() {
  Mic_val=analogRead(mic);
  Mic_val=map(Mic_val,0,1023,0,10);

  matrix.clear();
  matrix.drawCircle(3,8,Mic_val, LED_ON);
  matrix.writeDisplay();  // write the changes we just made to the display
  delay(10);


}
