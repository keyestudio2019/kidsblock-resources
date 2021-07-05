/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.gesture_init = function (block) {
        Blockly.Arduino.includes_.include_gesture_init = `#include <Wire.h>\n#include <paj7620.h>\n`;
        Blockly.Arduino.definitions_.gesture_var = '#define GES_REACTION_TIME   500\n#define GES_ENTRY_TIME      800\n#define GES_QUIT_TIME     1000\nuint8_t data = 0, data1 = 0, error;\n';
        Blockly.Arduino.setups_['gestureInit'] = 'error = paj7620Init();\n'+
        '  if (error) {\n'+
        '  Serial.print("INIT ERROR,CODE:");\n'+
        '  Serial.println(error);\n'+
        '  } else {\n'+
        '    Serial.println("INIT OK");\n'+
        '  }\n';

        return '';
    };

    Blockly.Arduino.gesture_read = function (block) {
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
