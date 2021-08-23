/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KEYPAD_CATEGORY: 'Keypad 4*4',
        KEYPAD_INIT: 'keypad 4*4 Init',
        KEYPAD_READ: 'Keypad4*4 Read key value',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KEYPAD_CATEGORY: '矩阵键盘 4*4',
        KEYPAD_INIT: '初始化矩阵键盘',
        KEYPAD_READ: '读取矩阵键盘的值',
    });
    return Blockly;
}

exports = addMsg;
