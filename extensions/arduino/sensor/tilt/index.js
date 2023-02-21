const tilt = formatMessage => ({
    name: formatMessage({
        id: 'tilt.name',
        default: 'tilt detection module'
    }),
    extensionId: 'tilt',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
    'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/tilt.png`,
    description: formatMessage({
        id: 'tilt.description',
        default: 'tilt sensor switch.'
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

module.exports = tilt;
