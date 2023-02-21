/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tm1650_init = function (block) {
        const num = block.getFieldValue('NUM');
        Blockly.Arduino.includes_.tm1650_init = `#include <TM1650.h>`;
        Blockly.Arduino.definitions_[`tm1650_init_${num}`] = `TM1650 tm1650_${num};`;

        return `tm1650_${num}.init();\n`;
    };

    Blockly.Arduino.tm1650_screenSet = function (block) {
        const num = block.getFieldValue('NUM');
        const type = block.getFieldValue('TYPE');
        Blockly.Arduino.includes_.tm1650_init = `#include <TM1650.h>`;
        Blockly.Arduino.definitions_[`tm1650_init_${num}`] = `TM1650 tm1650_${num};`;

        return `tm1650_${num}.${type}();\n`;
    };

    Blockly.Arduino.tm1650_show = function (block) {
        const num = block.getFieldValue('NUM');
        var text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        if(text.length>4){
            text=text.slice(0, 4);
        }
        Blockly.Arduino.includes_.tm1650_init = `#include <TM1650.h>`;
        Blockly.Arduino.definitions_[`tm1650_init_${num}`] = `TM1650 tm1650_${num};`;

        return `tm1650_${num}.displayString("${text}");\n`;
    };

    Blockly.Arduino.tm1650_setDot = function (block) {
        const num = block.getFieldValue('NUM');
        const dot_num = block.getFieldValue('DOT_NUM');
        const type = block.getFieldValue('TYPE');
        Blockly.Arduino.includes_.tm1650_init = `#include <TM1650.h>`;
        Blockly.Arduino.definitions_[`tm1650_init_${num}`] = `TM1650 tm1650_${num};`;

        return `tm1650_${num}.setDot(${dot_num}-1,${type});\n`;
    };

    return Blockly;
}

exports = addGenerator;
