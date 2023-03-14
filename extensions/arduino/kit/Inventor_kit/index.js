const Inventor = formatMessage => ({
    name: 'Inventor kit for arduino',
    extensionId: 'Inventor',
    version: '1.0.0',
    supportDevice: ['Inventor_arduinoUno'],
    author: 'keyestudio',
    description: formatMessage({
        id: 'Inventor.description',
        default: 'Inventor kit for arduino',
        description: 'Description of Inventor kit for arduino'
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

module.exports = Inventor;
