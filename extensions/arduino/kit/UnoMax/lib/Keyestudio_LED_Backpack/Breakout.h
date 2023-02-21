

#include "ball.h"
#include "config.h"
//#include "faces.h"
#include "paddle.h"
#include "Arduino.h"

class Breakout{
  Paddle paddle = {PADDLE_START, PADDLE_SIZE};
 // Faces faces;
    char sadFace[8][16] = {
  {'E','E','E','E','E','B','E','E','E','E','B','E','E','E','E','E'},
  {'E','E','E','E','E','E','B','E','E','B','E','E','E','E','E','E'},
  {'E','E','E','E','E','E','E','B','B','E','E','E','E','E','E','E'},
  {'E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E'},
  {'E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E'},
  {'E','E','E','B','B','E','E','E','E','E','E','B','B','E','E','E'},
  {'E','E','B','E','E','B','E','E','E','E','B','E','E','B','E','E'},
  {'E','B','E','E','E','E','B','E','E','B','E','E','E','E','B','E'},
  };

  char happyFace[8][16] = {
  {'E','E','E','E','E','E','E','B','B','E','E','E','E','E','E','E'},
  {'E','E','E','E','E','E','B','E','E','B','E','E','E','E','E','E'},
  {'E','E','E','E','E','B','E','E','E','E','B','E','E','E','E','E'},
  {'E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E'},
  {'B','E','E','E','E','B','E','E','E','E','B','E','E','E','E','B'},
  {'E','B','E','E','B','E','E','E','E','E','E','B','E','E','B','E'},
  {'E','E','B','B','E','E','E','E','E','E','E','E','B','B','E','E'},
  {'E','E','E','E','E','E','E','E','E','E','E','E','E','E','E','E'},
  };
  void moveBall();
  void checkCollision();
  void resetBricks();
  void movePaddle(int controls);
  void checkSides();
  void hitEnd();
  void hitPaddle();

  public:
  Ball ball = {PADDLE_START+paddle.size/2, 1, 0, 1};
  char level[8][16];//8改成了16
  int speed = START_SPEED;
  int bricks = BRICKS;
  
  void restart();
  void updatePaddle();
  void won();
  void lost();
  void play(int controls);
  
};

