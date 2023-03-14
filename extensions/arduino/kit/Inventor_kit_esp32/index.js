const Inventor_ESP32 = formatMessage => ({
    name: 'Inventor kit for ESP32',
    extensionId: 'Inventor_ESP32',
    version: '1.0.0',
    supportDevice: ['Inventor_arduinoEsp32'],
    author: 'keyestudio',
    description: formatMessage({
        id: 'Inventor.description',
        default: 'Inventor kit for ESP32',
        description: 'Description of Inventor kit for ESP32'
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

module.exports = Inventor_ESP32;
