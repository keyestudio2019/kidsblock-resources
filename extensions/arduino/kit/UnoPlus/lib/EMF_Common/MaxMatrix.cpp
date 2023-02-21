/*
 * MaxMatrix
 * Version 1.0 Feb 2013
 * Copyright 2013 Oscar Kin-Chung Au
 */


#include "Arduino.h"
#include "MaxMatrix.h"

MaxMatrix::MaxMatrix(byte _data, byte _load, byte _clock, byte _num) 
{
	data = _data;
	load = _load;
	clock = _clock;
	num = _num;
	for (int i=0; i<80; i++)
		buffer[i] = 0;
}

MaxMatrix::MaxMatrix(byte col[8], byte row[8])
{
	  byte i;
    Serial.println("MaxMatrix\n");
    for (i = 0; i < 8; i++)
    { 
        col_pin[i] = col[i];
        row_pin[i] = row[i];
        pinMode(row_pin[i] , OUTPUT );
        pinMode(col_pin[i] , OUTPUT );
    }
    clearMatrix();
}

void MaxMatrix::scan()
{
    byte i, j;
     for (j = 0; j < 8; j++)
     {
        for (i = 0; i < 8; i++)
        {
            if (bitRead(buffer[j], i))
            digitalWrite(row_pin[i], LOW);
            else
            digitalWrite(row_pin[i], HIGH);
        }
        digitalWrite(col_pin[j], HIGH);
        delay(2);
        digitalWrite(col_pin[j], LOW);
    }
}


void MaxMatrix::init()
{
	pinMode(data,  OUTPUT);
	pinMode(clock, OUTPUT);
	pinMode(load,  OUTPUT);
	digitalWrite(clock, HIGH); 

	setCommand(max7219_reg_scanLimit, 0x07);      
	setCommand(max7219_reg_decodeMode, 0x00);  // using an led matrix (not digits)
	setCommand(max7219_reg_shutdown, 0x01);    // not in shutdown mode
	setCommand(max7219_reg_displayTest, 0x00); // no display test
	
	// empty registers, turn all LEDs off
	clearMatrix();
	
	setIntensity(0x0f);    // the first 0x0f is the value you can set
}

void MaxMatrix::setIntensity(byte intensity)
{
	setCommand(max7219_reg_intensity, intensity);
}

void MaxMatrix::clearMatrix()
{
	for (int i=0; i<8; i++) 
		setColumnAll(i,0);
		
	for (int i=0; i<80; i++)
		buffer[i] = 0;
}

void MaxMatrix::setCommand(byte command, byte value)
{
	digitalWrite(load, LOW);    
	for (int i=0; i<num; i++) 
	{
		shiftOut(data, clock, MSBFIRST, command);
		shiftOut(data, clock, MSBFIRST, value);
	}
	digitalWrite(load, LOW);
	digitalWrite(load, HIGH);
}


void MaxMatrix::setColumn(byte col, byte value)
{
	int n = col / 8;
	int c = col % 8;
	digitalWrite(load, LOW);    
	for (int i=0; i<num; i++) 
	{
		if (i == n)
		{
			shiftOut(data, clock, MSBFIRST, c + 1);
			shiftOut(data, clock, MSBFIRST, value);
		}
		else
		{
			shiftOut(data, clock, MSBFIRST, 0);
			shiftOut(data, clock, MSBFIRST, 0);
		}
	}
	digitalWrite(load, LOW);
	digitalWrite(load, HIGH);
	
	buffer[col] = value;
}

void MaxMatrix::setColumnAll(byte col, byte value)
{
	digitalWrite(load, LOW);    
	for (int i=0; i<num; i++) 
	{
		shiftOut(data, clock, MSBFIRST, col + 1);
		shiftOut(data, clock, MSBFIRST, value);
		buffer[col * i] = value;
	}
	digitalWrite(load, LOW);
	digitalWrite(load, HIGH);
}

