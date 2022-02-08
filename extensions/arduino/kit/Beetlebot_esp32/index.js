const BeetlebotEsp32 = formatMessage => ({
    name: 'Beetlebot ESP32',
    extensionId: 'Beetlebot_esp32',
    version: '1.0.0',
    supportDevice: ['Beetlebot_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'BeetlebotEsp32.description',
        default: 'Beetlebot ESP32',
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

module.exports = BeetlebotEsp32;
