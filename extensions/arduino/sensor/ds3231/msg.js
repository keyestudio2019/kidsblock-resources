/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DS3231_CATEGORY: 'Clock',
        DS3231_INIT: 'init DS3231',
        DS3231_SET_SYS_TIME: 'Set to the current system time',
        DS3231_SET_TIME: 'Set time year%1 month%2 date%3 hour%4 minute%5 second%6',
        DS3231_READ: 'DS3231 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DS3231_CATEGORY: '时钟模块',
        DS3231_INIT: '初始化 DS3231时钟',
        DS3231_SET_SYS_TIME: '设置为当前系统时间',
        DS3231_SET_TIME: '设置自定义时间 年%1 月%2 日%3 时%4 分%5 秒%6',
        DS3231_READ: 'DS3231 读取时间 %1'
    });
    return Blockly;
}

exports = addMsg;
