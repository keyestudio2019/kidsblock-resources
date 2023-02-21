const MecanumRobot = formatMessage => ({
    name: 'Mecanum Robot',
    extensionId: 'MecanumRobot',
    version: '1.0.0',
    supportDevice: ['MecanumRobot_arduinoUno'],
    author: 'kidsblock',
    description: formatMessage({
        id: 'MecanumRobot.description',
        default: 'MecanumRobot',
        description: 'Description of MecanumRobot'
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

module.exports = MecanumRobot;
