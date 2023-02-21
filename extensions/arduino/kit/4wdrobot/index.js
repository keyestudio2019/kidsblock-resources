const BT4WDRobot = formatMessage => ({
    name: '4WD Robot',
    extensionId: '4WDRobot',
    version: '1.0.0',
    supportDevice: ['4WDRobot_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: '4WDRobot.description',
        default: '4WDRobot',
        description: 'Description of 4WDRobot'
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

module.exports = BT4WDRobot;
