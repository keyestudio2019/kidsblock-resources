const bh1750 = formatMessage => ({
    name: formatMessage({
        id: 'bh1750',
        default: 'Light intensity sensor BH1750',
        description: 'Light intensity sensor BH1750'
    }),
    extensionId: 'bh1750',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/bh1750.png`,
    description: formatMessage({
        id: 'bh1750.description',
        default: 'BH1750 Ambient Light Sensor',
        description: 'Description of bh1750'
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

module.exports = bh1750;
