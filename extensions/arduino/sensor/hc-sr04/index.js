const ks_hcSr04 = formatMessage => ({
    name: formatMessage({
        id: 'ks_hc_sr04',
        default: 'Ultrasonic',
        description: 'Ultrasonic'
    }),
    extensionId: 'ks_hc_sr04',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/ultrasonic.png`,
    description: formatMessage({
        id: 'ks_hc-sr04.description',
        default: 'HC-SR04 ultrasonic ranging sensor',
        description: 'Description of HC-SR04'
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

module.exports = ks_hcSr04;
