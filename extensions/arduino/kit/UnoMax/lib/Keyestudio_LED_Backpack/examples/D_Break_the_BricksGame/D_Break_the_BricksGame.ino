
#include <Wire.h>
#include "Keyestudio_LEDBackpack.h"
#include "Keyestudio_GFX.h"
#include "Breakout.h"

Keyestudio_8x16matrix matrix = Keyestudio_8x16matrix();
Breakout breakout;
int count = 0;

void setup() {
  Serial.begin(9600);
  Serial.println("8x16 LED Matrix Test");

  pinMode(L_PIN, INPUT);
  pinMode(R_PIN, INPUT);

  matrix.begin(0x70);  // pass in the address
  matrix.setBrightness(0);
}

void loop() {
  // action depends on game state - idealy the state should be a part of the Breakout class or a seperate logic class
  switch(state){
    // setup game
    case SETUP:
      breakout.restart();
      breakout.speed = START_SPEED;
      state = START;
      break;
      
    case START:
    // ready to start the game, changed to PLAY if the action button is pushed. 
    // Change here if paddle should be able to move before you shoot the first ball and start the game.
      checkActions();
      if(actions == SEL){
        state = PLAY;
      }
      break;
      
    case LOST:
    // game lost
      breakout.lost();
      reDraw();
      blink(10, 100);
      breakout.restart();
      breakout.speed = START_SPEED;
      state = START;
      break;

    case WON:
    // game won
      breakout.won(); 
      reDraw();
      blink(10, 100);
      breakout.restart();
      state = START;
      break;
      
    case PLAY:
      // game in play
      {
        if(count > breakout.speed){
          checkControls();
          breakout.play(controls);
          count = 0;
        
          if(breakout.bricks == 128){
          state = WON;
          }
          if(breakout.ball.y == 7)
            state = LOST;
          }
        delay(20);
        count++;
      }
  }
  reDraw();
}

void reDraw(){
  for(int i = 0; i < 8; i++){   
    for(int j = 0; j < 16; j++){   //8改成16
      if(breakout.level[i][16-j-1] != 'E'){
        matrix.drawPixel(i,j,1);
      }
      else
        matrix.drawPixel(i,j,0);
    }  
  }
  matrix.writeDisplay();
}

void checkActions(){
  int count = 0;
  while(count < 5 && (!digitalRead(R_PIN))&&(!digitalRead(L_PIN))){
    count++;
  }
  if(count > 4){
    actions = SEL;
    return;
  }
  actions = NO;
}

void checkControls(){
  int count = 0;
  while(count < 5 && (!digitalRead(L_PIN))){
    count++;
  }
  if(count > 4){
    controls = LEFT;
    return;
  }
  count = 0;
  while(count < 5 && (!digitalRead(R_PIN))){
    count++;
  }
  if(count > 4){
    controls = RIGHT;
    return;
  }
  controls = NONE;
}
void blink(int times, int wait){
  for(int i = 0; i < times; i++){
    matrix.setBrightness(2);
    matrix.writeDisplay();
    delay(wait);
    matrix.setBrightness(0);
    matrix.writeDisplay();
    delay(wait);
  }
}
