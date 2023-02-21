const lcd128_32 = formatMessage => ({
    name: formatMessage({
        id: 'lcd128_32',
        default: 'LCD 128*32',
        description: 'LCD 128*32'
    }),
    extensionId: 'lcd128_32',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/lcd128_32.png`,
    description: formatMessage({
        id: 'lcd128_32.description',
        default: 'LCD 128*32 screen',
        description: 'Description of lcd128_32'
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

module.exports = lcd128_32;
