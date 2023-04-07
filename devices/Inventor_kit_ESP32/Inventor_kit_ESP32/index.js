const Inventor_ESP32 = formatMessage => ({
    name: 'Inventor kit for ESP32',
    deviceId: 'Inventor_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/Inventor.jpg',
    description: formatMessage({
        id: 'InventorESP32.description',
        default: 'Inventor Starter kit for ESP32',
        description: 'Description for the Inventor Starter kit for ESP32'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/inventoresp_big.svg',
    connectionSmallIconURL: 'asset/inventoresp_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Inventor_ESP32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = Inventor_ESP32;
