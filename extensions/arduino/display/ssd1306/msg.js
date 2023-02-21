/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SSD1306_CATEGORY: 'OLED',
        SSD1306_INIT: 'OLED %1 init address %2',
        SSD1306_PRINTLINE: 'OLED %1 display %3 in line %2',
        SSD1306_PRINT: 'OLED %1 display %4 at position X: %2 Y:16* %3',
        SSD1306_CLEAR: 'OLED %1 clear',
        SSD1306_SETROTAION: 'OLED %1 rotate screen to %2 degrees',
        SSD1306_0: '0',
        SSD1306_1: '1',
        SSD1306_2: '2',
        SSD1306_3: '3',
        SSD1306_4: '4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SSD1306_CATEGORY: 'OLED',
        SSD1306_INIT: 'OLED %1 初始化I2C地址 %2',
        SSD1306_PRINTLINE: 'OLED %1 第 %2 行 显示 %3',
        SSD1306_PRINT: 'OLED %1 在坐标X: %2 Y:16* %3 显示 %4',
        SSD1306_CLEAR: 'OLED %1 清屏',
        SSD1306_SETROTAION: 'OLED %1 屏幕旋转到 %2 度',
        SSD1306_0: '0',
        SSD1306_1: '1',
        SSD1306_2: '2',
        SSD1306_3: '3',
        SSD1306_4: '4',
    });
    return Blockly;
}

exports = addMsg;
