/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MOTOR8833_CATEGORY: '8833 Motor Driver',
        MOTOR8833_DRIVER: 'Motor#%1 direction%2 speed#%3',

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MOTOR8833_CATEGORY: '8833电机驱动',
        MOTOR8833_DRIVER: '电机%1 方向为%2 速度%3',

    });
    return Blockly;
}

exports = addMsg;
