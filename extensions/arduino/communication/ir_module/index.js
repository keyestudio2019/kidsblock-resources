const remote = formatMessage => ({
    name: formatMessage({
        id: 'remote.name',
        default: 'ir remote',
        description: 'Name of remote'
    }),
    extensionId: 'remote',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/ir_receiver_Sensor.png`,
    description: formatMessage({
        id: 'remote.description',
        default: 'The infrared receiving',
        description: 'Description of ir remote'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = remote;
