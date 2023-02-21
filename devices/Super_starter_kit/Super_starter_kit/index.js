const Superstarterkit = formatMessage => ({
    name: 'Super starter kit',
    deviceId: 'Superstarterkit_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com',
    iconURL: 'asset/super_starter_kit.png',
    description: formatMessage({
        id: 'Super_starter_kit.description',
        default: 'Super starter kit',
        description: 'Description for the Super starte kit'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/starterkit_big.svg',
    connectionSmallIconURL: 'asset/starterkit_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Super_starter_kit'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.keyestudio.com'
});

module.exports = Superstarterkit;
