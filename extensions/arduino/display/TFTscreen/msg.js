/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TFT_CATEGORY: 'TFT screen',
        TFT_INIT: 'init TFTscreen PIN# CS%1 DC%2 RST%3',
        TFT_BG: 'TFTscreen background r%1 g%2 b%3',
        TFT_STROKE: 'TFTscreen stroke color r%1 g%2 b%3',
        TFT_NOSTROKE: 'TFTscreen no stroke',
        TFT_FILL: 'TFTscreen fill color r%1 g%2 b%3',
        TFT_NOFILL: 'TFTscreen nofill color',
        TFT_TEXT: 'TFTscreen text%1 coordinates: X%2 Y%3',
        TFT_TEXT_S: 'TFTscreen setTextSize(1-5)%1',
        TFT_POINT: 'TFTscreen point coordinates: X%1 Y%2',
        TFT_LINE: 'TFTscreen line coordinates:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'TFTscreen rect coordinates:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'TFTscreen width pixel',
        TFT_HEIGHT: 'TFTscreen height pixel',
        TFT_CIRCLE: 'TFTscreen circle coordinates: X%1 Y%2 radius%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TFT_CATEGORY: 'TFT 全彩显示屏',
        TFT_INIT: '初始化 TFT彩屏 引脚定义 CS%1 DC%2 RST%3',
        TFT_BG: 'TFT屏 背景色 红%1 绿%2 蓝%3',
        TFT_STROKE: 'TFT屏 画笔颜色 红%1 绿%2 蓝%3',
        TFT_NOSTROKE: 'TFT屏 画笔没颜色',
        TFT_FILL: 'TFT屏 填充颜色 红%1 绿%2 蓝%3',
        TFT_NOFILL: 'TFT屏 不填充颜色',
        TFT_TEXT: 'TFT屏 显示字符%1 坐标:X%2 Y%3',
        TFT_TEXT_S: 'TFT屏 设置字符大小(1-5)%1',
        TFT_POINT: 'TFT屏 画点 坐标:X%1 Y%2',
        TFT_LINE: 'TFT屏 画线 坐标:开始X%1 开始Y%2, 结束X%3 结束Y%4',
        TFT_RECT: 'TFT屏 画矩形 坐标:开始X%1 开始Y%2, 结束X%3 结束Y%4',
        TFT_WIDTH: 'TFT屏 获取屏幕宽度像素值',
        TFT_HEIGHT: 'TFT屏 获取屏幕高度像素值',
        TFT_CIRCLE: 'TFT屏 画圆 坐标:X%1 Y%2 半径%3',
        TFT_SCREEN_SD: 'TFT屏 显示SD卡里的图片',
    });
    return Blockly;
}

exports = addMsg;
