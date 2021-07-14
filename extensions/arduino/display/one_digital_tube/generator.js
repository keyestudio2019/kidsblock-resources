/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.onetube_init = function (block) {
        Blockly.Arduino.definitions_[`onetube_var`] = 'int pin_a = 2;\n'+
        'int pin_b = 3;\n'+
        'int pin_c = 4;\n'+
        'int pin_d = 5;\n'+
        'int pin_e = 6;\n'+
        'int pin_f = 7;\n'+
        'int pin_g = 8;\n'+
        'int pin_p = 9;\n';

        Blockly.Arduino.setups_['onetube_setup'] = 'for (int i = 2; i <= 9; i++)\n  {\n    pinMode(i, OUTPUT);\n  }\n';
        return '';
    };

    Blockly.Arduino.onetube_number = function (block) {
        const oneNum = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        const dot_state = this.getFieldValue('state');

        Blockly.Arduino.definitions_[`onetube_data`] = 'int numTable[10][8] = {\n'+
        '  //a  b  c  d  e  f  g  dp\n'+
        '  {1, 1, 1, 1, 1, 1, 0, '+dot_state+'},     //0\n'+
        '  {0, 1, 1, 0, 0, 0, 0, '+dot_state+'},     //1\n'+
        '  {1, 1, 0, 1, 1, 0, 1, '+dot_state+'},     //2\n'+
        '  {1, 1, 1, 1, 0, 0, 1, '+dot_state+'},     //3\n'+
        '  {0, 1, 1, 0, 0, 1, 1, '+dot_state+'},     //4\n'+
        '  {1, 0, 1, 1, 0, 1, 1, '+dot_state+'},     //5\n'+
        '  {1, 0, 1, 1, 1, 1, 1, '+dot_state+'},     //6\n'+
        '  {1, 1, 1, 0, 0, 0, 0, '+dot_state+'},     //7\n'+
        '  {1, 1, 1, 1, 1, 1, 1, '+dot_state+'},     //8\n'+
        '  {1, 1, 1, 1, 0, 1, 1, '+dot_state+'},     //9\n'+
        '};\n';

        return 'digitalWrite(pin_a, numTable['+oneNum+'][0]);\n'+
        'digitalWrite(pin_b, numTable['+oneNum+'][1]);\n'+
        'digitalWrite(pin_c, numTable['+oneNum+'][2]);\n'+
        'digitalWrite(pin_d, numTable['+oneNum+'][3]);\n'+
        'digitalWrite(pin_e, numTable['+oneNum+'][4]);\n'+
        'digitalWrite(pin_f, numTable['+oneNum+'][5]);\n'+
        'digitalWrite(pin_g, numTable['+oneNum+'][6]);\n'+
        'digitalWrite(pin_p, numTable['+oneNum+'][7]);\n';
    };


    return Blockly;
}

exports = addGenerator;
