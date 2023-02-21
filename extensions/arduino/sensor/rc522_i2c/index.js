const rc522_iic = formatMessage => ({
    name: formatMessage({
        id: 'rc522_iic',
        default: 'RC522 iic',
        description: 'RC522 iic'
    }),
    extensionId: 'rc522_iic',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/rc522.png`,
    description: formatMessage({
        id: 'rc522_iic.description',
        default: 'RFID RC522,Use IIC communication',
        description: 'Description of rc522_iic'
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

module.exports = rc522_iic;
