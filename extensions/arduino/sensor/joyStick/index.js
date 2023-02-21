const joyStick = formatMessage => ({
    name: formatMessage({
        id: 'joyStick.name',
        default: 'joyStick module'
    }),
    extensionId: 'joyStick',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
    'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/joyStick.png`,
    description: formatMessage({
        id: 'joyStick.description',
        default: 'a joyStick module.'
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

module.exports = joyStick;
