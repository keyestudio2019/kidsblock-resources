/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.mlx_init = function (block) {
        Blockly.Arduino.includes_.include_mlx_init = `#include <Wire.h>\n#include <Adafruit_MLX90614.h>\n`;
        Blockly.Arduino.definitions_['mlx'] = 'Adafruit_MLX90614 mlx = Adafruit_MLX90614();\n';

        Blockly.Arduino.setups_['mlx_setThreshold'] = 'mlx.begin();\n';
        return '';
    };

    Blockly.Arduino.mlx_read = function (block) {
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;