void MaxMatrix::setDot(byte col, byte row, byte value)
{
    bitWrite(buffer[col], row, value);

	int n = col / 8;
	int c = col % 8;
	digitalWrite(load, LOW);    
	for (int i=0; i<num; i++) 
	{
		if (i == n)
		{
			shiftOut(data, clock, MSBFIRST, c + 1);
			shiftOut(data, clock, MSBFIRST, buffer[col]);
		}
		else
		{
			shiftOut(data, clock, MSBFIRST, 0);
			shiftOut(data, clock, MSBFIRST, 0);
		}
	}
	digitalWrite(load, LOW);
	digitalWrite(load, HIGH);
}

/* void MaxMatrix::writeSprite(int x, int y, const byte* sprite)
{
	int w = sprite[0];
	int h = sprite[1];
	
	if (h == 8 && y == 0)
		for (int i=0; i<w; i++)
		{
			int c = x + i;
			if (c>=0 && c<80)
				setColumn(c, sprite[i+2]);
		}
	else
		for (int i=0; i<w; i++)
			for (int j=0; j<h; j++)
			{
				int c = x + i;
				int r = y + j;
				if (c>=0 && c<80 && r>=0 && r<8)
					setDot(c, r, bitRead(sprite[i+2], j));
			}
}

void MaxMatrix::reload()
{
	for (int i=0; i<8; i++)
	{
		int col = i;
		digitalWrite(load, LOW);    
		for (int j=0; j<num; j++) 
		{
			shiftOut(data, clock, MSBFIRST, i + 1);
			shiftOut(data, clock, MSBFIRST, buffer[col]);
			col += 8;
		}
		digitalWrite(load, LOW);
		digitalWrite(load, HIGH);
	}
}

void MaxMatrix::shiftLeft(bool rotate, bool fill_zero)
{
	byte old = buffer[0];
	int i;
	for (i=0; i<80; i++)
		buffer[i] = buffer[i+1];
	if (rotate) buffer[num*8-1] = old;
	else if (fill_zero) buffer[num*8-1] = 0;
	
	reload();
}

void MaxMatrix::shiftRight(bool rotate, bool fill_zero)
{
	int last = num*8-1;
	byte old = buffer[last];
	int i;
	for (i=79; i>0; i--)
		buffer[i] = buffer[i-1];
	if (rotate) buffer[0] = old;
	else if (fill_zero) buffer[0] = 0;
	
	reload();
}

void MaxMatrix::shiftUp(bool rotate)
{
	for (int i=0; i<num*8; i++)
	{
		bool b = buffer[i] & 1;
		buffer[i] >>= 1;
		if (rotate) bitWrite(buffer[i], 7, b);
	}
	reload();
}

void MaxMatrix::shiftDown(bool rotate)
{
	for (int i=0; i<num*8; i++)getMouthShape
	{
		bool b = buffer[i] & 128;
		buffer[i] <<= 1;
		if (rotate) bitWrite(buffer[i], 0, b);
	}
	reload();
}
*/
// rutina para Zowi, parameter suscaritas en la matriz de 8
void MaxMatrix::writeFull(unsigned long long value) {
    for (byte c=0; c<8; c++) {
        for (byte r=0; r<8; r++) {
            setDot(c, r,(1L & (value >> r*8+c)));
        }
    }
}

void MaxMatrix::drawShape(unsigned long value) {
    for (byte r=0; r<5;r++){
        for (byte c=0; c<6; c++) {
            setDot(1+c,1+r,(1L & (value >> r*6+c)));
        }
    }
}
unsigned long int MaxMatrix::getMouthShape(int number) {
  unsigned long int types []={zero_code,one_code,two_code,three_code,four_code,five_code,six_code,seven_code,eight_code,
  nine_code,smile_code,happyOpen_code,happyClosed_code,heart_code,bigSurprise_code,smallSurprise_code,tongueOut_code,
  vamp1_code,vamp2_code,lineMouth_code,confused_code,diagonal_code,sad_code,sadOpen_code,sadClosed_code,
  okMouth_code, xMouth_code,interrogation_code,thunder_code,culito_code,angry_code};

  return types[number];
}
