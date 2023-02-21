/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        COMPASS_CATEGORY: 'Digital Compass',
        COMPASS_INIT: 'init HMC5883',
        COMPASS_SET: 'Set HMC5883',
        COMPASS_READ: 'read HMC5883 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        COMPASS_CATEGORY: '电子罗盘',
        COMPASS_INIT: '初始化 电子罗盘',
        COMPASS_SET: '设置 电子罗盘',
        COMPASS_READ: '读取 电子罗盘 %1',
    });
    return Blockly;
}

exports = addMsg;
