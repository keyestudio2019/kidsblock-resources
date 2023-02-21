const ks_adxl345 = formatMessage => ({
    name: formatMessage({
        id: 'ks_adxl345',
        default: 'adxl345',
        description: 'adxl345'
    }),
    extensionId: 'ks_adxl345',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/ks_adxl345.png`,
    description: formatMessage({
        id: 'ks_adxl345.description',
        default: 'adxl345 3 axis acceleration sensor',
        description: 'Description of ks_adxl345'
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

module.exports = ks_adxl345;
