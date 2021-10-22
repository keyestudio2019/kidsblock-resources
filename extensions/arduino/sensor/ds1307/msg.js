/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DS1307_CATEGORY: 'Clock',
        DS1307_INIT: 'init DS1307',
        DS1307_SET_SYS_TIME: 'Set to the current system time',
        DS1307_SET_TIME: 'Set time year%1 month%2 date%3 hour%4 minute%5 second%6',
        DS1307_SET_NOW: 'Sets the current time object',
        DS1307_READ: 'DS1307 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DS1307_CATEGORY: '时钟模块',
        DS1307_INIT: '初始化 DS1307时钟',
        DS1307_SET_SYS_TIME: '设置为当前系统时间',
        DS1307_SET_TIME: '设置自定义时间 年%1 月%2 日%3 时%4 分%5 秒%6',
        DS1307_SET_NOW: '设置当前时间对象',
        DS1307_READ: 'DS1307 读取时间 %1'
    });
    return Blockly;
}

exports = addMsg;
