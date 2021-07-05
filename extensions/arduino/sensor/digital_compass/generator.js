/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.compass_init = function (block) {
        Blockly.Arduino.includes_.include_dht_init = `#include <Wire.h>\n#include <HMC5883L.h>`;
        Blockly.Arduino.definitions_[`HMC5883L`] = `HMC5883L compass;\n`;

        Blockly.Arduino.setups_['hmc_setThreshold'] = 'while (!compass.begin())\n'+
        '  {\n'+
        '    Serial.println("Could not find a valid HMC5883L sensor, check wiring!");\n'+
        '    delay(500);\n'+
        '  }\n'+
        '  compass.setRange(HMC5883L_RANGE_1_3GA);\n'+
        '  compass.setMeasurementMode(HMC5883L_CONTINOUS);\n'+
        '  compass.setDataRate(HMC5883L_DATARATE_15HZ);\n'+
        '  compass.setSamples(HMC5883L_SAMPLES_1);\n';
       
        return '';
    };

    Blockly.Arduino.compass_set = function (block) {
        const code = 'Vector raw = compass.readRaw();\nVector norm = compass.readNormalize();\n';
        return code;
    };

    Blockly.Arduino.compass_read = function (block) {
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;

