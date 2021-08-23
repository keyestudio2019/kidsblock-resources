/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    
    Blockly.Arduino.ks_74hc595_init = function (block) {
        const st_cp = block.getFieldValue('st_cp');
        const sh_cp = block.getFieldValue('sh_cp');
        const ds = block.getFieldValue('ds');

        Blockly.Arduino.includes_.include_74hc595_init = 'int st_cp = '+st_cp+';\nint sh_cp = '+sh_cp+';\nint ds = '+ds+';\n';
        Blockly.Arduino.definitions_[`74hc595_val`] = 'int ouput_74hc595(boolean q1, boolean q2, boolean q3, boolean q4, boolean q5, boolean q6, boolean q7, boolean q8) {\n'+
        '  digitalWrite(st_cp,LOW);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q8);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q7);\n'+
        '  digitalWrite(sh_cp,HIGH);\n'+
        '  digitalWrite(sh_cp,LOW);\n \n'+
        '  digitalWrite(ds,q6);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q5);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q4);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q3);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q2);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(sh_cp,LOW);\n'+
        '  digitalWrite(ds,q1);\n'+
        '  digitalWrite(sh_cp,HIGH);\n \n'+
        '  digitalWrite(st_cp,HIGH);\n'+
        '}\n';
        Blockly.Arduino.setups_[`74hc595_setup`] = 'pinMode(st_cp,OUTPUT);\n  pinMode(sh_cp,OUTPUT);\n  pinMode(ds,OUTPUT);\n';
        return '';
    };

    Blockly.Arduino.ks_74hc595_output = function (block) {
        const out1 = Blockly.Arduino.valueToCode(block, 'q1', Blockly.Arduino.ORDER_ATOMIC);
        const out2 = Blockly.Arduino.valueToCode(block, 'q2', Blockly.Arduino.ORDER_ATOMIC);
        const out3 = Blockly.Arduino.valueToCode(block, 'q3', Blockly.Arduino.ORDER_ATOMIC);
        const out4 = Blockly.Arduino.valueToCode(block, 'q4', Blockly.Arduino.ORDER_ATOMIC);
        const out5 = Blockly.Arduino.valueToCode(block, 'q5', Blockly.Arduino.ORDER_ATOMIC);
        const out6 = Blockly.Arduino.valueToCode(block, 'q6', Blockly.Arduino.ORDER_ATOMIC);
        const out7 = Blockly.Arduino.valueToCode(block, 'q7', Blockly.Arduino.ORDER_ATOMIC);
        const out8 = Blockly.Arduino.valueToCode(block, 'q8', Blockly.Arduino.ORDER_ATOMIC);

        return 'ouput_74hc595('+out1+', '+out2+', '+out3+', '+out4+', '+out5+', '+out6+', '+out7+', '+out8+');\n';
    };

    return Blockly;
}

exports = addGenerator;
