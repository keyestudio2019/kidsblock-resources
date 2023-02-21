/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BLUEBUTTON_CATEGORY: 'BLUE button',
        BLUEBUTTON_READ_STATE: 'interface %1 blue button was be pushed？',
        BLUEBUTTON_READ_VALUE: 'The state value of blue button in interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BLUEBUTTON_CATEGORY: '蓝色按键开关',
        BLUEBUTTON_READ_STATE: '接口%1蓝色按钮被按下？',
        BLUEBUTTON_READ_VALUE: '接口%1蓝色按钮的状态值'
    });
    return Blockly;
}

exports = addMsg;
