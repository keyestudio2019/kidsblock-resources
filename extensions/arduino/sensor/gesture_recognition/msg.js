/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        GESTURE_CATEGORY: 'Gesture recognition',
        GESTURE_INIT: 'init PAJ7620 sensor',
        GESTURE_READ: 'Read PAJ7620 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        GESTURE_CATEGORY: '手势识别',
        GESTURE_INIT: '初始化 手势识别传感器',
        GESTURE_READ: '识别手势 %1',
    });
    return Blockly;
}

exports = addMsg;
