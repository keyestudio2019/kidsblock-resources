/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: '读取ADXL345 %1'
    });
    return Blockly;
}

exports = addMsg;
