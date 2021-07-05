/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MLX_CATEGORY: 'Infrared temperature',
        MLX_INIT: 'Init MLX90614',
        MLX_READ: 'read MLX90614 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MLX_CATEGORY: '非接触红外测温',
        MLX_INIT: '初始化 非接触红外测温传感器',
        MLX_READ: '读取温度值 %1',
    });
    return Blockly;
}

exports = addMsg;
