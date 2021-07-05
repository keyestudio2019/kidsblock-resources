/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.rgb6812_init = function (block) {
        const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const state = this.getFieldValue('state');
        const count = Blockly.Arduino.valueToCode(block, 'count', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_[`NeoPixel`] = '#include <Adafruit_NeoPixel.h>\nAdafruit_NeoPixel rgb_display_'+pin+' = Adafruit_NeoPixel('+count+','+pin+','+state+');\n';

        Blockly.Arduino.setups_[`NeoPixel_setup`] = 'rgb_display_'+pin+'.begin();\n';
        return '';
    };

    Blockly.Arduino.dis_rgb = function (block) {
        const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const lights = Blockly.Arduino.valueToCode(block, 'lights', Blockly.Arduino.ORDER_ATOMIC);
        const red = Blockly.Arduino.valueToCode(block, 'red', Blockly.Arduino.ORDER_ATOMIC);
        const green = Blockly.Arduino.valueToCode(block, 'green', Blockly.Arduino.ORDER_ATOMIC);
        const blue = Blockly.Arduino.valueToCode(block, 'blue', Blockly.Arduino.ORDER_ATOMIC);

        return 'rgb_display_'+pin+'.setPixelColor(('+lights+')-1, (('+red+' & 0xffffff) << 16) | (('+green+' & 0xffffff) << 8) | '+blue+');\n';
    };

    Blockly.Arduino.rgb6812_brightness = function (block) {
        const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const brightness = Blockly.Arduino.valueToCode(block, 'brightness', Blockly.Arduino.ORDER_ATOMIC);

        return 'rgb_display_'+pin+'.setBrightness('+brightness+');\n';
    };

    Blockly.Arduino.rgb6812_show = function (block) {
        const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);

        return 'rgb_display_'+pin+'.show();\n';
    };

    return Blockly;
}

exports = addGenerator;
