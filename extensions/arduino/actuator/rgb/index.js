const ks_rgb = formatMessage => ({
    name: 'RGB LED',
    extensionId: 'ks_rgb',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/ks_rgb.png`,
    description: formatMessage({
        id: 'ks_rgb.description',
        default: 'RGB lamp',
        description: 'Description of RGB'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = ks_rgb;
