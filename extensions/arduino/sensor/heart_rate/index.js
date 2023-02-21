const heart_rate = formatMessage => ({
    name: formatMessage({
        id: 'heart_rate',
        default: 'Heart Rate',
        description: 'Heart Rate'
    }),
    extensionId: 'heart_rate',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/heart.png`,
    description: formatMessage({
        id: 'heart_rate.description',
        default: 'heart_rate sensor module.',
        description: 'Heart Rate sensor pulse sensor'
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

module.exports = heart_rate;
