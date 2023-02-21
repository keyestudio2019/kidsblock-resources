const ds3231 = formatMessage => ({
    name: formatMessage({
        id: 'ds3231',
        default: 'DS3231',
        description: 'DS3231'
    }),
    extensionId: 'ds3231',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/ds3231.png`,
    description: formatMessage({
        id: 'ds3231.description',
        default: 'DS3231 real time clock module',
        description: 'Description of ds3231'
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

module.exports = ds3231;
