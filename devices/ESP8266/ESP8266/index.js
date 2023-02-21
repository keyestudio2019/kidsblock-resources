const ESP8266 = formatMessage => ({
    name: 'ESP8266 development board',
    deviceId: 'ESP8266_arduinoEsp8266',
    manufactor: 'keyes',
    leanMore: 'https://www.keyestudio.com/',
    iconURL: 'asset/ESP8266.png',
    description: formatMessage({
        id: 'ESP8266.description',
        default: 'ESP8266',
        description: 'Description for the ESP8266 device'
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
    deviceExtensions: ['ESP8266'],
    deviceExtensionsCompatible: 'arduinoEsp8266',
    helpLink: 'https://www.keyestudio.com/)'
});

module.exports = ESP8266;
