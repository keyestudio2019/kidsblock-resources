const Sensor48kit = formatMessage => ({
    name: '48 sensor kit',
    extensionId: '48Sensorkit',
    version: '1.0.0',
    supportDevice: ['48Sensorkit_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: '48Sensorkit.description',
        default: '48 sensor kit',
        description: 'Description of 48Sensorkit'
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

module.exports = Sensor48kit;
