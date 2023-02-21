/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 interface %1 LED',
        LED_ON: 'open',
        LED_OFF: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 接口 %1 LED',
        LED_ON: '打开',
        LED_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
