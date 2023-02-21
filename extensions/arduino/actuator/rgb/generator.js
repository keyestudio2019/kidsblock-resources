/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.rgb_digital = function (block) {
        const pin1 = block.getFieldValue('PIN1');
        const pin2 = block.getFieldValue('PIN2');
        const pin3 = block.getFieldValue('PIN3');
        const state1 = this.getFieldValue('state1');
        const state2 = this.getFieldValue('state2');
        const state3 = this.getFieldValue('state3');

        Blockly.Arduino.setups_[`rgb_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n  pinMode('+pin3+', OUTPUT);\n';
        return 'digitalWrite('+pin1+','+state1+');\ndigitalWrite('+pin2+','+state2+');\ndigitalWrite('+pin3+','+state3+');\n';
    };

    Blockly.Arduino.rgb_analog = function (block) {
        const pin1 = block.getFieldValue('PIN1');
        const pin2 = block.getFieldValue('PIN2');
        const pin3 = block.getFieldValue('PIN3');
        const val1 = Blockly.Arduino.valueToCode(block, 'val1', Blockly.Arduino.ORDER_ATOMIC);
        const val2 = Blockly.Arduino.valueToCode(block, 'val2', Blockly.Arduino.ORDER_ATOMIC);
        const val3 = Blockly.Arduino.valueToCode(block, 'val3', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.setups_[`rgb_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n  pinMode('+pin3+', OUTPUT);\n';
        return 'analogWrite('+pin1+','+val1+');\nanalogWrite('+pin2+','+val2+');\nanalogWrite('+pin3+','+val3+');\n';
    };

    return Blockly;
}

exports = addGenerator;
