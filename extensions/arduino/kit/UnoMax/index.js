const UnoMax = formatMessage => ({
    name: 'UnoMax',
    extensionId: 'UnoMax',
    version: '1.0.0',
    supportDevice: ['UnoMax_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'UnoMax.description',
        default: 'UnoMax',
        description: 'Description of UnoMax'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.keyestudio.com)'
});

module.exports = UnoMax;
