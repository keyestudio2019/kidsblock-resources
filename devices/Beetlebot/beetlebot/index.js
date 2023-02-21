const Beetlebot = formatMessage => ({
    name: 'Beetlebot',
    deviceId: 'Beetlebot_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://ks0543-keyestudio-beetlebot-3-in1-robot-scratch-tutorials.readthedocs.io/en/latest/',
    iconURL: 'asset/beetlebot.png',
    description: formatMessage({
        id: 'Beetlebot.description',
        default: 'Beetlebot',
        description: 'Description for the Beetlebot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/beetlebot_big.svg',
    connectionSmallIconURL: 'asset/beetlebot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Beetlebot'],
    deviceExtensionsCompatible: 'arduinoNano_arduinoUno',
    helpLink: 'https://ks0543-keyestudio-beetlebot-3-in1-robot-scratch-tutorials.readthedocs.io/en/latest/'
});

module.exports = Beetlebot;
