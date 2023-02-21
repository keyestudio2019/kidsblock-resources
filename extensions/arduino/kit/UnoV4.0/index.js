const unov4 = formatMessage => ({
    name: 'unov4',
    extensionId: 'unov4',
    version: '1.0.0',
    supportDevice: ['unov4.0_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'unov4.description',
        default: 'uno v4',
        description: 'Description of uno v4'
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

module.exports = unov4;
