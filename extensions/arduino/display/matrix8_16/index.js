const matrix8_16 = formatMessage => ({
    name: formatMessage({
        id: 'matrix8_16',
        default: 'Matrix 8*16 AiP1640',
        description: 'Matrix 8*16 AiP1640'
    }),
    extensionId: 'matrix8_16',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/matrix8_16.png`,
    description: formatMessage({
        id: 'matrix8_16.description',
        default: 'Matrix 8*16 AiP1640',
        description: 'Description of matrix8_16'
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

module.exports = matrix8_16;
