/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RGB6812_CATEGORY: 'NeoPixel RGB',
        RGB6812_INIT: 'init RGB6812  PIN#%1 Socket Type%2 Count %3',
        RGB6812_DIS_RGB: 'RGB6812 PIN#%1 lights%2 colour: R%3 G%4 B%5',
        RGB6812_BRIGHTNESS: 'RGB6812 PIN#%1 Brightness%2',
        RGB6812_SHOW: 'RGB6812 display show PIN#%1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RGB6812_CATEGORY: 'NeoPixel RGB',
        RGB6812_INIT: '初始化RGB6812灯 引脚%1 类型为%2 数量为%3',
        RGB6812_DIS_RGB: 'RGB6812灯 引脚%1 灯号%2 颜色: 红色%3 绿色%4 蓝色%5',
        RGB6812_BRIGHTNESS: 'RGB6812 引脚%1 亮度%2',
        RGB6812_SHOW: 'RGB6812 引脚%1 灯显示生效 '
    });
    return Blockly;
}

exports = addMsg;
