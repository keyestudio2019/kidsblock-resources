const Smarthome = formatMessage => ({
    name: 'Smart home for arduino',
    extensionId: 'Smarthome',
    version: '1.0.0',
    supportDevice: ['Smarthome_arduinoUno'],
    author: 'keyestudio',
    description: formatMessage({
        id: 'Smarthome.description',
        default: 'Smart_home',
        description: 'Description of Smart home kit'
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

module.exports = Smarthome;
