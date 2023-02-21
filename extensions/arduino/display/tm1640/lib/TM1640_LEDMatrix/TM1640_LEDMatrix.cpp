// 
// 
// 

#include "TM1640_LEDMatrix.h"

LEDMatrix::LEDMatrix(uint8_t SCK_Pin, uint8_t DIN_Pin) //初始化LEDMatrix
{
	u8_SCKPin = SCK_Pin;
	u8_DINPin = DIN_Pin;

	pinMode(u8_SCKPin, OUTPUT);
	pinMode(u8_DINPin, OUTPUT);
	digitalWrite(u8_SCKPin, HIGH);
	digitalWrite(u8_DINPin, HIGH);

	writeByte(Mode_Address_Auto_Add_1);
	setBrightness(Brightness_5);
	clearScreen();
}

void LEDMatrix::setColorIndex(bool Color_Number)//设置显示模式，正常为1，反向为0
{
	b_Color_Index = Color_Number;
}

void LEDMatrix::setBrightness(uint8_t Bright)
{
	if ((uint8_t)Bright > 8)
	{
		Bright = Brightness_8;
	}

	if ((uint8_t)Bright != 0)
	{
		Bright = (LED_Matrix_Brightness_TypeDef)((uint8_t)(Bright - 1) | 0x08);

	}
	writeByte(0x80 | (uint8_t)Bright);
}

void LEDMatrix::writeByte(uint8_t data)//向TM1640写数据
{
	//Start
	digitalWrite(u8_SCKPin, HIGH);
	digitalWrite(u8_DINPin, LOW);

	for (char i = 0; i < 8; i++)
	{
		digitalWrite(u8_SCKPin, LOW);
		digitalWrite(u8_DINPin, (data & 0x01));
		digitalWrite(u8_SCKPin, HIGH);
		data = data >> 1;
	}

	//End
	digitalWrite(u8_SCKPin, LOW);
	digitalWrite(u8_DINPin, LOW);
	digitalWrite(u8_SCKPin, HIGH);
	digitalWrite(u8_DINPin, HIGH);
	// delayMicroseconds(1);
}

void LEDMatrix::drawStr(int16_t X_position, int8_t Y_position, const char* str)
{

	b_Draw_Str_Flag = 1;

	for (i16_Number_of_Character_of_Str = 0; str[i16_Number_of_Character_of_Str] != '\0'; i16_Number_of_Character_of_Str++)
	{
		if (i16_Number_of_Character_of_Str < STRING_DISPLAY_BUFFER_SIZE - 1)
		{
			i8_Str_Display_Buffer[i16_Number_of_Character_of_Str] = str[i16_Number_of_Character_of_Str];
		}
		else
		{
			break;
		}
	}
	i8_Str_Display_Buffer[i16_Number_of_Character_of_Str] = '\0';


	if (X_position < -(i16_Number_of_Character_of_Str * 6))
	{
		X_position = -(i16_Number_of_Character_of_Str * 6);
	}
	else if (X_position > 16)
	{
		X_position = 16;
	}
	i16_Str_Display_X_Position = X_position;


	if (Y_position < -1)
	{
		Y_position = -1;
	}
	else if (Y_position > 15)
	{
		Y_position = 15;
	}
	i8_Str_Display_Y_Position = Y_position;

	showStr();
}

void LEDMatrix::clearScreen()
{
    for (uint8_t i = 0; i < LED_BUFFER_SIZE; i++)
    {
        u8_Display_Buffer[i] = 0x00;
    }

    b_Color_Index = 1;
    b_Draw_Str_Flag = 0;

    writeBytesToAddress(0, u8_Display_Buffer, LED_BUFFER_SIZE);
}

