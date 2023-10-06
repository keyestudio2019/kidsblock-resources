const ESP32_HuskyLens_Vision = formatMessage => ({
    name: formatMessage({
        id: 'ESP32_HuskyLens_Vision.name',
        default: 'ESP32_HuskyLens_Vision '
    }),
    extensionId: 'ESP32_HuskyLens_Vision',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266','QDPRobot_arduinoUnoUltra',
        'QDPRobotC02_arduinoESP32QDP', 'QDPRobotIOT_arduinoEsp8266'],
    author: 'Yinshen Wang',
    iconURL: `asset/ESP32_HuskyLens_Vision.png`,
    description: formatMessage({
        id: 'ESP32_HuskyLens_Vision.description',
        default: ''
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: 'http://gx.qdprobot.com'
});

module.exports = ESP32_HuskyLens_Vision;
