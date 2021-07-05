/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.dht_init = function (block) {
        const pin = block.getFieldValue('pin');
        const mode = this.getFieldValue('mode');

        Blockly.Arduino.includes_.include_dht_init = `#include <DHT.h>`;
        Blockly.Arduino.definitions_[`dht_init_${pin}`] = `DHT dht_(${pin}, ${mode});`;
        return '';
    };

    Blockly.Arduino.dht_readHumidity = function (block) {
        return [`dht_.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.dht_readTemperature = function (block) {
        const unit = this.getFieldValue('unit');
        return [`dht_.readTemperature(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
