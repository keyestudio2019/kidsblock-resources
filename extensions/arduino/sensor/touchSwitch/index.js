const touchSwitch = formatMessage => ({
    name: formatMessage({
        id: 'touchSwitch.name',
        default: 'touchSwitch detection module'
    }),
    extensionId: 'touchSwitch',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
    'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/touchSwitch.png`,
    description: formatMessage({
        id: 'touchSwitch.description',
        default: 'touchSwitch sensor switch.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.keyestudio.com'
});

module.exports = touchSwitch;
