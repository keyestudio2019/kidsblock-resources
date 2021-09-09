/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX_IIC_CATEGORY: 'Matrix HT16K33',
        MATRIX_IIC_INIT: 'Init HT16K33 Matrix',
        MATRIX_IIC_FACE: 'HT16K33 Matrix display face%1',
        MATRIX_IIC_PIEXL: 'HT16K33 Matrix X Axis%1 Y Axis%2 State%3',
        MATRIX_IIC_REFRESH: 'HT16K33 Matrix refresh',
        MATRIX_IIC_CLEAR: 'HT16K33 Matrix clear',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX_IIC_CATEGORY: '8*8点阵HT16K33',
        MATRIX_IIC_INIT: '初始化 HT16K33点阵',
        MATRIX_IIC_FACE: 'HT16K33点阵 显示%1',
        MATRIX_IIC_PIEXL: 'HT16K33 点阵显示点 X轴%1 Y轴%2 电平为%3',
        MATRIX_IIC_REFRESH: 'HT16K33点阵 刷新显示',
        MATRIX_IIC_CLEAR: 'HT16K33点阵 清屏',
    });
    return Blockly;
}

exports = addMsg;
