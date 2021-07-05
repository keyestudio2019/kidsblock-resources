/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        IRSEND_CATEGORY: 'IR Send',
        IR_SEND: 'IRsend %1 PIN#%2 data%3 bits%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 Array%2 listLength%3 frequency%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        IRSEND_CATEGORY: '红外发射',
        IR_SEND: '红外发射（%1）引脚%2 数值%3 比特数%4',
        IR_SEND_RAW: '红外发射（RAW）引脚%1 数组%2 数组长度%3 频率%4',
    });
    return Blockly;
}

exports = addMsg;
