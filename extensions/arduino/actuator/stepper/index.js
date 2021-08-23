const ks_stepper = formatMessage => ({
    name: 'Stepper',
    extensionId: 'ks_stepper',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'kidsblock',
    iconURL: `asset/ks_stepper.png`,
    description: formatMessage({
        id: 'ks_stepper.description',
        default: 'ks_stepper drive module.',
        description: 'Description of ks_stepper'
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

module.exports = ks_stepper;
