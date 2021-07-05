/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MOTOR130_CATEGORY: 'DC Motor',
        MOTOR130_DIGITAL: 'Motor INA#%1 State%2 INB#%3 State%4',
        MOTOR130_ANALOG: 'Motor INA#%1 analogWrite%2 INB#%3 analogWrite%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MOTOR130_CATEGORY: '直流电机',
        MOTOR130_DIGITAL: '直流电机 INA#%1 电平为%2 INB#%3 电平为%4',
        MOTOR130_ANALOG: '直流电机 INA#%1 模拟输出值%2 INB#%3 模拟输出值%4',
    });
    return Blockly;
}

exports = addMsg;
