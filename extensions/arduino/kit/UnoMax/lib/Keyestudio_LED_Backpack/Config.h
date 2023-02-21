

#define L_PIN 2
#define R_PIN 3
//#define SELECT 2
#define START_SPEED 8
#define PADDLE_START 2
#define PADDLE_SIZE 5
#define BRICKS 48

enum {START, WON, LOST, PLAY, SETUP} state = SETUP;
enum {LEFT, RIGHT, NONE} controls = NONE;
enum {SEL, NO} actions = NO;

