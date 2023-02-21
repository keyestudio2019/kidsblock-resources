const nrf24l01 = formatMessage => ({
    name: 'NRF24l01',
    extensionId: 'nrf24l01',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano_arduinoUno', 'arduinoMini', 'arduinoLeonardo',
        'arduinoMega2560', 'arduinoEsp8266', 'arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/nrf24l01.png`,
    description: formatMessage({
        id: 'nrf24l01.description',
        default: '2.4G RF transceiver module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = nrf24l01;
