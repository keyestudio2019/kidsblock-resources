const lightSensor = formatMessage => ({
    name: formatMessage({
        id: 'lightSensor.name',
        default: 'light sensor'
    }),
    extensionId: 'lightSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/lightSensor.png`,
    description: formatMessage({
        id: 'lightSensor.description',
        default: 'A light sensor.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.baidu.com'
});

module.exports = lightSensor;
