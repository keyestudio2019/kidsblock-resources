/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: 'init RFID',
        RC522_READ: 'Read the card value'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: '初始化 RFID',
        RC522_READ: '读取卡值'
    });
    return Blockly;
}

exports = addMsg;
