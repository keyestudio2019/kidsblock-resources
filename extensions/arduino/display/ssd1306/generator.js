/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ssd1306_init = function (block) {

        const num = block.getFieldValue('NUM');
        var addr = Blockly.Arduino.valueToCode(block, 'ADDR', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);;

        Blockly.Arduino.includes_.ssd1306_init = `#include <SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_[`ssd1306_init_${num}`]= `SSD1306_I2C oled_${num};`;

        return `oled_${num}.begin(${addr});\n`;
    };
    Blockly.Arduino.ssd1306_printline = function (block) {
        const num = block.getFieldValue('NUM');
        var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        if(text.length>20){
            text=text.slice(0, 20);
        }

        const line = block.getFieldValue('LINE');

        Blockly.Arduino.includes_.ssd1306_init = `#include <SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_[`ssd1306_init_${num}`]= `SSD1306_I2C oled_${num};`;

        return `oled_${num}.setCursorLine(${line});\noled_${num}.printLine("${text}");\n`;
    };
    Blockly.Arduino.ssd1306_x = function (block) {
        const num = block.getFieldValue('XNUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.ssd1306_print  = function (block) {
        const num = block.getFieldValue('NUM');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = block.getFieldValue('Y');

        var str = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        if(str.length>20){
            str=str.slice(0, 20);
        }

        Blockly.Arduino.includes_.ssd1306_init = `#include <SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_[`ssd1306_init_${num}`]= `SSD1306_I2C oled_${num};`;

        return `oled_${num}.setCursor(${x}, ${y});\noled_${num}.print("${str}");\n`;
    };
    Blockly.Arduino.ssd1306_clear = function (block) {
        const num = block.getFieldValue('NUM');
        Blockly.Arduino.includes_.ssd1306_init = `#include <SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_[`ssd1306_init_${num}`]= `SSD1306_I2C oled_${num};`;

        return `oled_${num}.fillScreen(0);\n`;
    };
    Blockly.Arduino.ssd1306_setRotaion = function (block) {
        const num = block.getFieldValue('NUM');
        const angle = block.getFieldValue('ANGLE');

        Blockly.Arduino.includes_.ssd1306_init = `#include <SSD1306_I2C.h>`;
        Blockly.Arduino.definitions_[`ssd1306_init_${num}`]= `SSD1306_I2C oled_${num};`;

        return `oled_${num}.setRotaion(eROTATION_${angle});\n`;
    };

    return Blockly;
}

exports = addGenerator;
