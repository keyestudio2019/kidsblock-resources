const ks_hcSr04 = formatMessage => ({
    name: 'ks_HC_SR04',
    extensionId: 'ks_hc_sr04',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 'arduinoEsp32'],
    author: 'Liang',
    iconURL: `asset/HC-SR04.png`,
    description: formatMessage({
        id: 'ks_hc-sr04.description',
        default: 'HC-SR04 distance measurement module.',
        description: 'Description of HC-SR04'
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

module.exports = ks_hcSr04;
