/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.tb4_init = function (block) {
        Blockly.Arduino.includes_.include_fourtube_init = `#include <SevSeg.h>\n`;
        Blockly.Arduino.definitions_[`fourtube_var`] = `SevSeg sevseg;\n`;
        Blockly.Arduino.setups_['fourtube_setup'] = 'byte numDigits = 4;\n  byte digitPins[] = {2, 3, 4, 5};\n'+
        '  byte segmentPins[] = {6, 7, 8, 9, 10, 11, 12, 13};\n'+
        '  bool resistorsOnSegments = false;\n'+
        '  byte hardwareConfig = COMMON_CATHODE;\n'+
        '  bool updateWithDelays = false;\n'+
        '  bool leadingZeros = false;\n'+
        '  bool disableDecPoint = false;\n'+
        'sevseg.begin(hardwareConfig, numDigits, digitPins, segmentPins, resistorsOnSegments,updateWithDelays, leadingZeros, disableDecPoint);\n'+
        '  sevseg.setBrightness(90);\n';
        return '';
    };

    Blockly.Arduino.tb4_number = function (block) {
        const tbNum = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        const state = this.getFieldValue('state');

        return 'static unsigned long timer = millis();\n'+
        '  static int deciSeconds = 0;\n'+
        '  if (millis() - timer >= 100) {\n'+
        '    timer += 100;\n'+
        '    deciSeconds++;\n'+
        '    if (deciSeconds == 10000) {\n'+
        '      deciSeconds=0;\n'+
        '    }\n'+
        '    sevseg.setNumber('+tbNum+', '+state+');\n'+
        '  }\n'+
        '  sevseg.refreshDisplay();\n';
    };

    return Blockly;
}

exports = addGenerator;
