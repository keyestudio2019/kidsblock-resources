/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KSENCODER_CATEGORY: 'Encoder',
        KSENCODER_INIT: 'init encoder %1 DT %2 CLK %3',
        KSENCODER_READ: 'read encoder %1',
        KSENCODER_WRITE: 'encoder %1 write %2',
        KSENCODER_BUTTON: 'Read the rotary encoder button PIN# %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KSENCODER_CATEGORY: '旋转编码器',
        KSENCODER_INIT: '初始化 旋转编码器 %1 引脚DT %2 CLK %3',
        KSENCODER_READ: '读取 旋转编码器 %1',
        KSENCODER_WRITE: '旋转编码器 %1 赋值为 %2',
        KSENCODER_BUTTON: '读旋转编码器按钮值 引脚# %1',
    });
    return Blockly;
}

exports = addMsg;
