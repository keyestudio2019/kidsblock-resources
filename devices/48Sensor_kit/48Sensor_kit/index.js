const Sensor48kit = formatMessage => ({
    name: '48 sensor kit',
    deviceId: '48Sensorkit_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/48Sensorkit.png',
    description: formatMessage({
        id: '48Sensorkit.description',
        default: '48 sensor kit',
        description: 'Description for the 48 sensor kit'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/48Sensorkit_big.svg',
    connectionSmallIconURL: 'asset/48Sensorkit_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['48Sensorkit'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = Sensor48kit;
