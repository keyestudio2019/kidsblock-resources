/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BMP388_CATEGORY: 'Barometric Pressure',
        BMP388_INIT: 'init BMP388',
        BMP388_READ: 'read BMP388 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BMP388_CATEGORY: 'BMP388气压传感器',
        BMP388_INIT: '初始化 BMP388',
        BMP388_READ: '读取 BMP388 %1',
    });
    return Blockly;
}

exports = addMsg;
