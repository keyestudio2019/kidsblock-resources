const kidsEsp = formatMessage => ({
    name: 'kidsEsp',
    extensionId: 'kidsEsp_esp32',
    version: '1.0.0',
    supportDevice: ['kidsEsp_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'kidsEsp.description',
        default: 'kidsEsp ESP32',
        description: 'Description of kidsEsp'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.kidsbits.cc)'
});

module.exports = kidsEsp;
