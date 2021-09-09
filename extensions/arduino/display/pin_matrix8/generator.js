/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.matrix_pin_init = function (block) {
        Blockly.Arduino.definitions_[`onetube_var`] = 'int R[] = {2,3,4,5,6,7,8,9};\n'+
        'int C[] = {10,11,12,13,A0,A1,A2,A3};\n';

        Blockly.Arduino.definitions_[`1data_0`] = 
        'unsigned char data_0[8][8] =\n'+
        '{\n'+
        '{0,0,1,1,1,0,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,0,1,1,1,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_1`] = 
        'unsigned char data_1[8][8] =\n'+
        '{\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,1,1,0,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,1,1,1,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_2`] = 
        'unsigned char data_2[8][8] =\n'+
        '{\n'+
        '{0,0,1,1,1,0,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,1,0,0,0,0},\n'+
        '{0,0,1,0,0,0,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_3`] = 
        'unsigned char data_3[8][8] =\n'+
        '{\n'+
        '{0,0,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,0,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,0,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_4`] = 
        'unsigned char data_4[8][8] =\n'+
        '{\n'+
        '{0,1,0,0,0,0,0,0},\n'+
        '{0,1,0,0,1,0,0,0},\n'+
        '{0,1,0,0,1,0,0,0},\n'+
        '{0,1,1,1,1,1,1,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,0,0,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_5`] = 
        'unsigned char data_5[8][8] =\n'+
        '{\n'+
        '{0,1,0,0,0,0,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,1,0,0,0,0,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_6`] = 
        'unsigned char data_6[8][8] =\n'+
        '{\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,1,0,0,0,0,0,0},\n'+
        '{0,1,0,0,0,0,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_7`] = 
        'unsigned char data_7[8][8] =\n'+
        '{\n'+
        '{0,0,0,0,0,0,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,0,0,0,1,0,0,0},\n'+
        '{0,0,0,1,0,0,0,0},\n'+
        '{0,0,1,0,0,0,0,0},\n'+
        '{0,1,0,0,0,0,0,0},\n'+
        '{0,0,0,0,0,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_8`] = 
        'unsigned char data_8[8][8] =\n'+
        '{\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`1data_9`] = 
        'unsigned char data_9[8][8] =\n'+
        '{\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,0,0,0,1,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,0,0,0,0,1,0,0},\n'+
        '{0,1,1,1,1,1,0,0},\n'+
        '{0,0,0,0,0,0,0,0}\n'+
        '};\n';

        Blockly.Arduino.definitions_[`matrix_pin_display`] = 
        'void Display(unsigned char dat[8][8])\n'+
        '{\n'+
        'for(int c = 0; c<8;c++)\n'+
        '{\n'+
        'digitalWrite(C[c],LOW);\n'+
        'for(int r = 0;r<8;r++)\n'+
        '{\n'+
        'digitalWrite(R[r],dat[r][c]);\n'+
        '}\n'+
        'delay(1);\n'+
        'Clear();\n'+
        '}\n'+
        '}\n';

        Blockly.Arduino.definitions_[`matrix_pin_clear`] = 
        'void Clear()\n'+
        '{\n'+
        'for(int i = 0;i<8;i++)\n'+
        '{\n'+
        'digitalWrite(R[i],LOW);\n'+
        'digitalWrite(C[i],HIGH);\n'+
        '}\n'+
        '}\n';

        Blockly.Arduino.setups_['matrix_pin_setup'] = 'for(int i = 0;i<8;i++)\n  {\n    pinMode(R[i],OUTPUT);\n    pinMode(C[i],OUTPUT);\n  }\n';
        return '';
    };

    Blockly.Arduino.matrix_pin_display = function (block) {
        const matrix_photo = this.getFieldValue('photo');

        return 'Display('+matrix_photo+');\n';
    };


    return Blockly;
}

exports = addGenerator;
