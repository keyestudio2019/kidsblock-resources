/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.mpu6050_init = function (block) {
        Blockly.Arduino.includes_.include_mpu6050_init = `#include <MPU6050.h>\n#include <Wire.h>`;
        Blockly.Arduino.definitions_[`mpu6050_1`] = `MPU6050 mpu;`;
        Blockly.Arduino.setups_['getAddress'] = 'mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_2G);';
        return '';
    };

    Blockly.Arduino.mpu6050_refresh = function (block) {
        const code = 'Vector normAccel = mpu.readNormalizeAccel();\nVector normGyro = mpu.readNormalizeGyro();\n';
        return code;
    };

    Blockly.Arduino.mpu6050_read = function (block) {
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
