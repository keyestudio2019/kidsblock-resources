const MegaPlus = formatMessage => ({
    name: 'MegaPlus',
    extensionId: 'MegaPlus',
    version: '1.0.0',
    supportDevice: ['megaplus_arduinoMega2560'],
    author: 'keyes',
    description: formatMessage({
        id: 'MegaPlus.description',
        default: 'Mega Plus',
        description: 'Description of MegaPlus'
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

module.exports = MegaPlus;
