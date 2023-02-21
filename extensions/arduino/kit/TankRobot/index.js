const TankRobot = formatMessage => ({
    name: 'Tank Robot',
    extensionId: 'TankRobot',
    version: '1.0.0',
    supportDevice: ['TankRobot_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'TankRobot.description',
        default: 'TankRobot',
        description: 'Description of TankRobot'
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

module.exports = TankRobot;
