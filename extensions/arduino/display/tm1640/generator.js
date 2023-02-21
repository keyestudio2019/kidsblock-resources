/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tm1640_init = function (block) {
        const num = block.getFieldValue('NUM');
        const CLK = block.getFieldValue('CLK');
        const DIO = block.getFieldValue('DIO');

        Blockly.Arduino.includes_.tm1640_init = `#include <TM1640_LEDMatrix.h>`;
        Blockly.Arduino.definitions_[`tm1640_init_${num}`] = `LEDMatrix tm1640_${num}(${CLK}, ${DIO});`;

        return ``;
    };

    Blockly.Arduino.tm1640_setColorIndex = function (block) {
        const num = block.getFieldValue('NUM');
        const mode = block.getFieldValue('MODE');
        return `tm1640_${num}.setColorIndex(${mode});\n`;
    };

    Blockly.Arduino.tm1640_setBrightness  = function (block) {
        const num = block.getFieldValue('NUM');
        const brightness = block.getFieldValue('BRIGHTNESS');

        return `tm1640_${num}.setBrightness(${brightness});\n`;
    };

    Blockly.Arduino.tm1640_y = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tm1640_drawStr  = function (block) {
        const num = block.getFieldValue('NUM');
        const posx = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const posy = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        var str = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        if(str.length>20){
            str=str.slice(0, 20);
        }

        return `tm1640_${num}.drawStr(${posx}, ${posy}, "${str}");\n`;
    };

    return Blockly;
}

exports = addGenerator;
