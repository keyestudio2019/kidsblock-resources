/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino['joyStick_xyValue'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "analogRead(" + arg0 + ")";
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['joyStick_zState'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "(digitalRead(" + arg0 + ")==1)";
        Blockly.Arduino.setups_.joyStick_init = `pinMode(${arg0}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    return Blockly;
}

exports = addGenerator;
