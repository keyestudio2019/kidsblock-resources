const Makerbit = formatMessage => ({
    name: 'Makerbit',
    deviceId: 'Makerbit_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/Makerbit.png',
    description: formatMessage({
        id: 'Makerbit.description',
        default: 'Makerbit',
        description: 'Description for the Makerbit'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/makerbit_big.svg',
    connectionSmallIconURL: 'asset/makerbit_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['Makerbit'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = Makerbit;
