const unoPlus = formatMessage => ({
    name: 'Plus',
    extensionId: 'unoPlus',
    version: '1.0.0',
    supportDevice: ['unoPlus_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'unoPlus.description',
        default: 'Uno Plus',
        description: 'Description of unoPlus'
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

module.exports = unoPlus;
