/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SD_CATEGORY: 'SD card',
        SD_INIT: 'init SD card PIN MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'SD type cs# %1',
        SD_LIST: 'list files in SD root cs# %1',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 File Exist?',
        SD_DELETE: 'delete %1',
        SD_READ: 'read %1',
        SD_WRITE: 'write SD File %1 Data %2 NewLine %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SD_CATEGORY: 'SD卡',
        SD_INIT: '初始化 SD卡 引脚 MOSI:11 MISO:12 CLK:13 CS:%1',
        SD_TYPE: 'SD类型 cs引脚%1',
        SD_LIST: '列出SD根目录文件 cs引脚%1',
        SD_VAR: '读取SD%1 cs引脚%2',
        SD_JUDGE: '%1文件存在？',
        SD_DELETE: '删除%1',
        SD_READ: '读取%1',
        SD_WRITE: '写入SD 文件%1 数据%2 换行%3',
    });
    return Blockly;
}

exports = addMsg;
