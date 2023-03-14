/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.lps331ap_read = function (block) {
        Blockly.Arduino.includes_.include_LPS331AP_init = `#include <LPS331AP.h>\n`;
        Blockly.Arduino.definitions_[`LPS331AP`] = `LPS331AP LPS331AP;\n`;
        Blockly.Arduino.setups_['LPS331AP_getdata'] = 'LPS331AP.begin();\nLPS331AP.measure();\n';
        const data = this.getFieldValue('data');
        return [`${data}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
