const sd_card = formatMessage => ({
    name: formatMessage({
        id: 'sd_card',
        default: 'SD card',
        description: 'SD card'
    }),
    extensionId: 'sd_card',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560','arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/sd_card.png`,
    description: formatMessage({
        id: 'sd_card.description',
        default: 'SD card, used to increase memory',
        description: 'Description of sd_card'
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

module.exports = sd_card;
