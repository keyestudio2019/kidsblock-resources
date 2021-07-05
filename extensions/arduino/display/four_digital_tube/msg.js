/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        FOURTUBE_CATEGORY: '4 Digital Tube',
        FOURTUBE_STRING: 'TM1650 display string %1',
        FOURTUBE_DOT: 'TM1650 %1dot%2',
        FOURTUBE_STATE: 'TM1650%1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        FOURTUBE_CATEGORY: '4位数码管',
        FOURTUBE_STRING: '数码管TM1650显示字符串%1',
        FOURTUBE_DOT: '数码管TM1650第%1个 小数点%2',
        FOURTUBE_STATE: '数码管TM1650 %1'
    });
    return Blockly;
}

exports = addMsg;
