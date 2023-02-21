

#include "Paddle.h"

void Paddle::moveLeft(){
  //dir = -1;
  if(pos != 0)
    pos--;  
}

void Paddle::moveRight(){
   //dir = 1;
  if(pos != 16-size)//8改成16
    pos++;
}
