/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
//初始化PAJ7620手势传感器
Blockly.Arduino.paj7620_init = function() {
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['include_paj7620'] = '#include "paj7620.h"';
    Blockly.Arduino.definitions_['define_GES_REACTION_TIME'] = '#define GES_REACTION_TIME    500 ';
    Blockly.Arduino.definitions_['define_GES_ENTRY_TIME'] = '#define GES_ENTRY_TIME     800   ';
    Blockly.Arduino.definitions_['define_GES_QUIT_TIME'] = '#define GES_QUIT_TIME      1000';
    Blockly.Arduino.definitions_['var_gesturesDetection'] = 'int gesturesDetection()\n'+
    '{\n'+
    '  uint8_t data = 0, data1 = 0, error;\n'+
    '  error = paj7620ReadReg(0x43, 1, &data);\n'+
    '  if (!error)\n'+
    '  {\n'+
    '    switch (data)\n'+
    '    {\n'+
    '      case GES_RIGHT_FLAG:\n'+
    '        delay(GES_ENTRY_TIME);\n'+
    '        paj7620ReadReg(0x43, 1, &data);\n'+
    '        if (data == GES_FORWARD_FLAG)\n'+
    '        {\n'+
    '          return 0;\n'+
    '          delay(GES_QUIT_TIME);\n'+
    '        }\n'+
    '        else if (data == GES_BACKWARD_FLAG)\n'+
    '        {\n'+
    '          return 1;\n'+
    '          delay(GES_QUIT_TIME);\n'+
    '        }\n'+
    '        else\n'+
    '        {\n'+
    '          return 3;\n'+
    '        }\n'+
    '        break;\n'+
    '      case GES_LEFT_FLAG:\n'+
    '        delay(GES_ENTRY_TIME);\n'+
    '        paj7620ReadReg(0x43, 1, &data);\n'+
    '        if (data == GES_FORWARD_FLAG)\n'+
    '        {\n'+
    '          return 0;\n'+
    '          delay(GES_QUIT_TIME);\n'+
    '        }\n'+
    '        else if (data == GES_BACKWARD_FLAG)\n'+
    '        {\n'+
    '          return 1;\n'+
    '          delay(GES_QUIT_TIME);\n'+
    '        }\n'+
    '        else\n'+
    '        {\n'+
    '          return 2;\n'+
    '        }\n'+
    '        break;\n'+
    '      case GES_UP_FLAG:\n'+
    '        delay(GES_ENTRY_TIME);\n'+
    '        paj7620ReadReg(0x43, 1, &data);\n'+
    '        if (data == GES_FORWARD_FLAG)\n'+
    '        {\n'+
    '          return 0;\n'+
    '          delay(GES_QUIT_TIME);\n'+
    '        }\n'+
    '        else if (data == GES_BACKWARD_FLAG)\n'+
    '        {\n'+
    '          return 1;\n'+
    '          delay(GES_QUIT_TIME);\n'+
    '        }\n'+
    '        else\n'+
    '        {\n'+
    '          return 4;\n'+
    '        }\n'+
    '        break;\n'+
    '      case GES_DOWN_FLAG:\n'+
    '        delay(GES_ENTRY_TIME);\n'+
    '        paj7620ReadReg(0x43, 1, &data);\n'+
    '        if (data == GES_FORWARD_FLAG)\n'+
    '        {\n'+
    '          return 0;\n'+
    '          delay(GES_QUIT_TIME);\n'+
    '        }\n'+
    '        else if (data == GES_BACKWARD_FLAG)\n'+
    '        {\n'+
    '          return 1;\n'+
    '          delay(GES_QUIT_TIME);\n'+
    '        }\n'+
    '        else\n'+
    '        {\n'+
    '          return 5;\n'+
    '        }\n'+
    '        break;\n'+
    '      case GES_FORWARD_FLAG:\n'+
    '        return 0;\n'+
    '        delay(GES_QUIT_TIME);\n'+
    '        break;\n'+
    '      case GES_BACKWARD_FLAG:\n'+
    '        return 1;\n'+
    '        delay(GES_QUIT_TIME);\n'+
    '        break;\n'+
    '      case GES_CLOCKWISE_FLAG:\n'+
    '        return 6;\n'+
    '        break;\n'+
    '      case GES_COUNT_CLOCKWISE_FLAG:\n'+
    '        return 7;\n'+
    '        break;\n'+
    '      default:\n'+
    '        paj7620ReadReg(0x44, 1, &data1);\n'+
    '        if (data1 == GES_WAVE_FLAG)\n'+
    '        {\n'+
    '          return 8;\n'+
    '        }\n'+
    '        break;\n'+
    '    }\n'+
    '  }\n'+
    '  return -1;\n'+
    '}\n'
  
  
    Blockly.Arduino.setups_['setup_paj7620'] = 'paj7620Init();';
    var code = 'int gesturesNum = gesturesDetection();\n';
    return code;
  };
  
  //PAJ7620手势传感器 手势数据
  Blockly.Arduino.paj7620_data = function() {
    var data = this.getFieldValue('DATA');
    var code = 'gesturesNum == '+data;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

    return Blockly;
}

exports = addGenerator;
