

#include "Breakout.h"


	
void Breakout::restart(){
  paddle = {PADDLE_START, PADDLE_SIZE};
  ball = {PADDLE_START+paddle.size/2, 1, 0, 1};
  bricks = BRICKS;

  resetBricks();
  updatePaddle();
  level[7-ball.y][ball.x] = 'O';
}

void Breakout::resetBricks(){
  int bricksSetup = 0; 
  for(int i = 0; i < 8; i++){   
    for(int j = 0; j < 16; j++){ //8改成16
      if(bricksSetup <(128-bricks)){
        level[i][j] = 'E';
        bricksSetup++; 
      }
      else{
        level[i][j] = 'B';
      }
    }  
  }}

void Breakout::updatePaddle(){
  // clear horizontal
  for(int i = 0; i < 16; i++){   // 7改成16
    level[0][i] = 'E';
  }
  // add paddle
  for(int i = 0; i < paddle.size; i++){
    level[0][paddle.pos+i] = 'P';  
  }
}

void Breakout::won(){

  // decrease speed variable increases difficulty (this really should be made to work the opposite way)
  speed--;

  // lowest speed / highest difficulty is when the speed variable is 3 - can be lowered for even faster play
  if(speed < 3){
    speed = 3;
  }
  // clear level and add happy winner face :)
  for(int i = 0; i < 8; i++){ 
    for(int j = 0; j < 16; j++){ //8改成16
        level[i][j] = happyFace[i][j];
    }   
  }
}
void Breakout::lost(){
  // clear level and add sad loser face :(
  for(int i = 0; i <8; i++){   
    for(int j = 0; j <16; j++){//8改成16
        level[i][j] =sadFace[i][j];
    }   
  }
}

void Breakout::play(int controls){
  moveBall();
  checkCollision();
  level[7-ball.y][ball.x] = 'O';  
  movePaddle(controls);
  
}

void Breakout::movePaddle(int controls){
  switch(controls){
    case LEFT:
      paddle.moveLeft();
      break;
    case RIGHT:
      paddle.moveRight();
      break;
  }
  updatePaddle();//刷新球拍

}
void Breakout::checkCollision(){
  // if a brick is hit
  if(level[7-ball.y][ball.x] == 'E'){  
    bricks++;
    bricks=128-bricks;
  }
  
  else if(ball.y >= 7){
    
    // if ball is in paddle, move above
    if(level[7-ball.y][ball.x] == 'P'){  
      ball.y++;
    }
    
    // if the paddle is hit
    if(level[7-ball.y+1][ball.x] == 'P'){  
      hitPaddle();
    }
    checkSides();
  }
}

void Breakout::hitPaddle(){
      // hit on middle
      if(ball.x == paddle.pos+paddle.size/2){
        ball.bounceUp();
      }
      
      // hit on ends from up bounce
      else if(ball.dirX == 0){
        hitEnd();
      }
      ball.up();}
void Breakout::hitEnd(){
  // left end
  if(ball.x < paddle.pos+paddle.size/2){
    ball.bounceLeft();
  }
        
  // right end
  else if(ball.x >= paddle.pos+paddle.size/2){
    ball.bounceRight();
  }
}

void Breakout::checkSides(){
  if(ball.y == 1){
      
    // hit on left side
    if(ball.dirX == -1 && ball.x == paddle.pos-1){//paddle.pos-1
      ball.bounceBackRight();//ball.bounceBackLeft();
    }
      
    // hit on right side
    else if(ball.dirX == 1 && ball.x ==paddle.pos + paddle.size){//paddle.pos + paddle.size
      ball.bounceBackLeft();// ball.bounceBackRight()
    }
  }
}


void Breakout::moveBall(){
  level[7-ball.y][ball.x] = 'E';
  ball.move();
}


