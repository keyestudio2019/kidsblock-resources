const softwareSerial = formatMessage => ({
    name: formatMessage({
        id: 'softwareSerial.name',
        default: 'Software Serial'
    }),
    extensionId: 'softwareSerial',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/softwareSerial.png`,
    description: formatMessage({
        id: 'softwareSerial.description',
        default: 'Allow serial communication on other digital pins of the Arduino.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['other'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = softwareSerial;
