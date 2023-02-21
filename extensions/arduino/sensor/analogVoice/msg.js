/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ANALOGVOICE_CATEGORY: 'Analog voice sensor',
        ANALOGVOICE_READ_VALUE: 'read the value of interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ANALOGVOICE_CATEGORY: '模拟声音传感器',
        ANALOGVOICE_READ_VALUE: '读取接口 %1 声音强度'
    });
    return Blockly;
}

exports = addMsg;
