/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ks_encoder_init = function (block) {
        const dt = block.getFieldValue('dt');
        const clk = block.getFieldValue('clk');
        const mode = this.getFieldValue('mode');

        Blockly.Arduino.includes_.include_encoder_init = `#include <Encoder.h>`;
        Blockly.Arduino.definitions_[`encoder_init`] = `Encoder ${mode}(${dt}, ${clk});`;
        return '';
    };

    Blockly.Arduino.ks_encoder_read = function (block) {
        const mode = this.getFieldValue('mode');
        
        return [`${mode}.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.ks_encoder_write = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
        const mode = this.getFieldValue('mode');
        return `${mode}.write(${data})`;
    };

    Blockly.Arduino.ks_encoder_button = function (block) {
        const pin = block.getFieldValue('pin');
        return [`digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
