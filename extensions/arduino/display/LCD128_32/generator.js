/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.lcd128_init = function (block) {
        Blockly.Arduino.includes_.include_lcd128_init = `#include <lcd.h>\n`;
        Blockly.Arduino.definitions_[`lcd128_var`] = `lcd Lcd;\n`;
        Blockly.Arduino.setups_['lcd128_setup'] = 'Lcd.Init();\n';
        return '';
    };

    Blockly.Arduino.lcd128_cursor = function (block) {
        const row = this.getFieldValue('row');
        const col = this.getFieldValue('col');
        return 'Lcd.Cursor('+row+','+col+');\n';
    };

    Blockly.Arduino.lcd128_string = function (block) {
        const lcd128str = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
        return 'Lcd.Display('+lcd128str+');\n';
    };

    Blockly.Arduino.lcd128_pixel = function (block) {
        const row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
        const col = Blockly.Arduino.valueToCode(block, 'col', Blockly.Arduino.ORDER_ATOMIC);
        return `Lcd.DisplayPixel(${row},${col});\n`;
    };

    Blockly.Arduino.lcd128_d_pixel = function (block) {
        const row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
        const col = Blockly.Arduino.valueToCode(block, 'col', Blockly.Arduino.ORDER_ATOMIC);
        return `Lcd.ClearPixel(${row},${col});\n`;
    };


    Blockly.Arduino.lcd128_clear = function (block) {
        return 'Lcd.Clear();\n';
    };

    return Blockly;
}

exports = addGenerator;
