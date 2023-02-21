/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ks_servo270_angle = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_[`servo270_${pin}`] = 'int servopin = '+pin+';\n'+
        'int myangle;\n'+
        'int pulsewidth;\n'+
        'void servopulse(int servopin,int myangle)\n'+
        '{\n'+
        '  pulsewidth = (myangle * 6.67) + 600;\n'+
        '  digitalWrite(servopin,HIGH);\n'+
        '  delayMicroseconds(pulsewidth);\n'+
        '  digitalWrite(servopin,LOW);\n'+
        '  delay(20 - pulsewidth / 1000);\n'+
        '}\n';
        Blockly.Arduino.setups_[`servo270_init_${pin}`] = 'pinMode(servopin,OUTPUT);';
        return 'servopulse(servopin, '+angle+');\n delay('+time+');\n';
    };

    

    return Blockly;
}

exports = addGenerator;
