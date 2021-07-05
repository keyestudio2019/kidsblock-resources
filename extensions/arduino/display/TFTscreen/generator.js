/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tft_init = function (block) {
        const cs = Blockly.Arduino.valueToCode(block, 'cs', Blockly.Arduino.ORDER_ATOMIC);
        const dc = Blockly.Arduino.valueToCode(block, 'dc', Blockly.Arduino.ORDER_ATOMIC);
        const rst = Blockly.Arduino.valueToCode(block, 'rst', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.include_tft_init = `#include <SPI.h>\n#include <TFT.h>\n`;
        Blockly.Arduino.definitions_[`tft_var`] = `#define cs ${cs}\n#define dc ${dc}\n#define rst ${rst}\nTFT screen = TFT(cs, dc, rst);`;
        Blockly.Arduino.setups_['tft_setup'] = 'screen.begin();\n';
        return '';
    };

    Blockly.Arduino.tft_background = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'bR', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'bG', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'bB', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.background('+r+','+g+','+b+');\n';
    };

    Blockly.Arduino.tft_stroke = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 's_r', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 's_g', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 's_b', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.stroke('+r+','+g+','+b+');\n';
    };

    Blockly.Arduino.tft_nostroke = function (block) {
        return 'screen.noStroke();\n';
    };

    Blockly.Arduino.tft_fill = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'f_r', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'f_g', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'f_b', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.fill('+r+','+g+','+b+');\n';
    };

    Blockly.Arduino.tft_nofill = function (block) {
        return 'screen.noFill();\n';
    };

    Blockly.Arduino.tft_text = function (block) {
        const str = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
        const x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.text('+str+','+x+','+y+');\n';
    };

    Blockly.Arduino.tft_textSize = function (block) {
        const size = Blockly.Arduino.valueToCode(block, 'size', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.setTextSize('+size+');\n';
    };

    Blockly.Arduino.tft_point = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'xp', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'yp', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.point('+x+','+y+');\n';
    };

    Blockly.Arduino.tft_line = function (block) {
        const xs = Blockly.Arduino.valueToCode(block, 'xs', Blockly.Arduino.ORDER_ATOMIC);
        const ys = Blockly.Arduino.valueToCode(block, 'ys', Blockly.Arduino.ORDER_ATOMIC);
        const xe = Blockly.Arduino.valueToCode(block, 'xe', Blockly.Arduino.ORDER_ATOMIC);
        const ye = Blockly.Arduino.valueToCode(block, 'ye', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.line('+xs+','+ys+','+xe+','+ye+');\n';
    };

    Blockly.Arduino.tft_rect = function (block) {
        const xs = Blockly.Arduino.valueToCode(block, 'xs', Blockly.Arduino.ORDER_ATOMIC);
        const ys = Blockly.Arduino.valueToCode(block, 'ys', Blockly.Arduino.ORDER_ATOMIC);
        const xe = Blockly.Arduino.valueToCode(block, 'xe', Blockly.Arduino.ORDER_ATOMIC);
        const ye = Blockly.Arduino.valueToCode(block, 'ye', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.rect('+xs+','+ys+','+xe+','+ye+');\n';
    };

    Blockly.Arduino.tft_textSize = function (block) {
        const size = Blockly.Arduino.valueToCode(block, 'size', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.setTextSize('+size+');\n';
    };
    
    Blockly.Arduino.tft_width = function (block) {
        return ['screen.width()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tft_height = function (block) {
        return ['screen.height()', Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.tft_circle = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'x', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'y', Blockly.Arduino.ORDER_ATOMIC);
        const radius = Blockly.Arduino.valueToCode(block, 'radius', Blockly.Arduino.ORDER_ATOMIC);
        return 'screen.circle('+x+','+y+','+radius+');\n';
    };


    return Blockly;
}

exports = addGenerator;
