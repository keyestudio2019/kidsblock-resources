/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LIGHTSENSOR_CATEGORY: 'light sensor ',
        LIGHTSENSOR_READ_VALUE: 'read the value of interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LIGHTSENSOR_CATEGORY: '光线传感器',
        LIGHTSENSOR_READ_VALUE: '读取接口%1光线强度'
    });
    return Blockly;
}

exports = addMsg;
