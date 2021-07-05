const digital_compass = formatMessage => ({
    name: 'Digital Compass',
    extensionId: 'digital_compass',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/HMC.png`,
    description: formatMessage({
        id: 'digital_compass.description',
        default: 'digital_compass sensor module.',
        description: 'Description of digital_compass'
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

module.exports = digital_compass;
