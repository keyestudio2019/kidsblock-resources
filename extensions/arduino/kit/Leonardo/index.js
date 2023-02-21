const Leonardo = formatMessage => ({
    name: 'Leonardo',
    extensionId: 'Leonardo',
    version: '1.0.0',
    supportDevice: ['Leonardo_arduinoLeonardo'],
    author: 'keyes',
    description: formatMessage({
        id: 'Leonardo.description',
        default: 'Leonardo',
        description: 'Description of Leonardo'
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

module.exports = Leonardo;
