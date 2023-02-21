/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TM1640_CATEGORY: '8x16 LED Matrix',
        TM1640_INIT: 'Init LED matrix %1 CLK %2 DIO %3',
        TM1640_SETCOLORINDEX: 'Set LED matrix %1 mode %2',
        TM1640_MODE_1: 'Forward',
        TM1640_MODE_0: 'Reverse',
        TM1640_SETBRIGHTNESS: 'Set LED matrix %1 Brightness %2',
        TM1640_SHOWSTR: 'LED matrix %1 X %2 Y（0-15）%3 draw string %4',
        TM1640_0: '0',
        TM1640_1: '1',
        TM1640_2: '2',
        TM1640_3: '3',
        TM1640_4: '4',
        TM1640_5: '5',
        TM1640_6: '6',
        TM1640_7: '7',
        TM1640_8: '8'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TM1640_CATEGORY: '8x16 LED点阵',
        TM1640_INIT: '初始化LED点阵 %1 CLK %2 DIO %3',
        TM1640_SETCOLORINDEX: '设置LED点阵 %1 显示模式 %2',
        TM1640_MODE_1: '正向',
        TM1640_MODE_0: '反向',
        TM1640_SETBRIGHTNESS: '设置LED点阵 %1 亮度 %2',
        TM1640_SHOWSTR: 'LED点阵 %1 X %2 Y（0-15）%3 显示字符串 %4',
        TM1640_0: '0',
        TM1640_1: '1',
        TM1640_2: '2',
        TM1640_3: '3',
        TM1640_4: '4',
        TM1640_5: '5',
        TM1640_6: '6',
        TM1640_7: '7',
        TM1640_8: '8'
    });
    return Blockly;
}

exports = addMsg;
