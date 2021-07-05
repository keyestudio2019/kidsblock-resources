/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.t18b20_readTemperature = function (block) {
        const pin = block.getFieldValue('PIN');
        var t_mode = this.getFieldValue('mode');
        Blockly.Arduino.includes_.include_t18b20_init = `#include <OneWire.h>\n#include <DallasTemperature.h>`;
        Blockly.Arduino.definitions_[`t18b20_init_${pin}`] = `OneWire oneWire_${pin}(${pin});\nDallasTemperature sensors_${pin}(&oneWire_${pin});\nDeviceAddress insideThermometer;`;
        Blockly.Arduino.setups_['getAddress'] = 'sensors_'+pin+'.getAddress(insideThermometer, 0);\n  sensors_'+pin+'.setResolution(insideThermometer, 9);';

        Blockly.Arduino.definitions_[`ds18b20_${pin}_getTemp`] = `float ds18b20_${pin}_getTemp(int w) {\n`+
            '  sensors_'+pin+'.requestTemperatures();\n'+
            '  if(w==0) {\n'+
            '    return sensors_'+pin+'.getTempC(insideThermometer);\n'+
            '  }\n'+
            '  else {\n'+
            '    return sensors_'+pin+'.getTempF(insideThermometer);\n'+
            '  }\n'+
            '}\n';

        return [`ds18b20_${pin}_getTemp(${t_mode})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
