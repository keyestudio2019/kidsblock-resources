const ESP32plus = formatMessage => ({
    name: 'ESP32plus development board',
    deviceId: 'ESP32plus_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://www.keyestudio.com/',
    iconURL: 'asset/ESP32plus.png',
    description: formatMessage({
        id: 'ESP32plus.description',
        default: 'ESP32 PLUS',
        description: 'Description for the ESP32plus device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600', 
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/ESP32plus_big.svg',
    connectionSmallIconURL: 'asset/ESP32plus_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['ESP32plus_esp32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://www.keyestudio.com/)'
});

module.exports = ESP32plus;
