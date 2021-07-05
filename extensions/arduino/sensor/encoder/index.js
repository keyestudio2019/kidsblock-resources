const ks_encoder = formatMessage => ({
    name: 'Encoder',
    extensionId: 'ks_encoder',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/encoder.png`,
    description: formatMessage({
        id: 'ks_encoder.description',
        default: 'ks_encoder sensor module.',
        description: 'Description of ks_encoder'
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

module.exports = ks_encoder;
