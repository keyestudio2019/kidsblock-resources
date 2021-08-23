const ks_74hc595 = formatMessage => ({
    name: '74HC595',
    extensionId: 'ks_74hc595',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'kidsblock',
    iconURL: `asset/ks_74hc595.png`,
    description: formatMessage({
        id: 'ks_74hc595.description',
        default: 'ks_74hc595 drive module.',
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
