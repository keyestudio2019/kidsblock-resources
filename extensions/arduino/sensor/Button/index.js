const blueButton = formatMessage => ({
    name: formatMessage({
        id: 'blueButton.name',
        default: 'blueButton detection module'
    }),
    extensionId: 'blueButton',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
    'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/blueButton.png`,
    description: formatMessage({
        id: 'blueButton.description',
        default: 'blueButton sensor switch.'
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

module.exports = blueButton;
