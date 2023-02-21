/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        IR_CATEGORY: 'IR Remote',
        IR_INIT: 'IR remote init PIN#%1',
        IR_DATA: 'Received data',
        IR_READ: 'Read the data',
        IR_REFRESH: 'Refresh data',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        IR_CATEGORY: '红外接收',
        IR_INIT: '初始化红外接收 引脚%1',
        IR_DATA: '接收到红外遥控的数据',
        IR_READ: '读取红外接收数据',
        IR_REFRESH: '刷新红外接收数据',
    });
    return Blockly;
}

exports = addMsg;
