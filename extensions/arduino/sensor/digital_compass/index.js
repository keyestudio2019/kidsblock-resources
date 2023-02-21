const digital_compass = formatMessage => ({
    name: formatMessage({
        id: 'digital_compass',
        default: 'Digital Compass',
        description: 'Digital Compass'
    }),
    extensionId: 'digital_compass',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/HMC.png`,
    description: formatMessage({
        id: 'digital_compass.description',
        default: 'HMC5883L 3-Axis Magnetic Electronic Compass Module',
        description: 'Description of digital_compass'
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

module.exports = digital_compass;
