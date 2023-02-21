/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: 'init mfrc522 pin CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: 'new card present?',
        MFRC522_READCARDSERIAL: 'mfrc522 successfully read card serial number?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 get card type name',
        MFRC522_GETCARDUID: 'mfrc522 get card UID',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 to hex string',
        MFRC522_SETKEY: 'mfrc522 set secret key %1',
        MFRC522_VERIFICATIONKEY: 'mfrc522 verification block %1 key is correct?',
        MFRC522_READBLOCKDATA: 'mfrc522 read block %1',
        MFRC522_GETBLOCKDATA: 'mfrc522 block data (type %1)',
        MFRC522_DATATYPE_NUBMER: 'number',
        MFRC522_DATATYPE_STRING: 'string',
        MFRC522_GETBLOCKDATA_TOOLTIP: 'String length less than 16 byte.',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 write %1 to block %2 (type %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 write key %1 to sector %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 print sector %1 data',
        MFRC522_HALT: 'mfrc522 halt'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: '初始化 mfrc522 引脚 CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: '是否有新卡?',
        MFRC522_READCARDSERIAL: 'mfrc522 成功读取到卡序列号?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 获取卡类型名称',
        MFRC522_GETCARDUID: 'mfrc522 获取卡 UID',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 转为16进制字符串',
        MFRC522_SETKEY: 'mfrc522 设置密钥 %1',
        MFRC522_VERIFICATIONKEY: 'mfrc522 验证块 %1 密码正确？',
        MFRC522_READBLOCKDATA: 'mfrc522 读取块 %1',
        MFRC522_GETBLOCKDATA: 'mfrc522 块数据 (类型 %1)',
        MFRC522_DATATYPE_NUBMER: '数字',
        MFRC522_DATATYPE_STRING: '字符串',
        MFRC522_GETBLOCKDATA_TOOLTIP: '字符串长度小于 16 字节。',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 写 %1 到块 %2 (类型 %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 写密码 %1 到扇区 %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 打印扇区 %1 数据',
        MFRC522_HALT: 'mfrc522 挂起'
    });
    return Blockly;
}

exports = addMsg;
