/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.matrix_iic_init = function (block) {
        Blockly.Arduino.definitions_[`matrix`] = '#include <Matrix.h>\n'+
        'Matrix myMatrix(A4,A5);\nuint8_t  LEDArray[8];';
        Blockly.Arduino.setups_['matrix_pin_setup'] = 'myMatrix.begin(112);\n  myMatrix.clear();';
        return '';
    };

//****************显示点*******************************

    Blockly.Arduino.matrix_iic_piexl = function (block) {
        const xVal = Blockly.Arduino.valueToCode(block, 'xVal', Blockly.Arduino.ORDER_ATOMIC);
        const yVal = Blockly.Arduino.valueToCode(block, 'yVal', Blockly.Arduino.ORDER_ATOMIC);
        const matrix_state = this.getFieldValue('state');

        return 'myMatrix.drawPixel('+xVal+'-0,'+yVal+'-0,'+matrix_state+');\n';
    };

//****************显示直线*******************************
Blockly.Arduino.matrix_iic_drawLine = function (block) {
    const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
    const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
    const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
    const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
  
    return `myMatrix.drawLine(${x0}, ${y0}, ${x1}, ${y1},HIGH);\n`;
};


//****************显示长方形*******************************
Blockly.Arduino.matrix_iic_drawrectangle = function (block) {
    const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
    const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
    const l1 = Blockly.Arduino.valueToCode(block, 'L1', Blockly.Arduino.ORDER_ATOMIC);
    const w1 = Blockly.Arduino.valueToCode(block, 'W1', Blockly.Arduino.ORDER_ATOMIC);
  
    return `myMatrix.fillRect(${x0}, ${y0}, ${l1}, ${w1},HIGH);\n`;
};

//****************显示圆形*******************************
Blockly.Arduino.matrix_iic_drawcircle = function (block) {
    const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
    const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
    const r0 = Blockly.Arduino.valueToCode(block, 'R0', Blockly.Arduino.ORDER_ATOMIC);
  
    return `myMatrix.drawCircle(${x0}, ${y0}, ${r0},HIGH);\n`;
};


//****************显示文本和数字*******************************
Blockly.Arduino.matrix_iic_showChar = function (block) {
    const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC);
   

    return `myMatrix.setTextSize(1);\nmyMatrix.setTextWrap(false);\nmyMatrix.setTextColor(HIGH);\nmyMatrix.setRotation(0);\nmyMatrix.setCursor(2,0);\nmyMatrix.print(${text});\n`;
};


//****************显示文本和数字滚动*******************************
Blockly.Arduino.matrix_iic_show_loop = function (block) {
    const message = Blockly.Arduino.valueToCode(block, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);
    const speed =  Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
    
    return `myMatrix.setTextSize(1);\nmyMatrix.setTextWrap(false);\nmyMatrix.setTextColor(HIGH);\nmyMatrix.setRotation(0);\nmyMatrix.scrollMessage(${message},${speed});\n`;
         
};


Blockly.Arduino.matrix_iic_face = function (block) {
        Blockly.Arduino.definitions_[`1matrix_face`] = 
        'uint8_t matrix_smile[8]={0x00,0x18,0x24,0x00,0x00,0xa5,0xa5,0x42};\n'+
        'uint8_t matrix_front[8]={0x18,0x18,0x18,0x18,0xdb,0x7e,0x3c,0x18};\n'+
        'uint8_t matrix_back[8]={0x18,0x3c,0x7e,0xdb,0x18,0x18,0x18,0x18};\n'+
        'uint8_t matrix_left[8]={0x08,0x0c,0x06,0xff,0xff,0x06,0x0c,0x08};\n'+
        'uint8_t matrix_right[8]={0x10,0x30,0x60,0xff,0xff,0x60,0x30,0x10};\n'+
        'uint8_t matrix_stop[8]={0x00,0x7e,0x42,0x5a,0x5a,0x42,0x7e,0x00};\n'+
        'uint8_t matrix_tsundere[8]={0x00,0x00,0x04,0x28,0x10,0x00,0xe7,0x00};\n'+
        'uint8_t matrix_squinting[8]={0x00,0x00,0x3c,0x81,0x42,0x24,0x42,0x81};\n'+
        'uint8_t matrix_despise1[8]={0x00,0x00,0x3c,0x00,0x00,0xee,0x88,0x00};\n'+
        'uint8_t matrix_speechless[8]={0x00,0x3c,0x24,0x3c,0x00,0x00,0xe7,0x00};\n'+
        'uint8_t matrix_heart[8]={0x18,0x3c,0x7e,0xff,0xff,0xff,0xe7,0x42};\n'+
        'uint8_t matrix_clear[8]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';

        Blockly.Arduino.definitions_[`2matrix_display`] = 'int matrix_display(uint8_t led_array[8])'+
        '{\n'+
        '  for(int i=0; i<8; i++)\n'+
        '  {\n'+
        '    LEDArray[i]=led_array[i];\n'+
        '    for(int j=7; j>=0; j--)\n'+
        '    {\n'+
        '      if((LEDArray[i]&0x01)>0)\n'+
        '      myMatrix.drawPixel(j, i,1);\n'+
        '      LEDArray[i] = LEDArray[i]>>1;\n'+
        '    }\n'+
        '  }\n'+
        '}\n';

        const matrix_face = this.getFieldValue('face');

        return 'matrix_display('+matrix_face+');\n';
    };

    Blockly.Arduino.matrix_iic_refresh = function (block) {
        return 'myMatrix.write();\n';
    };

    Blockly.Arduino.matrix_iic_clear = function (block) {
        return 'myMatrix.clear();\n';
    };

    return Blockly;
}

exports = addGenerator;
