

#include "Ball.h"

void Ball::move(){

  // update y position
  if(dirY > 0){
    y++;
    if(y > 7){  
      y = 6;
      down();
    }
  }
  else if(dirY < 0){
    y--;
    if(y < 0){
      y = 1;
      up(); 
    }
  }

  // update x position
  if(dirX > 0){
    x++;
    if(x > 15){  
      x = 14;
      bounceLeft();  
    }
  }
  else if(dirX < 0){
    x--;
    if(x < 0){
      x = 1;
      bounceRight(); 
    }  
  }
}

void Ball::bounceBackLeft(){
  dirX = 1;
  dirY = 1;
  //x++;
}

void Ball::bounceBackRight(){
  dirX = -1;
  dirY = 1;
 // x--;
}

void Ball::bounceUp(){
  dirX = 0;
  dirY = 1;
}

void Ball::bounceLeft(){
  dirX = -1;
}
void Ball::bounceRight(){
  dirX = 1;
}

void Ball::up(){
  dirY = 1;
}

void Ball::down(){
  dirY = -1;
}

