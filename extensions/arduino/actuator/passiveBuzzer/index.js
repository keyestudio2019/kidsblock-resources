const passiveBuzzer = formatMessage => ({
    name: formatMessage({
        id: 'passiveBuzzer.name',
        default: 'Passive Buzzer'
    }),
    extensionId: 'passiveBuzzer',
    version: '1.0.0',
    supportDevice: [''], // TODO 需要测试esp8266兼容性
    author: 'keyes',
    iconURL: `asset/passiveBuzzer.png`,
    description: formatMessage({
        id: 'passiveBuzzer.description',
        default: ' passive buzzer.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = passiveBuzzer;
