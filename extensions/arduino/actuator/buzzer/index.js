const ks_buzzer = formatMessage => ({
    name: formatMessage({
        id: 'ks_buzzer',
        default: 'Passive buzzer',
        description: 'Passive buzzer'
    }),
    extensionId: 'ks_buzzer',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
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
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = ks_buzzer;
