/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.lcd_pin_init = function (block) {
        const rs = block.getFieldValue('RS');
        const en = block.getFieldValue('EN');
        const d4 = block.getFieldValue('D4');
        const d5 = block.getFieldValue('D5');
        const d6 = block.getFieldValue('D6');
        const d7 = block.getFieldValue('D7');

        Blockly.Arduino.includes_.lcd_init = `#include <LiquidCrystal.h>`;
        Blockly.Arduino.definitions_.lcd_init = `LiquidCrystal mylcd(${rs}, ${en}, ${d4}, ${d5}, ${d6}, ${d7});`;
        Blockly.Arduino.setups_[`lcd_setup`] = 'mylcd.begin(16,2);\n';

        return ``;
    };


    Blockly.Arduino.lcd_pin_print = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `mylcd.setCursor(${x}, ${y});\n mylcd.print(${data});\n`;
    };

    Blockly.Arduino.lcd_pin_clear = function (block) {
        const state = block.getFieldValue('lcd_state');
        return `mylcd.${state};\n`;
    };

   

    return Blockly;
}

exports = addGenerator;
