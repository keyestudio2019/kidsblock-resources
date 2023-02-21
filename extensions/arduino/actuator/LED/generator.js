/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.LED_setLEDState = function (block) {
        //const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('pin');
        const state = this.getFieldValue('state');

        Blockly.Arduino.setups_.Led_init = `pinMode(${pin}, OUTPUT);`;

        return `digitalWrite(${pin}, ${state});\n`;
    };

    return Blockly;
}

exports = addGenerator;
