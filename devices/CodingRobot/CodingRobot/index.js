const CodingRobot = formatMessage => ({
    name: 'Coding Robot',
    deviceId: 'CodingRobot_arduinoUno',
    manufactor: 'kidsbits',
    //leanMore: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0464.html',
    iconURL: 'asset/codingrobot.png',
    description: formatMessage({
        id: 'CodingRobot.description',
        default: 'CodingRobot',
        description: 'Description for the CodingRobot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/codingrobot_big.svg',
    connectionSmallIconURL: 'asset/codingrobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['CodingRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    //helpLink: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0464.html'
});

module.exports = CodingRobot;
