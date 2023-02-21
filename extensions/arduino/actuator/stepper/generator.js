/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.stepper_init = function (block) {
        const IN1 = block.getFieldValue('IN1');
        const IN2 = block.getFieldValue('IN2');
        const IN3 = block.getFieldValue('IN3');
        const IN4 = block.getFieldValue('IN4');
        const step_speed = Blockly.Arduino.valueToCode(block, 'steps', Blockly.Arduino.ORDER_ATOMIC);
        const speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_stepper_init = '#include <Stepper.h>\n';
        Blockly.Arduino.definitions_[`stepper_val`] = 'Stepper mystepper('+step_speed+','+IN1+','+IN3+','+IN2+','+IN4+');\n';
        Blockly.Arduino.setups_[`stepper_setup`] = 'mystepper.setSpeed('+speed+');';
        return '';
    };

    Blockly.Arduino.stepper_step = function (block) {
        const stepNum = Blockly.Arduino.valueToCode(block, 'stepsNum', Blockly.Arduino.ORDER_ATOMIC);

        return 'mystepper.step('+stepNum+');\n';
    };

    return Blockly;
}

exports = addGenerator;
