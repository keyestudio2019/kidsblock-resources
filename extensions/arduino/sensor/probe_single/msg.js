/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SINGLEPROBE_CATEGORY: 'single-probe patrol sensor',
        SINGLEPROBE_READ_STATE: 'White was detected by the single-probe patrol sensor in interface %1？',
        SINGLEPROBE_READ_VALUE: 'A state value of single-probe patrol sensor in interface %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SINGLEPROBE_CATEGORY: '单探头寻线传感器',
        SINGLEPROBE_READ_STATE: '接口%1单探头巡线传感器检测到白色？',
        SINGLEPROBE_READ_VALUE: '接口%1单探头巡线传感器的状态值'
    });
    return Blockly;
}

exports = addMsg;
