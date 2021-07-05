/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DHT_CATEGORY: 'Temperature and humidity',
        DHT_INIT: 'init DHT pin %1 mode %2',
        DHT_READ_TEMPERATURE: 'DHT read temperature %1',
        DHT_READ_HUMIDITY: 'DHT %1 read humidity'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DHT_CATEGORY: '温湿度传感器',
        DHT_INIT: '初始化 DHT 引脚 %1 型号 %2',
        DHT_READ_TEMPERATURE: 'DHT 读取温度 %1',
        DHT_READ_HUMIDITY: 'DHT 读取湿度'
    });
    return Blockly;
}

exports = addMsg;
