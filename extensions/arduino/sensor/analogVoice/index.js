const analogVoice = formatMessage => ({
    name: formatMessage({
        id: 'analogVoice.name',
        default: 'analogVoice sensor'
    }),
    extensionId: 'analogVoice',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
    'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/analogVoice.png`,
    description: formatMessage({
        id: 'analogVoice.description',
        default: 'analogVoice sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.keyestudio.com'
});

module.exports = analogVoice;
