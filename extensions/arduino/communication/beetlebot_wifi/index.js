const beetle_wifi = formatMessage => ({
    name: formatMessage({
        id: 'beetle_wifi',
        default: 'Beetlebot wifi',
        description: 'Beetlebot wifi'
    }),
    extensionId: 'beetle_wifi',
    version: '1.0.0',
    supportDevice: ['arduinoEsp8266'],
    author: 'kidsblock',
    iconURL: `asset/wifi_01.png`,
    description: formatMessage({
        id: 'beetle_wifi.description',
        default: 'wifi communication'
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

module.exports = beetle_wifi;
