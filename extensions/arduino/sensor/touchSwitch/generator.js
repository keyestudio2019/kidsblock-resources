/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino['touchSwitch_readValue'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "(digitalRead(" + arg0 + ")==1)";
        Blockly.Arduino.setups_.touchSwitch_init = `pinMode(${arg0}, INPUT);`;
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['touchSwitch_state'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "digitalRead(" + arg0 + ")";
        Blockly.Arduino.setups_.touchSwitch_init = `pinMode(${arg0}, INPUT);`;
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    return Blockly;
}

exports = addGenerator;
