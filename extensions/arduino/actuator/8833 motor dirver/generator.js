/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.motor8833 = function (block) {
        Blockly.Arduino.includes_.include_motor8833 = `#include <DRV8833.h>\n`;
        Blockly.Arduino.definitions_[`motor8833`] = `DRV8833 DRV8833;\n`;
        const motor = this.getFieldValue('MOTOR');
        const state = this.getFieldValue('STATE');
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.setups_[`motor8833`] = 'DRV8833.init();\n';

        return 'DRV8833.'+motor+'('+state+','+speed+');\n';
    };

    return Blockly;
}

exports = addGenerator;
