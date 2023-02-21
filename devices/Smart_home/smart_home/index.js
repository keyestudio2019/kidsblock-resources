const Smarthome = formatMessage => ({
    name: 'Smart home for arduino',
    deviceId: 'Smarthome_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/smarthome.png',
    description: formatMessage({
        id: 'Smarthome.description',
        default: 'Smart_home',
        description: 'Description for the Smart_home kit'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/smarthome_big.svg',
    connectionSmallIconURL: 'asset/smarthome_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Smarthome'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = Smarthome;
