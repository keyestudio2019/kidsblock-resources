/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BH_CATEGORY: 'Light intensity',
        BH_INIT: 'Init BH1750 sensor',
        BH_READ: 'Read  BH1750',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BH_CATEGORY: '光强度传感器BH1750',
        BH_INIT: '初始化 光强度传感器BH1750',
        BH_READ: '读取光强度值',
    });
    return Blockly;
}

exports = addMsg;
