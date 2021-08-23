const wifi_01 = formatMessage => ({
    name: 'esp8266_wifi',
    extensionId: 'wifi_01',
    version: '1.0.0',
    supportDevice: ['arduinoEsp8266'],
    author: 'ArthurZheng',
    iconURL: `asset/wifi_01.png`,
    description: formatMessage({
        id: 'wifi_01.description',
        default: '2.4G RF transceiver module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://openblockcc.gitee.io/wiki/main'
});

module.exports = wifi_01;
