const ks_rgb = formatMessage => ({
    name: formatMessage({
        id: 'ks_rgb',
        default: 'RGB LED',
        description: 'RGB LED'
    }),
    extensionId: 'ks_rgb',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/ks_rgb.png`,
    description: formatMessage({
        id: 'ks_rgb.description',
        default: 'RGB LED',
        description: 'Description of RGB'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = ks_rgb;
