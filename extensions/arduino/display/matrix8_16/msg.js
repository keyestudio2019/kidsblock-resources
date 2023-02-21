/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX8_16_CATEGORY: 'Matrix 8*16',
        MATRIX8_16_INIT: 'Init AiP1640 Matrix 8*16 SDA%1 SCL%2',
        MATRIX8_16_FACE: 'Matrix8*16 display face%1',
        MATRIX8_16_PIEXL: 'HT16K33 Matrix X Axis%1 Y Axis%2 State%3',
        MATRIX8_16_REFRESH: 'HT16K33 Matrix refresh',
        MATRIX8_16_CLEAR: 'Matrix8*16 clear',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX8_16_CATEGORY: '点阵8*16',
        MATRIX8_16_INIT: '初始化 点阵 8*16 AiP1640 SDA%1 SCL%2',
        MATRIX8_16_FACE: '点阵8*16 显示%1',
        MATRIX8_16_PIEXL: 'HT16K33 点阵显示点 X轴%1 Y轴%2 电平为%3',
        MATRIX8_16_REFRESH: 'HT16K33点阵 刷新显示',
        MATRIX8_16_CLEAR: '点阵8*16 清屏',
    });
    return Blockly;
}

exports = addMsg;
