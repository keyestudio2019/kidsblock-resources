const Beetlebot = formatMessage => ({
    name: 'Beetlebot',
    deviceId: 'Beetlebot_arduinoUno',
    manufactor: 'keyes',
    leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/beetlebot.png',
    description: formatMessage({
        id: 'Beetlebot.description',
        default: 'Beetlebot',
        description: 'Description for the Beetlebot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/arduinoNano-illustration.svg',
    connectionSmallIconURL: 'asset/arduinoNano-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['Beetlebot'],
    deviceExtensionsCompatible: 'arduinoNano_arduinoUno',
    helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = Beetlebot;
