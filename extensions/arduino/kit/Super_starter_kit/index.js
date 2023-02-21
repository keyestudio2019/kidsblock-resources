const Superstarterkit = formatMessage => ({
    name: 'Super starter kit',
    extensionId: 'Super_starter_kit',
    version: '1.0.0',
    supportDevice: ['Superstarterkit_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'Super_starter_kit.description',
        default: 'Super starter kit',
        description: 'Description of Super_starter_kit'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.keyestudio.com)'
});

module.exports = Superstarterkit;
