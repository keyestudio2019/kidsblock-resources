const ks_buzzer = formatMessage => ({
    name: formatMessage({
        id: 'ks_buzzer',
        default: 'Passive buzzer',
        description: 'Passive buzzer'
    }),
    extensionId: 'ks_buzzer',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'kidsblock',
    iconURL: `asset/p_buzzer.png`,
    description: formatMessage({
        id: 'ks_buzzer.description',
        default: 'Passive buzzer',
        description: 'Description of ks_buzzer'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = ks_buzzer;
