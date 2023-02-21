/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.motor130_digital = function (block) {
        const pin1 = block.getFieldValue('IN1');
        const pin2 = block.getFieldValue('IN2');
        const state1 = this.getFieldValue('state1');
        const state2 = this.getFieldValue('state2');

        Blockly.Arduino.setups_[`motor130_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n';
        return 'digitalWrite('+pin1+','+state1+');\ndigitalWrite('+pin2+','+state2+');\n';
    };

    Blockly.Arduino.motor130_analog = function (block) {
        const pin1 = block.getFieldValue('IN1');
        const pin2 = block.getFieldValue('IN2');
        const val1 = Blockly.Arduino.valueToCode(block, 'SPEED1', Blockly.Arduino.ORDER_ATOMIC);
        const val2 = Blockly.Arduino.valueToCode(block, 'SPEED2', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.setups_[`motor130_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n';
        return 'analogWrite('+pin1+','+val1+');\nanalogWrite('+pin2+','+val2+');\n';
    };

    return Blockly;
}

exports = addGenerator;
