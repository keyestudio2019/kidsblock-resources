const ks_stepper = formatMessage => ({
    name: formatMessage({
        id: 'ks_stepper',
        default: 'Stepper',
        description: 'Stepper'
    }),
    extensionId: 'ks_stepper',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/ks_stepper.png`,
    description: formatMessage({
        id: 'ks_stepper.description',
        default: 'Stepper driver',
        description: 'Description of ks_stepper'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = ks_stepper;
