const ESP32plus = formatMessage => ({
    name: 'ESP32plus',
    extensionId: 'EPS32plus_esp32',
    version: '1.0.0',
    supportDevice: ['ESP32plus_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'ESP32plus.description',
        default: 'ESP32plus ESP32',
        description: 'Description of ESP32plus'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.kidsbits.cc)'
});

module.exports = ESP32plus;
