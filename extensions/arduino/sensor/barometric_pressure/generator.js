/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.bmp388_init = function (block) {
        Blockly.Arduino.includes_.include_bmp388_init = `#include <BMP388.h>`;
        Blockly.Arduino.definitions_.bmp388_var = 'int32_t s32PressureVal = 0, s32TemperatureVal = 0, s32AltitudeVal = 0;\n';
        Blockly.Arduino.setups_['getAddress'] = 'bool bRet;\n'+
        '  PRESS_EN_SENSOR_TYPY enPressureType;\n'+
        '  pressSensorInit( &enPressureType );\n'+
        '  if(PRESS_EN_SENSOR_TYPY_BMP388 == enPressureType)\n'+
        '  {\n'+
        '    Serial.println("Pressure sersor is BMP388");\n'+
        '  }\n'+
        '  else\n'+
        '  {\n'+
        '    Serial.println("Pressure sersor NULL");\n'+
        '  }\n';

        return ' pressSensorDataGet(&s32TemperatureVal, &s32PressureVal, &s32AltitudeVal);\n';
    };

    Blockly.Arduino.bmp388_read = function (block) {
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
