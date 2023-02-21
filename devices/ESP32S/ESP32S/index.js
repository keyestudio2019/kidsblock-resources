const ESP32S = formatMessage => ({
    name: 'ESP32S development board',
    deviceId: 'ESP32S_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://www.keyestudio.com/',
    iconURL: 'asset/ESP32S.png',
    description: formatMessage({
        id: 'ESP32S.description',
        default: 'ESP32S',
        description: 'Description for the ESP32S device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/ESP32S_big.svg',
    connectionSmallIconURL: 'asset/ESP32S_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['ESP32S_esp32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://www.keyestudio.com/)'
});

module.exports = ESP32S;
