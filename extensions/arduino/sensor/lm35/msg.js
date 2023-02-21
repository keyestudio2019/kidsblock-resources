/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LM35_CATEGORY: 'Temperature',
        LM35_READ_TEMPERATURE: 'LM35 read temperature PIN: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LM35_CATEGORY: 'LM35温度传感器',
        LM35_READ_TEMPERATURE: '读取LM35温度值 引脚：%1',
    });
    return Blockly;
}

exports = addMsg;
