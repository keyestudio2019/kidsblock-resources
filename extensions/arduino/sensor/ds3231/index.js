const ds3231 = formatMessage => ({
    name: 'DS3231',
    extensionId: 'ds3231',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/ds3231.png`,
    description: formatMessage({
        id: 'ds3231.description',
        default: 'ds3231 sensor module.',
        description: 'Description of ds3231'
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

module.exports = ds3231;
