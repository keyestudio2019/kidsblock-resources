/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.matrix_iic_init = function (block) {
        Blockly.Arduino.definitions_[`ks_matrix`] = '#include <ks_Matrix.h>\n'+
        'Matrix myMatrix(A4,A5);\nuint8_t  LEDArray[8];\n';
        Blockly.Arduino.setups_['matrix_pin_setup'] = 'myMatrix.begin(112);\n  myMatrix.clear();\n';
        return '';
    };

    Blockly.Arduino.matrix_iic_face = function (block) {
        Blockly.Arduino.definitions_[`1matrix_face`] = 'uint8_t matrix_smile[8]={0x00,0x18,0x24,0x00,0x00,0xa5,0xa5,0x42};\n'+
        'uint8_t matrix_front[8]={0x00,0x81,0x42,0x24,0x99,0x42,0x24,0x18};\n'+
        'uint8_t matrix_back[8]={0x18,0x24,0x42,0x99,0x24,0x42,0x81,0x00};\n'+
        'uint8_t matrix_left[8]={0x48,0x24,0x12,0x09,0x09,0x12,0x24,0x48};\n'+
        'uint8_t matrix_right[8]={0x12,0x24,0x48,0x90,0x90,0x48,0x24,0x12};\n'+
        'uint8_t matrix_stop[8]={0x18,0x18,0x00,0x18,0x18,0x18,0x18,0x18};\n'+
        'uint8_t matrix_tsundere[8]={0x00,0x00,0x00,0x20,0x14,0x08,0xf7,0x00};\n'+
        'uint8_t matrix_squinting[8]={0x00,0x00,0x3c,0x81,0x42,0x24,0x42,0x81};\n'+
        'uint8_t matrix_despise1[8]={0x00,0x00,0x00,0x3c,0x00,0xe7,0x21,0x00};\n'+
        'uint8_t matrix_speechless[8]={0x00,0x00,0x1c,0x14,0x1c,0x00,0x77,0x00};\n'+
        'uint8_t matrix_heart[8]={0x00,0x00,0x18,0x24,0x42,0x81,0x99,0x66};\n'+
        'uint8_t matrix_clear[8]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';

        Blockly.Arduino.definitions_[`2matrix_display`] = 'int matrix_display(uint8_t led_array[8])'+
        '{\n'+
        '  for(int i=8; i>0; i--)\n'+
        '  {\n'+
        '    LEDArray[i]=led_array[i];\n'+
        '    for(int j=0; j<=7; j++)\n'+
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

    Blockly.Arduino.matrix_iic_piexl = function (block) {
        const xVal = Blockly.Arduino.valueToCode(block, 'xVal', Blockly.Arduino.ORDER_ATOMIC);
        const yVal = Blockly.Arduino.valueToCode(block, 'yVal', Blockly.Arduino.ORDER_ATOMIC);
        const matrix_state = this.getFieldValue('state');

        return 'myMatrix.drawPixel(7-'+xVal+',7-'+yVal+','+matrix_state+');\n';
    };

    Blockly.Arduino.matrix_iic_refresh = function (block) {
        return 'myMatrix.writeDisplay();\n';
    };


    return Blockly;
}

exports = addGenerator;
