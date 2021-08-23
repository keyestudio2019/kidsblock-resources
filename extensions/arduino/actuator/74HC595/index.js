const ks_74hc595 = formatMessage => ({
    name: formatMessage({
        id: 'ks_74hc595',
        default: '74HC595',
        description: 'Description of ks_74hc595'
    }),
    extensionId: 'ks_74hc595',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'kidsblock',
    iconURL: `asset/ks_74hc595.png`,
    description: formatMessage({
        id: 'ks_74hc595.description',
        default: '74HC595 is an 8 bit displacement cache with serial input and parallel output',
        description: 'Description of ks_74hc595'
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

module.exports = ks_74hc595;
