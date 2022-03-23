const matrix8_16 = formatMessage => ({
    name: formatMessage({
        id: 'matrix8_16',
        default: 'Matrix 8*16 AiP1640',
        description: 'Matrix 8*16 AiP1640'
    }),
    extensionId: 'matrix8_16',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'kidsblock',
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
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = matrix8_16;
