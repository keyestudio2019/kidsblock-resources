/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LCD128_CATEGORY: 'LCD 128*32',
        LCD128_INIT: 'LCD 128*32 Init',
        LCD128_CURSOR: 'LCD 128*32 Sets the location row %1 column %2',
        LCD128_STRING: 'LCD 128*32 display string %1',
        LCD128_NUMBER: 'LCD 128*32 display data%1',
        LCD128_PIXEL: 'Point Coordinates X%1 Y%2',
        LCD128_C_PIXEL: 'Delete the point Coordinates X%1 Y%2',
        LCD128_CLEAR: 'LCD128*32 clear',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LCD128_CATEGORY: '液晶显示屏128*32',
        LCD128_INIT: '液晶显示屏 初始化',
        LCD128_CURSOR: '液晶显示屏 设置位置 第%1行 第%2列',
        LCD128_STRING: '液晶显示屏显示字符%1',
        LCD128_NUMBER: '液晶显示屏显示数值%1',
        LCD128_PIXEL: '画点 坐标 X%1 Y%2',
        LCD128_C_PIXEL: '删除点 坐标 X%1 Y%2',
        LCD128_CLEAR: '清屏',
    });
    return Blockly;
}

exports = addMsg;
