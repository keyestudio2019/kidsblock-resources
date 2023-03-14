/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LPS331AP_CATEGORY: 'Baro pressure',
        LPS331AP_READ: 'LPS331AP baro pressure sensor read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LPS331AP_CATEGORY: '气压传感器',
        LPS331AP_READ: '气压传感器LPS331AP读取 %1'
    });
    return Blockly;
}

exports = addMsg;
