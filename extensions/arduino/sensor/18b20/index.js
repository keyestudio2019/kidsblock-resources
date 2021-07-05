const t_18b20 = formatMessage => ({
    name: 'Temp_18B20',
    extensionId: 't_18b20',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/t_18b20.png`,
    description: formatMessage({
        id: 't_18b20.description',
        default: '18B20 Temperature sensor.',
        description: 'Description of t_18b20'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = t_18b20;
