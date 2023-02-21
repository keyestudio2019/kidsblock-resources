const TurtleRobot = formatMessage => ({
    name: 'Turtle Robot',
    extensionId: 'TurtleRobot',
    version: '1.0.0',
    supportDevice: ['TurtleRobot_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'TurtleRobot.description',
        default: 'TurtleRobot',
        description: 'Description of TurtleRobot'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = TurtleRobot;
