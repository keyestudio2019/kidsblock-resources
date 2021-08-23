/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 connect the wifi ssid %1 password %2',
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 连接wifi 名称 %1 密码 %2',

    });
    return Blockly;
}

exports = addMsg;
