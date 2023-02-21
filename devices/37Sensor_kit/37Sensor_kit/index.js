const Sensor37kit = formatMessage => ({
    name: '37 sensor kit',
    deviceId: '37Sensorkit_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/37Sensorkit.png',
    description: formatMessage({
        id: '37Sensorkit.description',
        default: '37 sensor kit',
        description: 'Description for the 37 sensor kit'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/37Sensorkit_big.svg',
    connectionSmallIconURL: 'asset/37Sensorkit_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['37Sensorkit'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = Sensor37kit;
