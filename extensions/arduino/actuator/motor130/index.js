const motor130 = formatMessage => ({
    name: 'DC Motor',
    extensionId: 'motor130',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/motor130.png`,
    description: formatMessage({
        id: 'motor130.description',
        default: 'Double color lamp',
        description: 'Description of motor130'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = motor130;
