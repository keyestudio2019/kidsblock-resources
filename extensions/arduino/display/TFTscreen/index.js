const TFT = formatMessage => ({
    name: 'TFT screen',
    extensionId: 'TFT',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/TFTscreen.png`,
    description: formatMessage({
        id: 'TFT.description',
        default: 'TFT screen',
        description: 'Description of TFT'
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

module.exports = TFT;
