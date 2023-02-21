const Codingbox = formatMessage => ({
    name: 'Coding box',
    extensionId: 'Codingbox',
    version: '1.0.0',
    supportDevice: ['Codingbox_arduinoUno'],
    author: 'kidsbits',
    description: formatMessage({
        id: 'Codingbox.description',
        default: 'Codingbox',
        description: 'Description of Codingbox'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.kidsbits.cc)'
});

module.exports = Codingbox;
