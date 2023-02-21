const NanoPlus = formatMessage => ({
    name: 'NanoPlus',
    extensionId: 'NanoPlus',
    version: '1.0.0',
    supportDevice: ['nanoplus_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'NanoPlus.description',
        default: 'Nano Plus',
        description: 'Description of NanoPlus'
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

module.exports = NanoPlus;
