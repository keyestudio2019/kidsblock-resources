const pin_four_tube = formatMessage => ({
    name: formatMessage({
        id: 'pin_four_tube',
        default: 'Four Digital Tube',
        description: 'Four Digital Tube'
    }),
    extensionId: 'pin_four_tube',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/pin_four_tube.png`,
    description: formatMessage({
        id: 'pin_four_tube.description',
        default: '4 digit digital tube, pin connection',
        description: 'Description of pin_four_tube'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = pin_four_tube;
