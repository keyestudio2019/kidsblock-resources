const barometric_pressure = formatMessage => ({
    name: formatMessage({
        id: 'barometric_pressure',
        default: 'Barometric Pressure',
        description: 'Barometric Pressure'
    }),
    extensionId: 'barometric_pressure',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/bp.png`,
    description: formatMessage({
        id: 'barometric_pressure.description',
        default: 'BMP388 temperature and pressure sensor',
        description: 'Description of barometric_pressure'
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

module.exports = barometric_pressure;
