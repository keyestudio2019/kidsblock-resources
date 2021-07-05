const lm35 = formatMessage => ({
    name: 'Temp LM35',
    extensionId: 'lm35',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/lm35.png`,
    description: formatMessage({
        id: 'lm35.description',
        default: 'lm35 sensor module.',
        description: 'Description of lm35'
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

module.exports = lm35;
