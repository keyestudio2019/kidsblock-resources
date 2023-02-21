/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX_IIC_CATEGORY: 'Matrix HT16K33',
        MATRIX_IIC_INIT: 'Init  Matrix',
        MATRIX_IIC_PIEXL: ' Matrix X Axis%1 Y Axis%2 State%3',
        matrix_iic_DRAWLINE: 'Martix draw line x0: %1 y0: %2, x1: %3 y1: %4',
        matrix_iic_DRAWRECTANGLE: 'Martix draw rectangle x: %1 y: %2 :width %3 length: %4',
        matrix_iic_DRAWCIRCLE: 'Martix draw circle x: %1 y: %2 :radius %3 ',
        matrix_iic_SHOWCHAR: 'Martix show char or number: %1',
        matrix_iic_SHOW_LOOP: 'Martix loop show : %1 speed: %2',
        MATRIX_IIC_FACE: 'Martix display image %1',
        MATRIX_IIC_REFRESH: 'Matrix refresh',
        MATRIX_IIC_CLEAR: 'Matrix clear',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX_IIC_CATEGORY: '点阵HT16K33',
        MATRIX_IIC_INIT: '初始化 点阵',
        MATRIX_IIC_PIEXL: '点阵屏显示点 X轴%1 Y轴%2 电平为%3',
        matrix_iic_DRAWLINE: '点阵屏绘制直线 x0: %1 y0: %2, x1: %3 y1: %4',
        matrix_iic_DRAWRECTANGLE: '点阵屏绘制长方形 x: %1 y: %2 宽: %3 长: %4',
        matrix_iic_DRAWCIRCLE: '点阵屏绘制圆形 x: %1 y: %2 半径: %3 ',
        matrix_iic_SHOWCHAR: '点阵屏 显示字符或数字: %1',
        matrix_iic_SHOW_LOOP: '点阵屏 滚动显示: %1 速度: %2',
        MATRIX_IIC_FACE: '点阵屏 显示图片%1',
        MATRIX_IIC_REFRESH: '点阵屏 刷新显示',
        MATRIX_IIC_CLEAR: '点阵屏 清屏',
    });
    return Blockly;
}

exports = addMsg;
