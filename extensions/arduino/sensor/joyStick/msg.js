/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        JOYSTICK_CATEGORY: 'JoyStick module',
        JOYSTICK_Z_STATE: 'interface %1 joystick button(Z) was be pushed？',
        JOYSTICK_XY_VALUE: 'read interface %1 joystick %2 axis',
        X: 'X',
        Y :'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        JOYSTICK_CATEGORY: '摇杆模块',
        JOYSTICK_Z_STATE: '接口%1摇杆按钮(Z)被按下？',
        JOYSTICK_XY_VALUE: '读取接口%1摇杆%2轴',
        X: 'X',
        Y :'Y'
    });
    return Blockly;
}

exports = addMsg;
