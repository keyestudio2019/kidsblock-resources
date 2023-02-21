#include <Wire.h>
#include "HT16K33_Lib_For_ESP32.h"

/**
 * Utility function to flip a 16-bit integer. There may be better ways of doing this—let me know!
 */
uint16_t _flip_uint16(uint16_t in)
{
  uint16_t out = 0;
  
  for (uint8_t i = 0; i < 8; i++)
  {
    out <<= 1;
    out |= in & 1;
    in >>= 1;
  }

  return out;
}

// Constructor
void ESP32_HT16K33::init(uint8_t addr)
{
  // orientation flags
  resetDirection();
  
  // set the I2C address
  _i2c_addr = addr;
  
  // assign + zero some buffer data
  _buffer = (uint16_t*)calloc(8, sizeof(uint16_t));
  
  // start everything
  Wire.begin();
  Wire.beginTransmission(_i2c_addr);
  Wire.write(0x21); // turn it on
  Wire.endTransmission();
  
  // set blink off + brightness all the way up
  setBlink(HT16K33_BLINK_OFF);
  setBrightness(15);
  
  // show the matrix, just in case
  show();
}

#if defined (ESP8266) || defined(ESP32)
// Constructor
void ESP32_HT16K33::init(uint8_t addr, int sda, int scl)
{
  // orientation flags
  resetDirection();
  
  // set the I2C address
  _i2c_addr = addr;
  
  // assign + zero some buffer data
  _buffer = (uint16_t*)calloc(8, sizeof(uint16_t));
  
  // start everything
  Wire.begin(sda,scl);
  Wire.beginTransmission(_i2c_addr);
  Wire.write(0x21); // turn it on
  Wire.endTransmission();
  
  // set blink off + brightness all the way up
  setBlink(HT16K33_BLINK_OFF);
  setBrightness(15);
  
  // show the matrix, just in case
  show();
}
#endif

/**
 * Sets the brightness of the display.
 */
void ESP32_HT16K33::setBrightness(uint8_t brightness)
{
  // constrain the brightness to a 4-bit number (0–15)
  brightness = brightness & 0x0F;
  
  // send the command
  Wire.beginTransmission(_i2c_addr);
  Wire.write(HT16K33_CMD_DIMMING | brightness);
  Wire.endTransmission();
}


/**
 * Set the blink rate.
 */
void ESP32_HT16K33::setBlink(uint8_t blink)
{
  Wire.beginTransmission(_i2c_addr);
  Wire.write(HT16K33_CMD_SETUP | HT16K33_DISPLAY_ON | blink);
  Wire.endTransmission();
}

/**
 * Reset the matrix orientation./
 */
void ESP32_HT16K33::resetDirection(void)
{
  _reversed = false;
  _vFlipped = false;
  _hFlipped = false;
}

/**
 * Flips the order of the two 8x8 matrices: useful if you’ve wired them backward by mistake =)
 */
void ESP32_HT16K33::reverse(void)
{
  _reversed = !_reversed;
}

/**
 * Flips the vertical orientation of the matrices.
 */
void ESP32_HT16K33::flipVertical(void)
{
  _vFlipped = !_vFlipped;
}

/**
 * Flips the horizontal orientation of the matrices.
 */
void ESP32_HT16K33::flipHorizontal(void)
{
  _hFlipped = !_hFlipped;;
}


/**
 * Clears the display buffer. Note that this doesn’t clear the display—you’ll need to call show() to do this.
 */
void ESP32_HT16K33::clear(void)
{  
  for (uint8_t i = 0; i < 8; i++)
  {
    _buffer[i] = 0;
  }  
}

/**
 * Sets the value of a particular pixel.
 */
void ESP32_HT16K33::setPixel(uint8_t row, uint8_t col, uint8_t val, bool rowDirection)
{
  // bounds checking
  col = col & 0x07;
  row = row & 0x0F;
  val = val & 0x01; 
  
  // write the buffer
  if(rowDirection==0)
  {
	  if (val == 1)
	  {
		_buffer[7-col] |= 1 << (row);
	  }
	  else
	  {
		_buffer[7-col] &= ~(1 << (row));
	  }
  }
  else 
  {
	  if (val == 1)
	  {
		_buffer[col] |= 1 << (row);
	  }
	  else
	  {
		_buffer[col] &= ~(1 << (row));
	  }
  }
}

/**
 * Set the value of an entire column. This is more fun =)
 */
void ESP32_HT16K33::setRow(uint8_t row, uint8_t value, bool rowDirection)
{
  // just do this via set pixel—way easier!
  for (uint8_t col = 0; col < 8; col++)
  {
    setPixel(row, col, (value & (1 << col)) > 0, rowDirection);
  }
}

/**
 * Write a row to the chip.
 */
