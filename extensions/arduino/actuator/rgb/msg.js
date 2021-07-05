/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RGB_CATEGORY: 'RGB LED',
        RGB_DIGITAL: 'RGB Lamp Red#%1 R_state%2 Green#%3 G_State%4 Blue#%5 B_State%6',
        RGB_ANALOG: 'RGB Lamp Red#%1 R_analogWrite%2 Green#%3 G_analogWrite%4 Blue#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RGB_CATEGORY: 'RGB LED灯',
        RGB_DIGITAL: 'RGB灯 红#%1 电平为%2 绿#%3 电平为%4 蓝#%5 电平为%6',
        RGB_ANALOG: 'RGB灯 红#%1 模拟输出%2 绿#%3 模拟输出%4 蓝#%5 模拟输出%6',
    });
    return Blockly;
}

exports = addMsg;
