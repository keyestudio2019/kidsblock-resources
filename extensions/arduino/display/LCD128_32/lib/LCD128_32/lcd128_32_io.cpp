/**
   lcd128_32_io.cpp
   lcd128_32 io IIC Control source file
   be fit for arduino, esp32, raspberry pi pico
*/

#include "lcd128_32_io.h"
#include "Arduino.h"

lcd::lcd(int _sda, int _scl)
{
  SDA = _sda;
  SCL = _scl;
  pinMode(SDA, OUTPUT); //SDA Bus is output mode
  pinMode(SCL, OUTPUT); //SCL Bus is output mode
}

void lcd::WriteByte_command(int cmd) {  //Write a command to LCD.
  I2CStart();
  I2CWrite(addr << 1);
  IIC_ACK();
  I2CWrite(0x00); // Co=0,A0=0. data= Co-A0-0-0-0-0-0-0.
  IIC_ACK();
  I2CWrite(cmd);
  IIC_ACK();
  I2CStop();
}

void lcd::WriteByte_dat(int dat) {
  I2CStart();
  I2CWrite(addr << 1);
  IIC_ACK();
  I2CWrite(0x40); // Co=0,A0=1. data= Co-A0-0-0-0-0-0-0.
  IIC_ACK();
  I2CWrite(dat);
  IIC_ACK();
  I2CStop();
}


void lcd::WriteByte_dat(const int *dat) {
  I2CStart();
  I2CWrite(addr << 1);
  IIC_ACK();
  I2CWrite(0x40); // Co=0,A0=1. data= Co-A0-0-0-0-0-0-0.
  IIC_ACK();
  I2CWrite(*dat);
  IIC_ACK();
  I2CStop();
}

void lcd::Clear() {
  for (int x = 0; x < 4; x++) {
    WriteByte_command(0xb0 + x);   //y, page address y=1-0-1-1-y3-y2-y1-y0, 1-page with 8-rows
    WriteByte_command(0x10);       //x, column address x=0-0-0-0-1-x7-x6-x5-x4
    WriteByte_command(0x00);       //x, column address x=0-0-0-0-0-x3-x2-x1-x0
    for (int i = 0; i < 128; i++) {
      WriteByte_dat(0x00);         //row=bit0--bit7
    }
  }
}

void lcd::Init() { //Init the LCD.
  I2CStart();
  delay(10);
  WriteByte_command(0xe2);
  delay(10);
  WriteByte_command(0xa3);          //select bias
  WriteByte_command(0xa0);         //seg output scan direction setting
  WriteByte_command(0xc8);         //com output scan direction setting
  WriteByte_command(0x22);    //Controls the regulation ratio of the built-in regulator.
  WriteByte_command(0x81);
  WriteByte_command(0x30);
  WriteByte_command(0x2c);   //Controls the built-in power circuits.
  WriteByte_command(0x2e);
  WriteByte_command(0x2f);
  Clear();                        //initalize DDRAM
  WriteByte_command(0xff);    //enter extension command set.
  WriteByte_command(0x72);      //display settin mode on.
  WriteByte_command(0xfe);     //exit extension command set.
  WriteByte_command(0xd6);          //set the display duty, DT=33.
  WriteByte_command(0x90);          //This command has priority over the Bias Select (BS).
  WriteByte_command(0x9d);          //specifies the frame rate for duty. duty=250.
  WriteByte_command(0xaf);   //display on.
  WriteByte_command(0x40);   //Set display start line.
}

void lcd::Cursor(char y, char x) {
  if (x > 17) {
    x = 17;
  }
  if (y > 3) {
    x = 3;
  }
  _cursor[0] = y;
  _cursor[1] = x;
}

void lcd::WriteFont(int num) {
  for (int i = 0; i < 7; i++) {
    WriteByte_dat(font_7x8[num] + i);
  }
}

