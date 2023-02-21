const dht = formatMessage => ({
    name: formatMessage({
        id: 'dht',
        default: 'DHT sensor'
    }),
    extensionId: 'dht',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560',],
    author: 'keyes',
    iconURL: `asset/dht.png`,
    description: formatMessage({
        id: 'dht.description',
        default: 'DHT Temperature and humidity sensor module.'
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

module.exports = dht;
