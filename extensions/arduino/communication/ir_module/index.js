const remote = formatMessage => ({
    name: formatMessage({
        id: 'remote',
        default: 'ir remote',
        description: 'Name of remote'
    }),
    extensionId: 'remote',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/ir_receiver_Sensor.png`,
    description: formatMessage({
        id: 'remote.description',
        default: 'Infrared receiving module',
        description: 'Description of ir remote'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = remote;