void ESP32_HT16K33::writeRow(uint8_t row)
{
  // flip vertically
  if (_hFlipped)
  {
    row = 7 - row;
  }

  // read out the buffer so we can flip horizontally
  uint16_t out = _buffer[row];
  if (_vFlipped)
  {
    out = _flip_uint16(out);
  }
  
  if (_reversed)
  {
    Wire.write(out >> 8); // second byte
    Wire.write(out & 0xFF); // first byte
  }
  else
  {
    Wire.write(out & 0xFF); // first byte
    Wire.write(out >> 8); // second byte
  }
}

/**
 * show the RAM buffer to the matrix.
 */
void ESP32_HT16K33::show(void)
{
  Wire.beginTransmission(_i2c_addr);
  Wire.write(HT16K33_CMD_RAM);
  
  for (uint8_t row = 0; row < 8; row++)
  {
    writeRow(row);
  }
  
  Wire.endTransmission();
}


/**
 * show static array
 */
void ESP32_HT16K33::showStaticArray(byte *array1, byte *array2)
{
    for (int i = 0; i < 8; i++)
      setRow(i, array1[i] & 0xff);
    for (int i = 8; i < 16; i++)
      setRow(i, array2[i-8] & 0xff);
    show();
}


/**
 * show led matrix
 */
void ESP32_HT16K33::showLedMatrix(uint8_t array1[8],int x_offset,int y_offset)
{
  static uint8_t array[8];
  for(int c=0; c<=7; c++)
  {
    array[c] = array1[c];
  }
  uint8_t array_buffer[8]={0};
  for(int i=0; i<8; i++)
  {
    for(int j=0; j<8; j++)
    {
      //Serial.println("ccccc");
      if((array[i]|0xFE) == 0xFF)
      {
        array_buffer[i]|=1<<(j);
        //Serial.println(array_buffer[i]);
      }
      array[i] = array[i] >> 1;
      //Serial.println(array[i]);
    }
  }
  setBrightness(10);
  x_offset=constrain(x_offset,0,8);
  uint8_t left_array[8];
  uint8_t right_array[8];
  for (int i = 0; i < 8; i++)
    left_array[i]=(array_buffer[i] >> x_offset)&0xff;
  for (int i = 0; i < 8; i++)
    right_array[i]=(array_buffer[i] << (8-x_offset))&0xff;
  
  for (int i = 0; i < 16; i++)
      setRow(i, 0x00);
  show();
  
  if(y_offset>0)
  {
    y_offset=8-abs(y_offset);
    y_offset=constrain(y_offset,0,9);
    for (int i = 0; i <= y_offset; i++)
    {
      setRow(i, left_array[7 - y_offset + i] & 0xff);
      setRow(i + 8, right_array[7 - y_offset + i] & 0xff);
    }
  }
  else
  {
    y_offset=8-abs(y_offset);
    y_offset=constrain(y_offset,0,9);
    for (int i = 0; i < y_offset; i++)
    {
      setRow(8 - y_offset + i, left_array[i] & 0xff);
      setRow(16 - y_offset + i, right_array[i] & 0xff);
    }
  }
    show();
}


void ESP32_HT16K33::showLedMatrix2(byte array[8][8],int x_offset,int y_offset)
{
	byte array_buffer[8]={0};
  for(int i=0;i<8;i++)
  {
    for(int j=0;j<8;j++)
    {
      if(array[j][i]!=0)
      {
        array_buffer[i]|=1<<(7-j);
        _brightness=array[i][j];
      }
    }
  }

	_brightness=constrain(_brightness,1,15);
	setBrightness(_brightness);
  //setBrightness(15);
  x_offset=constrain(x_offset,0,8);
	byte left_array[8];
	byte right_array[8];
  for (int i = 0; i < 8; i++)
    left_array[i]=(array_buffer[i] >> x_offset)&0xff;
  for (int i = 0; i < 8; i++)
    right_array[i]=(array_buffer[i] << (8-x_offset))&0xff;
	
	for (int i = 0; i < 16; i++)
      setRow(i, 0x00);
  show();
	
  if(y_offset>0)
	{
		y_offset=8-abs(y_offset);
		y_offset=constrain(y_offset,0,9);
		for (int i = 0; i <= y_offset; i++)
		{
		  setRow(i, left_array[7 - y_offset + i] & 0xff);
		  setRow(i + 8, right_array[7 - y_offset + i] & 0xff);
		}
	}
	else
	{
		y_offset=8-abs(y_offset);
		y_offset=constrain(y_offset,0,9);
		for (int i = 0; i < y_offset; i++)
		{
		  setRow(8 - y_offset + i, left_array[i] & 0xff);
		  setRow(16 - y_offset + i, right_array[i] & 0xff);
		}
	}
    show();
}













