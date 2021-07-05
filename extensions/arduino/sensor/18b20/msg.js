/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        T18B20_CATEGORY: 'Temperature',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 read temperature%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        T18B20_CATEGORY: 'Temperature',
        T18B20_READ_TEMPERATURE: '18B20 引脚：%1 读取温度%2',
    });
    return Blockly;
}

exports = addMsg;
