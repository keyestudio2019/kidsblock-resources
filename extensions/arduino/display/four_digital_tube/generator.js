/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tm1650_string = function (block) {
        const tm1650str = Blockly.Arduino.valueToCode(block, 'tube_string', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
        Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
        Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\n  tm_4display.init();\n';
        return 'tm_4display.displayString('+tm1650str+');\n';
    };

    Blockly.Arduino.tm1650_dot = function (block) {
        const dot = this.getFieldValue('dot');
        const dot_state = this.getFieldValue('state');
        Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
        Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
        Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\ntm_4display.init();\n';
        return 'tm_4display.setDot('+dot+','+dot_state+');\n';
    };

    Blockly.Arduino.tm1650_state = function (block) {
        const state = this.getFieldValue('state');
        Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
        Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
        Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\n  tm_4display.init();\n';
        return ''+state+'\n';
    };




    return Blockly;
}

exports = addGenerator;
