const Makerbit = formatMessage => ({
    name: 'Makerbit',
    extensionId: 'Makerbit',
    version: '1.0.0',
    supportDevice: ['Makerbit_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'Makerbit.description',
        default: 'Makerbit',
        description: 'Description of Makerbit'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = Makerbit;
