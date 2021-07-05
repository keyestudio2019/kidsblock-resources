const lcd128_32 = formatMessage => ({
    name: 'LCD 128*32',
    extensionId: 'lcd128_32',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/lcd128_32.png`,
    description: formatMessage({
        id: 'lcd128_32.description',
        default: 'lcd128*32 screen',
        description: 'Description of lcd128_32'
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

module.exports = lcd128_32;
