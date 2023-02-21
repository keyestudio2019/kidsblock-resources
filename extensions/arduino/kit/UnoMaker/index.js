const unoMaker = formatMessage => ({
    name: 'Maker',
    extensionId: 'unoMaker',
    version: '1.0.0',
    supportDevice: ['unoMaker_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'unoMaker.description',
        default: 'unoMaker',
        description: 'Description of unoMaker'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = unoMaker;
