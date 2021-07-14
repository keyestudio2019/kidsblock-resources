/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ONETUBE_CATEGORY: '1 Digital Tube',
        ONEINIT: 'Init One digital tube PIN a~dp:2~9',
        ONETUBE_NUMBER: 'One digital_tube display data(0~9)%1 dot%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ONETUBE_CATEGORY: '1位数码管',
        ONEINIT: '初始化一位数码管 引脚a~dp:2~9',
        ONETUBE_NUMBER: '一位数码管显示数字(0~9)%1 小数点%2',
    });
    return Blockly;
}

exports = addMsg;
