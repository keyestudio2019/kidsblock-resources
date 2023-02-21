/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino['analogVoice_readValue'] = function(block) {
        var arg0 = block.getFieldValue('PIN') || 'A0';
        var code = "analogRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    return Blockly;
}

exports = addGenerator;
