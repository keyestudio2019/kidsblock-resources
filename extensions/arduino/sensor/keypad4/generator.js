/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.keypad_init = function (block) {
        Blockly.Arduino.includes_.include_keypad_init = '#include <Keypad.h>\n';
        Blockly.Arduino.definitions_[`keypad_def`] = 'const byte ROWS = 4;\n'+
        'const byte COLS = 4;\n'+
        'char keys[ROWS][COLS] = {\n'+
        '{\'1\',\'2\',\'3\',\'A\'},\n'+
        '{\'4\',\'5\',\'6\',\'B\'},\n'+
        '{\'7\',\'8\',\'9\',\'C\'},\n'+
        '{\'*\',\'0\',\'#\',\'D\'}\n'+
        '};\n'+
        'byte rowPins[ROWS] = {2,3,4,5};\n'+
        'byte colPins[COLS] = {6,7,8,9};\n'+
        'Keypad keypad = Keypad( makeKeymap(keys), rowPins, colPins, ROWS, COLS );\n';

        Blockly.Arduino.definitions_[`keypad_val`] = 'int key_val() {\n'+
        '  char key = keypad.getKey();\n'+
        '  if (key != NO_KEY){\n'+
        '    return key;\n'+
        '  }\n'+
        '}\n';

        return '';
    };

    Blockly.Arduino.keypad_read = function (block) {
        return [`key_val()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
