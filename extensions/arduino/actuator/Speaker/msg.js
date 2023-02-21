/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        METASPEAKER_CATEGORY: 'Speaker',
        METASPEAKER_INIT: 'init speaker pin %1',
        METASPEAKER_PLAYTONEFORBEAT: 'Speaker %1 play tone %2 for %3 beat',
        METASPEAKER_SETTEMPO: 'Speaker %1 set tempo to (bpm) %2',
        METASPEAKER_PLAYRINGTONE: 'Speaker %1 play ringtone %2',
        METASPEAKER_CONNECTION: 'connection',
        METASPEAKER_DISCONNECTION: 'disconnet',
        METASPEAKER_DIDI: 'button pushed',
        METASPEAKER_MODE1: 'mode1',
        METASPEAKER_MODE2: 'mode2',
        METASPEAKER_MODE3: 'mode3',
        METASPEAKER_SURPRISE: 'surprise',
        METASPEAKER_OHOOH: 'OhOoh',
        METASPEAKER_OHOOH2: 'OhOoh2',
        METASPEAKER_CUDDLY: 'cuddly',
        METASPEAKER_SLEEPING: 'sleeping',
        METASPEAKER_HAPPY: 'happy',
        METASPEAKER_SUPERHAPPY: 'super happy',
        METASPEAKER_HAPPYSHORT: 'happy short',
        METASPEAKER_SAD: 'sad',
        METASPEAKER_CONFUSED: 'confused',
        METASPEAKER_FART1: 'fart1',
        METASPEAKER_FART2: 'fart2',
        METASPEAKER_FART3: 'fart3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        METASPEAKER_CATEGORY: '功放喇叭',
        METASPEAKER_INIT: '初始化功放喇叭接口 %1',
        METASPEAKER_PLAYTONEFORBEAT: '功放喇叭 %1 播放音调 %2 持续 %3 节拍',
        METASPEAKER_SETTEMPO: '功放喇叭 %1 设置节奏为 (bpm) %2',
        METASPEAKER_PLAYRINGTONE: '功放喇叭 %1 播放铃声 %2',
        METASPEAKER_CONNECTION: '连接',
        METASPEAKER_DISCONNECTION: '断开',
        METASPEAKER_DIDI: '按键按下',
        METASPEAKER_MODE1: '模式1',
        METASPEAKER_MODE2: '模式2',
        METASPEAKER_MODE3: '模式3',
        METASPEAKER_SURPRISE: '惊讶',
        METASPEAKER_OHOOH: '哦哦',
        METASPEAKER_OHOOH2: '哦哦2',
        METASPEAKER_CUDDLY: '可爱',
        METASPEAKER_SLEEPING: '正在睡觉',
        METASPEAKER_HAPPY: '开心',
        METASPEAKER_SUPERHAPPY: '非常开心',
        METASPEAKER_HAPPYSHORT: '开心短',
        METASPEAKER_SAD: '难过',
        METASPEAKER_CONFUSED: '困惑',
        METASPEAKER_FART1: '放屁1',
        METASPEAKER_FART2: '放屁2',
        METASPEAKER_FART3: '放屁3'
    });
    return Blockly;
}

exports = addMsg;
