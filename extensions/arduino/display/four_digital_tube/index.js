const four_tube = formatMessage => ({
    name: formatMessage({
        id: 'four_tube',
        default: 'Four Digital Tube TM1650_IIC',
        description: 'Four Digital Tube TM1650_IIC'
    }),
    extensionId: 'four_tube',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/Four_Digital_Tube.png`,
    description: formatMessage({
        id: 'four_tube.description',
        default: '4 digit digital tube IIC communication',
        description: 'Description of four_tube'
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

module.exports = four_tube;
