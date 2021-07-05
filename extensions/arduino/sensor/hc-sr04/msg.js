/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HC_SR04_CATEGORY: 'Ultrasonic',
        HC_SR04_READ_DISTANCE: 'HC-SR04 trig pin %1 echo pin %2 read distance %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HC_SR04_CATEGORY: '超声波传感器',
        HC_SR04_READ_DISTANCE: '超声波传感器 trig 引脚 %1 echo 引脚 %2 读取距离 %3'
    });
    return Blockly;
}

exports = addMsg;