void LEDMatrix::showStr()
{
    uint8_t display_buffer_label = 0;

    if (i16_Str_Display_X_Position > 0)
    {
        for (display_buffer_label = 0; display_buffer_label < i16_Str_Display_X_Position && display_buffer_label < LED_BUFFER_SIZE; display_buffer_label++)
        {
            u8_Display_Buffer[display_buffer_label] = 0x00;
        }

        if (display_buffer_label < LED_BUFFER_SIZE)
        {
            uint8_t num;

            for (uint8_t k = 0; display_buffer_label < LED_BUFFER_SIZE && k < i16_Number_of_Character_of_Str; k++)
            {
                for (num = 0; pgm_read_byte(&Character_font_6x8[num].Character[0]) != '@'; num++)
                {
                    if (i8_Str_Display_Buffer[k] == pgm_read_byte(&Character_font_6x8[num].Character[0]))
                    {
                        for (uint8_t j = 0; j < 6; j++)
                        {
                            u8_Display_Buffer[display_buffer_label] = pgm_read_byte(&Character_font_6x8[num].data[j]);
                            display_buffer_label++;

                            if (display_buffer_label >= LED_BUFFER_SIZE)
                            {
                                break;
                            }
                        }
                        break;
                    }
                }

                if (pgm_read_byte(&Character_font_6x8[num].Character[0]) == '@')
                {
                    i8_Str_Display_Buffer[k] = ' ';
                    k--;
                }
            }

            if (display_buffer_label < LED_BUFFER_SIZE)
            {
                for (display_buffer_label = display_buffer_label; display_buffer_label < LED_BUFFER_SIZE; display_buffer_label++)
                {
                    u8_Display_Buffer[display_buffer_label] = 0x00;
                }
            }
        }
    }

    else if (i16_Str_Display_X_Position <= 0)
    {
        if (i16_Str_Display_X_Position == -(i16_Number_of_Character_of_Str * 6))
        {
            for (; display_buffer_label < LED_BUFFER_SIZE; display_buffer_label++)
            {
                u8_Display_Buffer[display_buffer_label] = 0x00;
            }
        }
        else
        {
            int8_t j = (-i16_Str_Display_X_Position) % 6;
            uint8_t num;

            i16_Str_Display_X_Position = -i16_Str_Display_X_Position;

            for (int16_t k = i16_Str_Display_X_Position / 6; display_buffer_label < LED_BUFFER_SIZE && k < i16_Number_of_Character_of_Str; k++)
            {
                for (num = 0; pgm_read_byte(&Character_font_6x8[num].Character[0]) != '@'; num++)
                {
                    if (i8_Str_Display_Buffer[k] == pgm_read_byte(&Character_font_6x8[num].Character[0]))
                    {
                        for (; j < 6; j++)
                        {
                            u8_Display_Buffer[display_buffer_label] = pgm_read_byte(&Character_font_6x8[num].data[j]);
                            display_buffer_label++;

                            if (display_buffer_label >= LED_BUFFER_SIZE)
                            {
                                break;
                            }
                        }
                        j = 0;
                        break;
                    }
                }

                if (pgm_read_byte(&Character_font_6x8[num].Character[0]) == '@')
                {
                    i8_Str_Display_Buffer[k] = ' ';
                    k--;
                }

            }

            if (display_buffer_label < LED_BUFFER_SIZE)
            {
                for (; display_buffer_label < LED_BUFFER_SIZE; display_buffer_label++)
                {
                    u8_Display_Buffer[display_buffer_label] = 0x00;
                }
            }

            i16_Str_Display_X_Position = -i16_Str_Display_X_Position;
        }
    }


    if (7 - i8_Str_Display_Y_Position >= 0)
    {
        for (uint8_t k = 0; k < LED_BUFFER_SIZE; k++)
        {
            u8_Display_Buffer[k] = u8_Display_Buffer[k] << (7 - i8_Str_Display_Y_Position);
        }
    }
    else
    {
        for (uint8_t k = 0; k < LED_BUFFER_SIZE; k++)
        {
            u8_Display_Buffer[k] = u8_Display_Buffer[k] >> (i8_Str_Display_Y_Position - 7);
        }
    }


    if (b_Color_Index == 0)
    {
        for (uint8_t k = 0; k < LED_BUFFER_SIZE; k++)
        {
            u8_Display_Buffer[k] = ~u8_Display_Buffer[k];
        }
    }

    writeBytesToAddress(0, u8_Display_Buffer, LED_BUFFER_SIZE);
}

void LEDMatrix::writeBytesToAddress(uint8_t Address, const uint8_t* P_data, uint8_t count_of_data)
{
    //init
    digitalWrite(u8_SCKPin, HIGH);
    digitalWrite(u8_DINPin, HIGH);
    uint8_t T_data;

    if (Address > 15 || count_of_data == 0)
        return;

    Address = ADDRESS(Address);

    //Start
    digitalWrite(u8_SCKPin, HIGH);
    digitalWrite(u8_DINPin, LOW);

    //write Address
    for (char i = 0; i < 8; i++)
    {
        digitalWrite(u8_SCKPin, LOW);
        digitalWrite(u8_DINPin, (Address & 0x01));
        digitalWrite(u8_SCKPin, HIGH);
        Address = Address >> 1;
    }


    //write data
    for (uint8_t k = 0; k < count_of_data; k++)
    {
        T_data = *(P_data + k);

        for (char i = 0; i < 8; i++)
        {
            digitalWrite(u8_SCKPin, LOW);
            digitalWrite(u8_DINPin, (T_data & 0x80));
            digitalWrite(u8_SCKPin, HIGH);
            T_data = T_data << 1;
        }
    }

    //End
    digitalWrite(u8_SCKPin, LOW);
    digitalWrite(u8_DINPin, LOW);
    //digitalWrite(u8_SCKPin, HIGH);
   // digitalWrite(u8_DINPin, HIGH); //解决关机后，插入USB，点阵板亮的问题
    // delayMicroseconds(1);
}

