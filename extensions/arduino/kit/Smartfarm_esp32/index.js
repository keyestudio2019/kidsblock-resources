const Smartfarm_ESP32 = formatMessage => ({
    name: 'Smart farm for ESP32',
    extensionId: 'Smartfarm_ESP32',
    version: '1.0.0',
    supportDevice: ['Smartfarm_arduinoEsp32'],
    author: 'keyestudio',
    description: formatMessage({
        id: 'SmartfarmESP32.description',
        default: 'Smart farm kit for ESP32',
        description: 'Description of Smart farm kit for ESP32'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.keyestudio.com)'
});

module.exports = Smartfarm_ESP32;
