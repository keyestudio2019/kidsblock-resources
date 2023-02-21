const ks_encoder = formatMessage => ({
    name: formatMessage({
        id: 'ks_encoder',
        default: 'Encoder',
        description: 'Encoder'
    }),
    extensionId: 'ks_encoder',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/encoder.png`,
    description: formatMessage({
        id: 'ks_encoder.description',
        default: 'Encoder module',
        description: 'Description of ks_encoder'
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

module.exports = ks_encoder;
