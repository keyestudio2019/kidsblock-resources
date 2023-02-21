/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_STEPPER_CATEGORY: 'Stepper 28BYJ-48',
        KS_STEPPER_INIT: 'Init IN1#%1 IN2%2 IN3%3 IN4%4 Steps per revolution%5 speed%6',
        KS_STEPPER_STEP: 'Stepper step%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_STEPPER_CATEGORY: '步进电机28BYJ-48',
        KS_STEPPER_INIT: '初始化 IN1%1 IN2%2 IN3%3 IN4%4 每转步数%5 速度%6',
        KS_STEPPER_STEP: '步进电机 运转步数%1',
    });
    return Blockly;
}

exports = addMsg;
