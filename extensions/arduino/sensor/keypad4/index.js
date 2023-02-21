const keypad4_4 = formatMessage => ({
    name: formatMessage({
        id: 'keypad4*4',
        default: 'keypad4*4',
        description: 'keypad4*4'
    }),
    extensionId: 'keypad4*4',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/keypad4.png`,
    description: formatMessage({
        id: 'keypad4_4.description',
        default: '4*4 Key pad module',
        description: 'Description of keypad4*4'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = keypad4_4;