void lcd::Display(char *str) {
  int len = 0;
  len = strlen(str);
  WriteByte_command(0xb0 + _cursor[0]);           //y, page address y=1-0-1-1-y3-y2-y1-y0, 1-page with 8-rows
  WriteByte_command(0x10 + _cursor[1] * 7 / 16);  //x, column address x=0-0-0-0-1-x7-x6-x5-x4
  WriteByte_command(0x00 + _cursor[1] * 7 % 16);  //x, column address x=0-0-0-0-0-x3-x2-x1-x0

  for (int num = 0; num < len; num++) {
    switch (str[num]) {
      case '0': WriteFont(0); break;
      case '1': WriteFont(1); break;
      case '2': WriteFont(2); break;
      case '3': WriteFont(3); break;
      case '4': WriteFont(4); break;
      case '5': WriteFont(5); break;
      case '6': WriteFont(6); break;
      case '7': WriteFont(7); break;
      case '8': WriteFont(8); break;
      case '9': WriteFont(9); break;
      case 'a': WriteFont(10); break;
      case 'b': WriteFont(11); break;
      case 'c': WriteFont(12); break;
      case 'd': WriteFont(13); break;
      case 'e': WriteFont(14); break;
      case 'f': WriteFont(15); break;
      case 'g': WriteFont(16); break;
      case 'h': WriteFont(17); break;
      case 'i': WriteFont(18); break;
      case 'j': WriteFont(19); break;
      case 'k': WriteFont(20); break;
      case 'l': WriteFont(21); break;
      case 'm': WriteFont(22); break;
      case 'n': WriteFont(23); break;
      case 'o': WriteFont(24); break;
      case 'p': WriteFont(25); break;
      case 'q': WriteFont(26); break;
      case 'r': WriteFont(27); break;
      case 's': WriteFont(28); break;
      case 't': WriteFont(29); break;
      case 'u': WriteFont(30); break;
      case 'v': WriteFont(31); break;
      case 'w': WriteFont(32); break;
      case 'x': WriteFont(33); break;
      case 'y': WriteFont(34); break;
      case 'z': WriteFont(35); break;
      case 'A': WriteFont(36); break;
      case 'B': WriteFont(37); break;
      case 'C': WriteFont(38); break;
      case 'D': WriteFont(39); break;
      case 'E': WriteFont(40); break;
      case 'F': WriteFont(41); break;
      case 'G': WriteFont(42); break;
      case 'H': WriteFont(43); break;
      case 'I': WriteFont(44); break;
      case 'J': WriteFont(45); break;
      case 'K': WriteFont(46); break;
      case 'L': WriteFont(47); break;
      case 'M': WriteFont(48); break;
      case 'N': WriteFont(49); break;
      case 'O': WriteFont(50); break;
      case 'P': WriteFont(51); break;
      case 'Q': WriteFont(52); break;
      case 'R': WriteFont(53); break;
      case 'S': WriteFont(54); break;
      case 'T': WriteFont(55); break;
      case 'U': WriteFont(56); break;
      case 'V': WriteFont(57); break;
      case 'W': WriteFont(58); break;
      case 'X': WriteFont(59); break;
      case 'Y': WriteFont(60); break;
      case 'Z': WriteFont(61); break;
      case '!': WriteFont(62); break;
      case '"': WriteFont(63); break;
      case '#': WriteFont(64); break;
      case '$': WriteFont(65); break;
      case '%': WriteFont(66); break;
      case '&': WriteFont(67); break;
      case '\'': WriteFont(68); break;
      case '(': WriteFont(69); break;
      case ')': WriteFont(70); break;
      case '*': WriteFont(71); break;
      case '+': WriteFont(72); break;
      case ',': WriteFont(73); break;
      case '-': WriteFont(74); break;
      case '/': WriteFont(75); break;
      case ':': WriteFont(76); break;
      case ';': WriteFont(77); break;
      case '<': WriteFont(78); break;
      case '=': WriteFont(79); break;
      case '>': WriteFont(80); break;
      case '?': WriteFont(81); break;
      case '@': WriteFont(82); break;
      case '{': WriteFont(83); break;
      case '|': WriteFont(84); break;
      case '}': WriteFont(85); break;
      case '~': WriteFont(86); break;
      case ' ': WriteFont(87); break;
      case '.': WriteFont(88); break;
      case '^': WriteFont(89); break;
      case '_': WriteFont(90); break;
      case '`': WriteFont(91); break;
      case '[': WriteFont(92); break;
      case '\\': WriteFont(93); break;
      case ']': WriteFont(94); break;
      default: break;
    }
  }
}

void lcd::I2CStart() {
  digitalWrite(SCL, HIGH);
  delayMicroseconds(1);
  digitalWrite(SDA, HIGH);
  delayMicroseconds(1);
  digitalWrite(SDA, LOW);
  delayMicroseconds(1);
}

void lcd::I2CStop() {
  digitalWrite(SCL, LOW);
  delayMicroseconds(1);
  digitalWrite(SDA, LOW);
  delayMicroseconds(1);
  digitalWrite(SCL, HIGH);
  delayMicroseconds(1);
  digitalWrite(SDA, HIGH);
  delayMicroseconds(1);
}

void lcd::IIC_ACK() {
  digitalWrite(SCL, LOW);
  digitalWrite(SDA, HIGH);
  delayMicroseconds(1);
  digitalWrite(SCL, HIGH);
  delayMicroseconds(1);
  digitalWrite(SCL, LOW);
}

void lcd::I2CWrite(unsigned char dat) {
  unsigned char mask;
  for (mask = 0x80; mask != 0; mask >>= 1) {
    digitalWrite(SCL, LOW);
    delayMicroseconds(1);
    if (mask & dat) {
      digitalWrite(SDA, HIGH);
    } else {
      digitalWrite(SDA, LOW);
    }
    delayMicroseconds(1);
    digitalWrite(SCL, HIGH);
    delayMicroseconds(1);
  }
}

//display number
void lcd::DisplayNum(int num){
	char str[18];
	itoa(num, str, 10);
	Display(str);
}

//display real-time numbers.
void lcd::Display_Num(int num){
  char str[18];
  char x1, x2, y;

  //Store cursor data.
  y = _cursor[0];
  x1 = _cursor[1];
  x2 = x1;

  //Clear the previously displayed data.
  for(char i=numCursorPosition[_cursor[1]][_cursor[0]]; i>0; i--){
    Cursor(y, x1);
    Display(" ");
    x1++;
  }

  //Reset the cursor position.
  Cursor(y, x2);
  itoa(num, str, 10);
  //display data
  Display(str);

  //Store clear number of bits.
  char Bit = 0; 
  int divisor = 1;
  for(char a = 0; a<5; a++){
    if(num/divisor != 0)
      Bit++;
    divisor = divisor*10;
  }
  numCursorPosition[_cursor[1]][_cursor[0]] = Bit; 
}
