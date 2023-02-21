/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.matrix8_16_init = function (block) {
        const SDA = block.getFieldValue('SDA');
        const SCL = block.getFieldValue('SCL');
        Blockly.Arduino.definitions_[`matrix_init`] = '#define IIC_SCL  '+SCL+'\n'+
        '#define IIC_SDA  '+SDA+'\nunsigned char clear[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n'+
        'unsigned char data_line = 0;\n'+
        'unsigned char delay_count = 0;\n';
        Blockly.Arduino.definitions_[`IIC_send`] = 'void IIC_send(unsigned char send_data)\n'+
        '{\n'+
        '  for(char i = 0;i < 8;i++)\n'+
        '  {\n'+
        '      digitalWrite(IIC_SCL,LOW);\n'+
        '      delayMicroseconds(3);\n'+
        '      if(send_data & 0x01)\n'+
        '      {\n'+
        '        digitalWrite(IIC_SDA,HIGH);\n'+
        '      }\n'+
        '      else\n'+
        '      {\n'+
        '        digitalWrite(IIC_SDA,LOW);\n'+
        '      }\n'+
        '      delayMicroseconds(3);\n'+
        '      digitalWrite(IIC_SCL,HIGH);\n'+
        '      delayMicroseconds(3);\n'+
        '      send_data = send_data >> 1;\n'+
        '  }\n'+
        '}\n';

        Blockly.Arduino.definitions_[`IIC_end`] = 'void IIC_end()\n'+
        '{'+
        '  digitalWrite(IIC_SCL,LOW);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SDA,LOW);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SCL,HIGH);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SDA,HIGH);\n'+
        '  delayMicroseconds(3);\n'+
        '}\n';

        Blockly.Arduino.definitions_[`IIC_start`] = 'void IIC_start()\n'+
        '{\n'+
        '  digitalWrite(IIC_SCL,LOW);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SDA,HIGH);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SCL,HIGH);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SDA,LOW);\n'+
        '  delayMicroseconds(3);\n'+
        '}\n';

        Blockly.Arduino.definitions_[`matrix_display`] = 'void matrix_display(unsigned char matrix_value[])\n'+
        '{\n'+
        '  IIC_start();\n'+
        '  IIC_send(0xc0);\n'+
        '  for(int i = 0;i < 16;i++)\n'+
        '  {\n'+
        '     IIC_send(matrix_value[i]);\n'+
        '  }\n'+
        '  IIC_end();\n'+
        '  IIC_start();\n'+
        '  IIC_send(0x8A);\n'+
        '  IIC_end();\n'+
        '}\n';


        Blockly.Arduino.setups_['matrix_816_setup'] = 'pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  matrix_display(clear);\n';
        return '';
    };

    Blockly.Arduino.matrix8_16_face = function (block) {
        Blockly.Arduino.definitions_[`1matrix_face`] = 'unsigned char start01[] = {0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x80, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01};\n'+
        'unsigned char matrix_smile[] = {0x00, 0x00, 0x1c, 0x02, 0x02, 0x02, 0x5c, 0x40, 0x40, 0x5c, 0x02, 0x02, 0x02, 0x1c, 0x00, 0x00};\n'+
        'unsigned char matrix_speechless[] = {0x00, 0x02, 0x02, 0x02, 0x02, 0x02, 0x78, 0x48, 0x48, 0x78, 0x02, 0x02, 0x02, 0x02, 0x02, 0x00};\n'+
        'unsigned char matrix_heart[] = {0x00,0x00,0x0C,0x1E,0x3F,0x7F,0xFE,0xFC,0xFE,0x7F,0x3F,0x1E,0x0C,0x00,0x00,0x00};\n'+
        'unsigned char matrix_front[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x12,0x09,0x12,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n'+
        'unsigned char matrix_back[] = {0x00,0x00,0x00,0x00,0x00,0x24,0x48,0x90,0x48,0x24,0x00,0x00,0x00,0x00,0x00,0x00};\n'+
        'unsigned char matrix_right[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x44,0x28,0x10,0x44,0x28,0x10,0x44,0x28,0x10,0x00};\n'+
        'unsigned char matrix_left[] = {0x00,0x10,0x28,0x44,0x10,0x28,0x44,0x10,0x28,0x44,0x00,0x00,0x00,0x00,0x00,0x00};\n'+
        'unsigned char matrix_stop[] = {0x2E,0x2A,0x3A,0x00,0x02,0x3E,0x02,0x00,0x3E,0x22,0x3E,0x00,0x3E,0x0A,0x0E,0x00};\n'+
        'unsigned char matrix_tsundere[] = {0x00, 0x00, 0x02, 0x02, 0x02, 0x12, 0x08, 0x04, 0x08, 0x12, 0x22, 0x02, 0x02, 0x00, 0x00, 0x00};'+
        'unsigned char matrix_squinting[] = {0x00, 0x00, 0x00, 0x41, 0x22, 0x14, 0x48, 0x40, 0x40, 0x48, 0x14, 0x22, 0x41, 0x00, 0x00, 0x00};'+
        'unsigned char matrix_despise1[] = {0x00, 0x00, 0x06, 0x04, 0x04, 0x04, 0x24, 0x20, 0x20, 0x26, 0x04, 0x04, 0x04, 0x04, 0x00, 0x00};';

        const matrix_face = this.getFieldValue('face');

        return 'matrix_display('+matrix_face+');\n';
    };


    Blockly.Arduino.matrix8_16_clear = function (block) {
        return 'matrix_display(clear);\n';
    };

    return Blockly;
}

exports = addGenerator;
