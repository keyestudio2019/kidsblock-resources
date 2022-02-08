#include<ESP32Tone.h>
#define Buzzer_PIN 2
#define Buzzer_Chanel 0
void setup() {
  tone(Buzzer_PIN, NOTE_C4, 500, Buzzer_Chanel);
  noTone(Buzzer_PIN, Buzzer_Chanel);
  tone(Buzzer_PIN, NOTE_D4, 500, Buzzer_Chanel);
  noTone(Buzzer_PIN, Buzzer_Chanel);
  tone(Buzzer_PIN, NOTE_E4, 500, Buzzer_Chanel);
  noTone(Buzzer_PIN, Buzzer_Chanel);
  tone(Buzzer_PIN, NOTE_F4, 500, Buzzer_Chanel);
  noTone(Buzzer_PIN, Buzzer_Chanel);
  tone(Buzzer_PIN, NOTE_G4, 500, Buzzer_Chanel);
  noTone(Buzzer_PIN, Buzzer_Chanel);
  tone(Buzzer_PIN, NOTE_A4, 500, Buzzer_Chanel);
  noTone(Buzzer_PIN, Buzzer_Chanel);
  tone(Buzzer_PIN, NOTE_B4, 500, Buzzer_Chanel);
  noTone(Buzzer_PIN, Buzzer_Chanel);
}

void loop() {
  
}
