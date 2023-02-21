/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino['pir_readValue'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "digitalRead(" + arg0 + ")";
        Blockly.Arduino.setups_.pir_init = `pinMode(${arg0}, INPUT);`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    return Blockly;
}

exports = addGenerator;
