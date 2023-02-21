/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HEARTRATE_CATEGORY: 'HeartRate sensor',
        HEARTRATE_INIT: 'init heartRate sensor',
        HEARTRATE_SET: 'Set heartRate',
        HEARTRATE_READ: 'heartRate sensor read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HEARTRATE_CATEGORY: '心率传感器',
        HEARTRATE_INIT: '初始化 心率传感器',
        HEARTRATE_SET: '设置 心率传感器',
        HEARTRATE_READ: '读取心率传感器的值 %1'
    });
    return Blockly;
}

exports = addMsg;
