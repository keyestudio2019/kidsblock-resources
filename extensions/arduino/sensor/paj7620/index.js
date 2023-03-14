const paj7620 = formatMessage => ({
    name: formatMessage({
        id: 'paj7620',
        default: 'Gesture Recognition',
        description: 'Gesture Recognition'
    }),
    extensionId: 'paj7620',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'], // TODO 待测试
    author: 'keyestudio',
    iconURL: `asset/paj7620.JPG`,
    description: formatMessage({
        id: 'paj7620.description',
        default: 'paj7620 gesture recognition module'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = paj7620;
