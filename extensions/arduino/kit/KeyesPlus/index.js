const KeyesPlus = formatMessage => ({
    name: 'KeyesPlus',
    extensionId: 'KeyesPlus',
    version: '1.0.0',
    supportDevice: ['KeyesPlus_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'KeyesPlus.description',
        default: 'Keyes Plus',
        description: 'Description of KeyesPlus'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    //helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = KeyesPlus;
