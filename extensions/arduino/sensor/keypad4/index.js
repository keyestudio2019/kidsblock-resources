const keypad4_4 = formatMessage => ({
    name: 'keypad4*4',
    extensionId: 'keypad4*4',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/keypad4.png`,
    description: formatMessage({
        id: 'keypad4_4.description',
        default: 'keypad4*4 sensor module.',
        description: 'Description of keypad4*4'
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

module.exports = keypad4_4;
