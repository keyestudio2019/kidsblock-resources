const MegaPlus = formatMessage => ({
    name: 'Mega Plus development board',
    deviceId: 'megaplus_arduinoMega2560',
    manufactor: 'keyestudio',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/megaplus.png',
    description: formatMessage({
        id: 'MegaPlus.description',
        default: 'Mega Plus',
        description: 'Description for the MegaPlus device'
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
    deviceExtensions: ['MegaPlus'],
    deviceExtensionsCompatible: 'arduinoMega2560',
    //helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = MegaPlus;
