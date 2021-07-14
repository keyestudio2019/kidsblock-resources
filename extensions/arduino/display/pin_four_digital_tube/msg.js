/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {    
        PINFOURTUBE_CATEGORY: '4 Digital Tube',
        PINFOURTUBE_INIT: '4 Digital Tube Init a~dp:6~13 digits 1~4:2~5',
        PINFOURTUBE_STRING: '4 digital display data %1 Decimal point%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PINFOURTUBE_CATEGORY: '4位数码管',
        PINFOURTUBE_INIT: '初始化4位数码管 a~dp:6~13 位1~4:2~5',
        PINFOURTUBE_STRING: '数码管数字%1 小数位数%2',
    });
    return Blockly;
}

exports = addMsg;
