const CodingRobot = formatMessage => ({
    name: 'Coding Robot',
    extensionId: 'CodingRobot',
    version: '1.0.0',
    supportDevice: ['CodingRobot_arduinoUno'],
    author: 'kidsbits',
    description: formatMessage({
        id: 'CodingRobot.description',
        default: 'CodingRobot',
        description: 'Description of CodingRobot'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.kidsbits.cc/'
});

module.exports = CodingRobot;
