/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'init MPU6050',
        MPU6050_REFRESH: 'MPU6050 refresh data',
        MPU6050: 'MPU605 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: '初始化 MPU6050',
        MPU6050_REFRESH: 'MPU6050 刷新数据',
        MPU6050_READ: '读取MPU6050 %1'
    });
    return Blockly;
}

exports = addMsg;
