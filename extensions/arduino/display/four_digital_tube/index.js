const four_tube = formatMessage => ({
    name: 'Four Digital Tube',
    extensionId: 'four_tube',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/Four_Digital_Tube.png`,
    description: formatMessage({
        id: 'four_tube.description',
        default: 'Four Digital Tube module.',
        description: 'Description of four_tube'
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

module.exports = four_tube;
