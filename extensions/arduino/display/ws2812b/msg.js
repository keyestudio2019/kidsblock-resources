/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        WS2812B_CATEGORY: 'WS2812RGB LED',
        WS2812B_INIT: 'pin %1 %2 RGB LEDs',
        WS2812B_SETBRIGHTNESS: 'pin %1 LED brightness %2',
        WS2812B_CLEAR: 'pin %1 clear all LEDs',
        WS2812B_SETRANGECOLOR: 'pin %1 RGB %2 to %3 show color %4',
        WS2812B_RGBTOCOLOR: 'red %1 green %2 blue %3',
        WS2812B_SHOWRAINBOW: 'pin %1 %2 to %3 RGB LEDs show  a gradient color from %4 to %5',
        WS2812B_SHIFT: 'pin %1 shift pixels by %2',
        WS2812B_ROTATE: 'pin %1 rotate pixels by %2',
        WS2812B_SHOWBARGRAPH: 'pin %1 %2 to %3 RGB LEDs show histogram current value: %4 max value: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        WS2812B_CATEGORY: 'WS2812 RGB灯',
        WS2812B_INIT: '初始化 WS2812 RGB灯 接口 %1 灯总数 %2',
        WS2812B_SETBRIGHTNESS: 'RGB灯 设置接口 %1 灯带亮度为 %2',
        WS2812B_CLEAR: 'RGB灯 接口 %1 全部熄灭',
        WS2812B_SETRANGECOLOR: 'RGB灯 接口 %1 灯号 %2 到 %3 显示颜色 %4',
        WS2812B_RGBTOCOLOR: '红 %1 绿 %2 蓝 %3',
        WS2812B_SHOWRAINBOW: 'RGB灯 接口 %1 灯号 %2 到 %3 显示渐变颜色 色调从 %4 到 %5',
        WS2812B_SHIFT: 'RGB灯 接口 %1 移动 %2 单位',
        WS2812B_ROTATE: 'RGB灯 接口 %1 循环移动 %2 单位',
        WS2812B_SHOWBARGRAPH: 'RGB灯 接口 %1 灯号 %2 到 %3 显示柱状图 当前值 %4 最大值 %5',
    });
    return Blockly;
}

exports = addMsg;
