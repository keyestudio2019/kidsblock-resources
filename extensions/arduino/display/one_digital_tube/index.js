const one_tube = formatMessage => ({
    name: 'One Digital Tube',
    extensionId: 'one_tube',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/one_tube.png`,
    description: formatMessage({
        id: 'one_tube.description',
        default: 'Four Digital Tube module.',
        description: 'Description of one_tube'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = one_tube;
