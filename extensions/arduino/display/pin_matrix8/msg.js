/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX_PIN_CATEGORY: 'Matrix 8*8',
        MATRIX_PIN_INIT: 'Init Matrix 8*8 row:2~9 column:10~A3',
        MATRIX_PIN_NUMBER: 'Matrix 8*8 display%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX_PIN_CATEGORY: '8*8点阵',
        MATRIX_PIN_INIT: '初始化 8*8点阵 行2~9 列10~A3',
        MATRIX_PIN_NUMBER: '点阵 显示%1',
    });
    return Blockly;
}

exports = addMsg;
