const ks_servo270 = formatMessage => ({
    name: formatMessage({
        id: 'ks_servo270',
        default: 'Servo 270',
        description: 'Servo 270'
    }),
    extensionId: 'ks_servo270',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/servo.png`,
    description: formatMessage({
        id: 'ks_servo270.description',
        default: 'Servo driver',
        description: 'Description of ks_servo 270'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://keyestudio.com'
});

module.exports = ks_servo270;
