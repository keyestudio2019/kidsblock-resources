const IR_send = formatMessage => ({
    name: formatMessage({
        id: 'IR_send.name',
        default: 'IR send',
        description: 'Name of IR_send'
    }),
    extensionId: 'IR_send',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'xiuxian',
    iconURL: `asset/ir_send.png`,
    description: formatMessage({
        id: 'IR_send.description',
        default: 'The infrared receiving',
        description: 'Description of ir IR_send'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = IR_send;
