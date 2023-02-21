const ESP32S = formatMessage => ({
    name: 'ESP32S',
    extensionId: 'EPS32S_esp32',
    version: '1.0.0',
    supportDevice: ['ESP32S_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'ESP32S.description',
        default: 'ESP32S ESP32',
        description: 'Description of ESP32S'
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

module.exports = ESP32S;
