const TurtleRobot = formatMessage => ({
    name: 'Turtle Robot',
    deviceId: 'TurtleRobot_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0464.html',
    iconURL: 'asset/turtleRobot.png',
    description: formatMessage({
        id: 'TurtleRobot.description',
        default: 'TurtleRobot',
        description: 'Description for the TurtleRobot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/turtlerobot_big.svg',
    connectionSmallIconURL: 'asset/turtlerobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['TurtleRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0464.html'
});

module.exports = TurtleRobot;
