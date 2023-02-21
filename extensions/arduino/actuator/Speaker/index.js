const metaSpeaker = formatMessage => ({
    name: formatMessage({
        id: 'metaSpeaker.name',
        default: 'Passive Buzzer'
    }),
    extensionId: 'metaSpeaker',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/metaSpeaker.png`,
    description: formatMessage({
        id: 'metaSpeaker.description',
        default: 'Unlike the active buzzer, the passive buzzer can be used' +
            ' to make different tones of sound and play some ringtones.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'www.keyestudio.com'
});

module.exports = metaSpeaker;
