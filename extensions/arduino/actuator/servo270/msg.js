/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_SERVO_CATEGORY: 'servo 270°',
        KS_SERVO_ATTACH: 'servo PIN#%1 pulse width range(%2 , %3)',
        KS_SERVO_WRITE2: 'servo PIN#%1 degree%2',
        KS_SERVO_ANGLE: 'servo PIN#%1 degree%2 delay%3',
        KS_SERVO_READ: 'servo PIN#%1 read degree',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_SERVO_CATEGORY: '舵机270度',
        KS_SERVO_ATTACH: '舵机 引脚%1 设置脉宽范围(%2 , %3)',
        KS_SERVO_WRITE2: '舵机 引脚%1 角度%2',
        KS_SERVO_ANGLE: '舵机 引脚%1 角度%2 延时(毫秒)%3',
        KS_SERVO_READ: '舵机 引脚%1 读取度数',
    });
    return Blockly;
}

exports = addMsg;
