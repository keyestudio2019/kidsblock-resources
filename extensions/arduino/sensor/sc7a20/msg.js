/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: '读取SC7A20 %1'
    });
    return Blockly;
}

exports = addMsg;
