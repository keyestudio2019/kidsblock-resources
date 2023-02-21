const Leonardo = formatMessage => ({
    name: 'Leonardo development board',
    deviceId: 'Leonardo_arduinoLeonardo',
    manufactor: 'keyestudio',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/Leonardo.png',
    description: formatMessage({
        id: 'Leonardo.description',
        default: 'Leonardo',
        description: 'Description for the Leonardo device'
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
    deviceExtensions: ['Leonardo'],
    deviceExtensionsCompatible: 'arduinoLeonardo',
    //helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = Leonardo;
