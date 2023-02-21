const Beetlebot = formatMessage => ({
    name: 'Beetlebot',
    extensionId: 'Beetlebot',
    version: '1.0.0',
    supportDevice: ['Beetlebot_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'Beetlebot.description',
        default: 'Beetlebot',
        description: 'Description of Beetlebot'
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

module.exports = Beetlebot;
