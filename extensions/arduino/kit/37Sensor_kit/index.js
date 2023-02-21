const Sensor37kit = formatMessage => ({
    name: '37 sensor kit',
    extensionId: '37Sensorkit',
    version: '1.0.0',
    supportDevice: ['37Sensorkit_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: '37Sensorkit.description',
        default: '37 sensor kit',
        description: 'Description of 37Sensorkit'
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

module.exports = Sensor37kit;
