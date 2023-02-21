/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TM1650_CATEGORY: 'Digital tube',
        TM1650_INIT: 'init TM1650 4-bit digital tube %1',
        TM1650_SCREENSET:'TM1650 4-bit digital %1 %2',
        TM1650_SHOW: 'TM1650 4-bit digital tube %1 show %2',
        TM1650_SETDOT:'%3 the %2 decimal point of TM1650 4-bit digital tube %1',
        TM1650_ON: 'open',
        TM1650_OFF: 'close',
        TM1650_CLEAR: 'clear',
        TM1650_LIGHT: 'brighten',
        TM1650_UNLIGHT: 'darken',
        TM1650_1: '1',
        TM1650_2: '2',
        TM1650_3: '3',
        TM1650_4: '4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TM1650_CATEGORY: '四位数码管',
        TM1650_INIT: '初始化TM1650四位数码管 %1',
        TM1650_SCREENSET:'TM1650四位数码管 %1 %2',
        TM1650_SHOW: 'TM1650四位数码管 %1 显示 %2',
        TM1650_SETDOT:'TM1650四位数码管 %1 第 %2 个小数点 %3',
        TM1650_ON: '开',
        TM1650_OFF: '关',
        TM1650_CLEAR: '清屏',
        TM1650_LIGHT: '亮',
        TM1650_UNLIGHT: '暗',
        TM1650_1: '1',
        TM1650_2: '2',
        TM1650_3: '3',
        TM1650_4: '4'
    });
    return Blockly;
}

exports = addMsg;
