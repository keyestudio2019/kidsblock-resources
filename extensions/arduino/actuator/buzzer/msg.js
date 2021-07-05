/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BUZZER_CATEGORY: 'Passive buzzer',
        BUZZER_TONE: 'Tone PIN#%1 frequency%2',
        BUZZER_TONE_D: 'Tone PIN#%1 frequency%2 duration%3',
        BUZZER_MUSIC: 'Tone PIN#%1 play music%2',
        BUZZER_NOTONE: 'noTone%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BUZZER_CATEGORY: '无源蜂鸣器',
        BUZZER_TONE: '播放声音 引脚%1 频率%2',
        BUZZER_TONE_D: '播放声音 引脚%1 频率%2 节拍%3',
        BUZZER_MUSIC: '蜂鸣器 引脚%1 播放音乐%2',
        BUZZER_NOTONE: '结束声音 引脚%1',
    });
    return Blockly;
}

exports = addMsg;
