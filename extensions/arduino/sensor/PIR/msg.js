/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AM412_CATEGORY: 'pir',
        AM412_READ_VALUE: 'read interface %1 thermotherelectric infrared motion sensor'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AM412_CATEGORY: '红外运动传感器',
        AM412_READ_VALUE: '读取接口 %1 热释电红外运动传感器'
    });
    return Blockly;
}

exports = addMsg;
