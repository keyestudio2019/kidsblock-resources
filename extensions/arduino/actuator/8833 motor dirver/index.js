const motor8833 = formatMessage => ({
    name: formatMessage({
        id: 'motor8833',
        default: '8833 Motor Driver',
        description: '8833 Motor Driver'
    }),
    extensionId: 'motor8833',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/8833.png`,
    description: formatMessage({
        id: 'motor8833.description',
        default: 'Driving DC motor',
        description: 'Description of motor8833'
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

module.exports = motor8833;
