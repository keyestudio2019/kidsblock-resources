/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX_PIN_CATEGORY: 'Matrix 8*8',
        MATRIX_PIN_INIT: 'Init Matrix 8*8 row{2,7,A5,5,13,A4,12,A2} column{6,11,10,3,A3,4,8,9}',
        MATRIX_PIN_NUMBER: 'Matrix 8*8 display%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX_PIN_CATEGORY: '8*8点阵',
        MATRIX_PIN_INIT: '初始化 8*8点阵 行{2,7,A5,5,13,A4,12,A2} 列{6,11,10,3,A3,4,8,9}',
        MATRIX_PIN_NUMBER: '点阵 显示%1',
    });
    return Blockly;
}

exports = addMsg;
