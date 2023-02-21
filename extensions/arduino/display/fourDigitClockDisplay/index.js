const fourDigitClockDisplay = formatMessage => ({
    name: formatMessage({
        id: 'fourDigitClockDisplay.name',
        default: '4-Digit Clock Display'
    }),
    extensionId: 'fourDigitClockDisplay',
    version: '1.0.0',
    supportDevice: [''],
     supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/fourDigitClockDisplay.png`,
    description: formatMessage({
        id: 'fourDigitClockDisplay.description',
        default: '4-digit clock display module based on TM1637.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = fourDigitClockDisplay;
