const t_18b20 = formatMessage => ({
    name: formatMessage({
        id: 't_18b20',
        default: 'Temperatue 18B20',
        description: 'Temperatue 18B20'
    }),
    extensionId: 't_18b20',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/t_18b20.png`,
    description: formatMessage({
        id: 't_18b20.description',
        default: '18b20 temperature sensor',
        description: 'Description of t_18b20'
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

module.exports = t_18b20;
