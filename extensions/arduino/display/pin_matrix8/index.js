const pin_matrix = formatMessage => ({
    name: formatMessage({
        id: 'pin_matrixs',
        default: 'Matrix 8*8',
        description: 'Matrix 8*8'
    }),
    extensionId: 'pin_matrixs',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/pin_matrix.png`,
    description: formatMessage({
        id: 'pin_matrix.description',
        default: 'Matrix 8*8, pin connection',
        description: 'Description of pin_matrix'
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

module.exports = pin_matrix;
