const Beetlebot = formatMessage => ({
    name: 'Beetlebot',
    extensionId: 'Beetlebot',
    version: '1.0.0',
    supportDevice: ['Beetlebot_arduinoUno'],
    author: 'xiuxain',
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
    helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = Beetlebot;
