/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const LED = formatMessage => ({
    name: formatMessage({
        id: 'LED.name',
        default: ' LED module'
    }),
    extensionId: 'LED',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/LED.png`,
    description: formatMessage({
        id: 'LED.description',
        default: ' led module.',
        description: 'Description of  LED'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'www.keyestudio.com'
});

module.exports = LED;
