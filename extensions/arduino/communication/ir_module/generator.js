/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.ir_init = function (block) {
        const pin = block.getFieldValue('pin');

        Blockly.Arduino.includes_.ir_init = '#include <IRremote.h>';
        Blockly.Arduino.definitions_.ir_init = 'long ir_item;\nIRrecv irrecv('+pin+');\ndecode_results results;\n';
        Blockly.Arduino.setups_['irrecv'] = 'irrecv.enableIRIn();\n';

        return ``;
    };

    Blockly.Arduino.ir_data = function () {
        return [`irrecv.decode(&results)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ir_read = function () {
        return [`results.value`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ir_refresh = function () {
        return 'irrecv.resume();\n';
    };

    return Blockly;
}

exports = addGenerator;
