const kidsUno = formatMessage => ({
    name: 'kidsUno',
    deviceId: 'kidsUno_arduinoUno',
    manufactor: 'kidsbits',
    leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/arduinoUno.png',
    description: formatMessage({
        id: 'kidsUno.description',
        default: 'kidsUno.',
        description: 'Description for the kidsUno device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/kidsuno_big.svg',
    connectionSmallIconURL: 'asset/kidsuno_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['kidsUno'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.kidsbits.cc'
});

module.exports = kidsUno;
