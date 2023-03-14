/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PAJ7620_CATEGORY: 'Gesture Recognition',
        PAJ7620_INIT: 'init paj7620',
        PAJ7620_ISGESTURE: 'paj7620 read gesture %1？',
        PAJ7620_UP: 'up',
        PAJ7620_DOWN: 'down',
        PAJ7620_LEFT:'left',
        PAJ7620_RIGHT:'right',
        PAJ7620_FORWARD:'forward',
        PAJ7620_BACKWARD:'back',
        PAJ7620_CLOCKWISE:'clockwise',
        PAJ7620_COUNT_CLOCKWISE:'counterclockwise',
        PAJ7620_WAVE:'wave',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PAJ7620_CATEGORY: '手势传感器',
        PAJ7620_INIT: '初始化 paj7620',
        PAJ7620_ISGESTURE: 'paj7620 读取到手势 %1？',
        PAJ7620_UP: '上',
        PAJ7620_DOWN: '下',
        PAJ7620_LEFT:'左',
        PAJ7620_RIGHT:'右',
        PAJ7620_FORWARD:'前进',
        PAJ7620_BACKWARD:'后退',
        PAJ7620_CLOCKWISE:'顺时针',
        PAJ7620_COUNT_CLOCKWISE:'逆时针',
        PAJ7620_WAVE:'挥手',
    });
    return Blockly;
}

exports = addMsg;
