const iic_matrix = formatMessage => ({
    name: 'Matrix 8*8 HT16K33',
    extensionId: 'iic_matrix',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/iic_matrix.png`,
    description: formatMessage({
        id: 'iic_matrix.description',
        default: 'matrix iic HT16K33',
        description: 'Description of iic_matrix'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = iic_matrix;
