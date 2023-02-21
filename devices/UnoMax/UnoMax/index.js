const UnoMax = formatMessage => ({
    name: 'UnoMax',
    deviceId: 'UnoMax_arduinoUno',
    manufactor: 'keyestudio',
    //leanMore: 'https://www.kidsbits.cc/products/kidsbits-maker-coding-box-v10-starter-kit-for-arduino-stem-education-7-92',
    iconURL: 'asset/UnoMax.png',
    description: formatMessage({
        id: 'UnoMax.description',
        default: 'UnoMax',
        description: 'Description for the UnoMax device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/max_big.svg',
    connectionSmallIconURL: 'asset/max_small.svg',
    programMode: ['realtime','upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['UnoMax'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://keyestudio.com/'
});

module.exports = UnoMax;
