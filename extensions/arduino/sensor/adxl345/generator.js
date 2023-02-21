/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.adxl345_read = function (block) {
        Blockly.Arduino.includes_.include_adxl_init = `#include <Wire.h>\n#include <I2Cdev.h>\n#include <ADXL345.h>\n`;
        Blockly.Arduino.definitions_[`adxl_1`] = `ADXL345 accel;\n`;
        Blockly.Arduino.setups_['adxl_getAddress'] = 'Wire.begin();\n  accel.initialize();\n';
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
