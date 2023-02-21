const mlx90614 = formatMessage => ({
    name: formatMessage({
        id: 'mlx90614',
        default: 'Non-contact infrared temperature',
        description: 'Non-contact infrared temperature'
    }),
    extensionId: 'mlx90614',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/mlx.png`,
    description: formatMessage({
        id: 'mlx90614.description',
        default: 'MLX90614 Digital non-contact infrared temperature sensor',
        description: 'Description of mlx90614'
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

module.exports = mlx90614;
