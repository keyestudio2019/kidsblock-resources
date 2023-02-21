const unoPlus = formatMessage => ({
    name: 'Uno Plus development board',
    deviceId: 'unoPlus_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/unoplus.png',
    description: formatMessage({
        id: 'unoPlus.description',
        default: 'Uno Plus',
        description: 'Description for the Uno Plus device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/arduinoUno-illustration.svg',
    connectionSmallIconURL: 'asset/arduinoUno-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['unoPlus'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = unoPlus;
