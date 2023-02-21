const kidsUno = formatMessage => ({
    name: 'kidsUno',
    extensionId: 'kidsUno',
    version: '1.0.0',
    supportDevice: ['kidsUno_arduinoUno'],
    author: 'kidsbits',
    description: formatMessage({
        id: 'kidsUno.description',
        default: 'Uno kidsUno',
        description: 'Description of kidsUno'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.kidsbits.cc'
});

module.exports = kidsUno;
