/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_74HC595_CATEGORY: '74HC595',
        KS_74HC595_INIT: 'Init 74HC595 ST_CP%1 SH_CP%2 DS%3',
        KS_74HC595_OUTPUT: '74HC595 output Q1%1 Q2%2 Q3%3 Q4%4 Q5%5 Q6%6 Q7%7 Q8%8',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_74HC595_CATEGORY: '74HC595',
        KS_74HC595_INIT: '初始化 74HC595 ST_CP%1 SH_CP%2 DS%3',
        KS_74HC595_OUTPUT: '74HC595 输出 Q1%1 Q2%2 Q3%3 Q4%4 Q5%5 Q6%6 Q7%7 Q8%8',
    });
    return Blockly;
}

exports = addMsg;
