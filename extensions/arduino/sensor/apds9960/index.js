const apds9960 = formatMessage => ({
    name: formatMessage({
        id: 'apds9960',
        default: 'Gesture Recognition',
        description: 'Gesture Recognition'
    }),
    extensionId: 'apds9960',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'], // TODO 待测试
    author: 'keyes',
    iconURL: `asset/apds9960.png`,
    description: formatMessage({
        id: 'apds9960.description',
        default: 'APDS9960 gesture recognition module'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = apds9960;
