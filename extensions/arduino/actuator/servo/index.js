const ks_servo = formatMessage => ({
    name: formatMessage({
        id: 'ks_servo',
        default: 'Servo',
        description: 'Servo'
    }),
    extensionId: 'ks_servo',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/servo.png`,
    description: formatMessage({
        id: 'ks_servo.description',
        default: 'Servo driver',
        description: 'Description of ks_servo'
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

module.exports = ks_servo;
