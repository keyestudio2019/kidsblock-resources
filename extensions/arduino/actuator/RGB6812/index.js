const rgb6812 = formatMessage => ({
    name: 'NeoPixel RGB',
    extensionId: 'rgb6812',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: [''],
    author: 'Liang',
    iconURL: `asset/rgb6812.png`,
    description: formatMessage({
        id: 'rgb6812.description',
        default: 'rgb6812 motor drive module.',
        description: 'Description of rgb6812'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    library: 'lib',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = rgb6812;
