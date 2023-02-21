/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.ir_init = function (block) {
        const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.ir_init = '#include <IRremote.h>';
        Blockly.Arduino.definitions_.ir_init = 'IRsend irsend;\n';
        return `irsend.sendNEC(0x89ABCDEF,32);\n`;
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
