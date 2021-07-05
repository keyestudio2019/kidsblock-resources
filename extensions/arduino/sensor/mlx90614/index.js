const mlx90614 = formatMessage => ({
    name: 'Non-contact infrared temperature',
    extensionId: 'mlx90614',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/mlx.png`,
    description: formatMessage({
        id: 'mlx90614.description',
        default: 'mlx90614 sensor module.',
        description: 'Description of mlx90614'
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

module.exports = mlx90614;
