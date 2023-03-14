/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.sc7a20_read = function (block) {
        Blockly.Arduino.includes_.include_SC7A20_init = `#include <SC7A20.h>\n`;
        Blockly.Arduino.definitions_[`SC7A20_1`] = `SC7A20_Class SC7A20;\n`;
        Blockly.Arduino.setups_['SC7A20_getAddress'] = 'SC7A20.begin();\n  SC7A20.measure();\n';
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
