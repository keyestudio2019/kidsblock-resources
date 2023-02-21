/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino['lightSensor_readValue'] = function(block) {
        var arg0 = block.getFieldValue('pin') || 'A0';
        var code = "analogRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    return Blockly;
}

exports = addGenerator;
