const ssd1306 = formatMessage => ({
    name: formatMessage({
        id: 'ssd1306.name',
        default: 'OLED display module'
    }),
    extensionId: 'ssd1306',
    version: '1.0.0',
    supportDevice: ['unoCore','unoStart'],
    author: 'keyestudio',
    iconURL: `asset/ssd1306.png`,
    description: formatMessage({
        id: 'ssd1306.description',
        default: 'I2C oled display based on SSD1306 drivers.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'www.keyestudio.com'
});

module.exports = ssd1306;