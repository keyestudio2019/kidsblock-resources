/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.bh_init = function (block) {
        Blockly.Arduino.includes_.include_bh_init = `#include <Wire.h>\n#include <BH1750.h>\n`;
        Blockly.Arduino.definitions_[`bh`] = `BH1750 lightMeter;\n`;

        Blockly.Arduino.setups_['bh_setThreshold'] = 'Wire.begin();\n lightMeter.begin();\n';
        return '';
    };

    Blockly.Arduino.bh_read = function (block) {
        return [`lightMeter.readLightLevel()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;

