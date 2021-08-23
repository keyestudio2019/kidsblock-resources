const lm35 = formatMessage => ({
    name: formatMessage({
        id: 'lm35',
        default: 'Temperature LM35',
        description: 'Temperature LM35'
    }),
    extensionId: 'lm35',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'kidsblock',
    iconURL: `asset/lm35.png`,
    description: formatMessage({
        id: 'lm35.description',
        default: 'Temperature LM35',
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
