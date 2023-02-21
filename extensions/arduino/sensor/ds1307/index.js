const ds1307 = formatMessage => ({
    name: formatMessage({
        id: 'ds1307',
        default: 'DS1307',
        description: 'DS1307'
    }),
    extensionId: 'ds1307',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/ks_ds1307.png`,
    description: formatMessage({
        id: 'ds1307.description',
        default: 'DS1307 real time clock module',
        description: 'Description of ds1307'
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

module.exports = ds1307;
