const SmarthomeEsp32 = formatMessage => ({
    name: 'Smart home Esp32',
    extensionId: 'SmarthomeEsp32',
    version: '1.0.0',
    supportDevice: ['Smarthome_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'SmarthomeEsp32.description',
        default: 'Smarthome Esp32',
        description: 'Description of SmarthomeEsp32'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = SmarthomeEsp32;
