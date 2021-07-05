/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.heartRate_init = function (block) {
        Blockly.Arduino.includes_.include_heart_init = `#include <Wire.h>\n#include <MAX30105.h>\n#include <heartRate.h>`;
        Blockly.Arduino.definitions_[`heartRate_var`] = `MAX30105 particleSensor;\nconst byte RATE_SIZE = 4;\nbyte rates[RATE_SIZE];\nbyte rateSpot = 0;\nlong lastBeat = 0;\nfloat beatsPerMinute;\nint beatAvg;\n`;
        Blockly.Arduino.setups_['getAddress'] = 'if (!particleSensor.begin(Wire, I2C_SPEED_FAST))\n'+
        '  {\n'+
        '    Serial.println("MAX30105 was not found. Please check wiring/power. ");\n'+
        '    while (1);\n'+
        '  }\n'+
        '  particleSensor.setup();\n'+
        '  particleSensor.setPulseAmplitudeRed(0x0A);\n'+
        '  particleSensor.setPulseAmplitudeGreen(0);\n';

        return '';
    };

    Blockly.Arduino.heartRate_read = function (block) {
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.heartRate_set = function (block) {
        const code = '  long irValue = particleSensor.getIR();\n'+
        '  if (checkForBeat(irValue) == true)\n'+
        '  {\n'+
        '    long delta = millis() - lastBeat;\n'+
        '    lastBeat = millis();\n'+
        '    beatsPerMinute = 60 / (delta / 1000.0);\n'+
        '    if (beatsPerMinute < 255 && beatsPerMinute > 20)\n'+
        '    {\n'+
        '      rates[rateSpot++] = (byte)beatsPerMinute;\n'+
        '      rateSpot %= RATE_SIZE;\n'+
        '      beatAvg = 0;\n'+
        '      for (byte x = 0 ; x < RATE_SIZE ; x++)\n'+
        '        beatAvg += rates[x];\n'+
        '      beatAvg /= RATE_SIZE;\n'+
        '    }\n'+
        '  }\n';
        return code;
    };

    return Blockly;
}

exports = addGenerator;
