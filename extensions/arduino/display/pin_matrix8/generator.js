/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.matrix_pin_init = function (block) {
        Blockly.Arduino.definitions_[`onetube_var`] = 'int R[] = {2,7,A5,5,13,A4,12,A2};\n'+
        'int C[] = {6,11,10,3,A3,4,8,9};\n';
        Blockly.Arduino.definitions_[`1photo_bigheart`] = 
        'unsigned char big_heart[8][8] =\n'+
        '{\n'+
        '{0,0,0,0,0,0,0,0},\n'+
        '{0,1,1,0,0,1,1,0},\n'+
        '{1,1,1,1,1,1,1,1},\n'+
        '{1,1,1,1,1,1,1,1},\n'+
        '{1,1,1,1,1,1,1,1},\n'+
        '{0,1,1,1,1,1,1,0},\n'+
        '{0,0,1,1,1,1,0,0},\n'+
        '{0,0,0,1,1,0,0,0}\n'+
        '};\n';
        Blockly.Arduino.definitions_[`1photo_smallheart`] = 
        'unsigned char small_heart[8][8] =\n'+
        '{\n'+
        '{0,0,0,0,0,0,0,0},\n'+
        '{0,0,0,0,0,0,0,0},\n'+
        '{0,0,1,0,0,1,0,0},\n'+
        '{0,1,1,1,1,1,1,0},\n'+
        '{0,1,1,1,1,1,1,0},\n'+
        '{0,0,1,1,1,1,0,0},\n'+
        '{0,0,0,1,1,0,0,0},\n'+
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
