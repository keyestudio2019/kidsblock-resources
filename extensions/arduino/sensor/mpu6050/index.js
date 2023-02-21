const mpu6050 = formatMessage => ({
    name: formatMessage({
        id: 'mpu6050',
        default: 'MPU6050',
        description: 'MPU6050'
    }),
    extensionId: 'mpu6050',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560','arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/mpu6050.png`,
    description: formatMessage({
        id: 'mpu6050.description',
        default: 'MPU6050 6 axis acceleration gyro sensor',
        description: 'Description of mpu6050'
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

module.exports = mpu6050;
