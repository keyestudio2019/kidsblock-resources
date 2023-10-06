const SmarthomeEsp32 = formatMessage => ({
    name: 'Smart home Esp32',
    deviceId: 'Smarthome_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/smarthome_esp32.png',
    description: formatMessage({
        id: 'SmarthomeEsp32.description',
        default: 'Smarthome Esp32',
        description: 'Description for the Smarthome Esp32 device'
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
    deviceExtensions: ['SmarthomeEsp32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = SmarthomeEsp32;
