const sc7a20 = formatMessage => ({
    name: formatMessage({
        id: 'sc7a20',
        default: 'sc7a20加速度传感器',
        description: 'sc7a20加速度传感器'
    }),
    extensionId: 'sc7a20',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/sc7a20.png`,
    description: formatMessage({
        id: 'sc7a20.description',
        default: 'sc7a20 3 axis acceleration sensor',
        description: 'Description of sc7a20'
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

module.exports = sc7a20;
