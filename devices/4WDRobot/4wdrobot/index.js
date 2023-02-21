const BT4WDRobot = formatMessage => ({
    name: '4WD Robot',
    deviceId: '4WDRobot_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0428.html',
    iconURL: 'asset/4wdrobot.png',
    description: formatMessage({
        id: '4WDRobot.description',
        default: '4WDRobot',
        description: 'Description for the 4WDRobot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/4wdrobot_big.svg',
    connectionSmallIconURL: 'asset/4wdrobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['4WDRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0428.html'
});

module.exports = BT4WDRobot;
