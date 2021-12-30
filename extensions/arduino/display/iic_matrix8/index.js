const iic_matrix = formatMessage => ({
    name: formatMessage({
        id: 'iic_matrix',
        default: 'Matrix 8*8 HT16K33',
        description: 'Matrix 8*8 HT16K33'
    }),
    extensionId: 'iic_matrix',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'kidsblock',
    iconURL: `asset/iic_matrix.png`,
    description: formatMessage({
        id: 'iic_matrix.description',
        default: 'Matrix 8*8 HT16K33 IIC',
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
