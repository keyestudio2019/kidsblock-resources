const heart_rate = formatMessage => ({
    name: 'Heart Rate',
    extensionId: 'heart_rate',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/heart.png`,
    description: formatMessage({
        id: 'heart_rate.description',
        default: 'heart_rate sensor module.',
        description: 'Description of heart_rate'
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

module.exports = heart_rate;
