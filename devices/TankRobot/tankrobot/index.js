const TankRobot = formatMessage => ({
    name: 'Tank Robot',
    deviceId: 'TankRobot_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0428.html',
    iconURL: 'asset/tankRobot.png',
    description: formatMessage({
        id: 'TankRobot.description',
        default: 'TankRobot',
        description: 'Description for the TankRobot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/tankrobot_big.svg',
    connectionSmallIconURL: 'asset/tankrobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['TankRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0428.html'
});

module.exports = TankRobot;
