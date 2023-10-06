const Smartfarm_ESP32 = formatMessage => ({
    name: 'Smart farm for ESP32',
    deviceId: 'Smartfarm_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/smartfarm.png',
    description: formatMessage({
        id: 'SmartfarmESP32.description',
        default: 'Smart farm kit for ESP32',
        description: 'Description for the Smart farm kit for ESP32'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/smartfarm_big.svg',
    connectionSmallIconURL: 'asset/smartfarm_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Smartfarm_ESP32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = Smartfarm_ESP32;
