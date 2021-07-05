const sd_card = formatMessage => ({
    name: 'SD card',
    extensionId: 'sd_card',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/sd_card.png`,
    description: formatMessage({
        id: 'sd_card.description',
        default: 'sd_card sensor module.',
        description: 'Description of sd_card'
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

module.exports = sd_card;
