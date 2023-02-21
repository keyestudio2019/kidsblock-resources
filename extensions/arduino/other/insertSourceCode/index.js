const insertSourceCode = formatMessage => ({
    name: formatMessage({
        id: 'insertSourceCode.name',
        default: 'Insert Source Code'
    }),
    extensionId: 'insertSourceCode',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/insertSourceCode.png`,
    description: formatMessage({
        id: 'insertSourceCode.description',
        default: 'Insert the source code directly into the blocks, so that professional ' +
            'users can realize some more advanced functions.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['other'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = insertSourceCode;
