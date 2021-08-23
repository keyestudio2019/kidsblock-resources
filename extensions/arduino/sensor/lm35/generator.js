/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.lm35_readTemperature = function (block) {
        const pin = block.getFieldValue('PIN');
        return [`analogRead(${pin}) * 0.488`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
