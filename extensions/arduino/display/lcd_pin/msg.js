/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'init lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 row%1 column%2 print %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'on',
        LCD_PIN_SATE_OFF: 'off',
        LCD_PIN_SETCURSORSTYLE: 'set lcd cursor %1 style %2',
        LCD_PIN_SATE_DISPLAY: 'display',
        LCD_PIN_SATE_HIDE: 'hide',
        LCD_PIN_STYLE_BLINK: 'blink',
        LCD_PIN_STYLE_NOBLINK: 'no-blink'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: '初始化 LCD1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'LCD1602 在第%1行 第%2列 打印%3',
        LCD_PIN_CLEAR: 'LCD1602显示屏%1',

        LCD_PIN_SATE_ON: '开',
        LCD_PIN_SATE_OFF: '关',
        LCD_PIN_SETCURSORSTYLE: '设置 lcd 光标 %1 样式 %2',
        LCD_PIN_SATE_DISPLAY: '显示',
        LCD_PIN_SATE_HIDE: '隐藏',
        LCD_PIN_STYLE_BLINK: '闪烁',
        LCD_PIN_STYLE_NOBLINK: '不闪烁'
    });
    return Blockly;
}

exports = addMsg;
