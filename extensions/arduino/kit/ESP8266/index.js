const ESP8266 = formatMessage => ({
    name: 'ESP8266',
    extensionId: 'ESP8266',
    version: '1.0.0',
    supportDevice: ['ESP8266_arduinoEsp8266'],
    author: 'keyes',
    description: formatMessage({
        id: 'ESP8266.description',
        default: 'ESP8266',
        description: 'Description of ESP8266'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    //helpLink: 'https://keyestudio.com)'
});

module.exports = ESP8266;
