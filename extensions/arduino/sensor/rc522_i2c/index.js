const rc522_iic = formatMessage => ({
    name: 'RC522 iic',
    extensionId: 'rc522_iic',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/rc522.png`,
    description: formatMessage({
        id: 'rc522_iic.description',
        default: 'rc522 sensor module.',
        description: 'Description of rc522_iic'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = rc522_iic;
