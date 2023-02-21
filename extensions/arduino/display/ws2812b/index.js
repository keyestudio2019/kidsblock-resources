const ws2812b = formatMessage => ({
    name: formatMessage({
        id: 'ws2812b.name',
        default: 'WS2812 RGB'
    }),
    extensionId: 'ws2812b',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560'],
    author: 'keyestudio',
    iconURL: `asset/ws2812b.png`,
    description: formatMessage({
        id: 'ws2812b.description',
        default: 'LED Matrix module based on ws2812.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'www.keyestudio.com'
});

module.exports = ws2812b;
