const MecanumRobot = formatMessage => ({
    name: 'Mecanum Robot',
    deviceId: 'MecanumRobot_arduinoUno',
    manufactor: 'keyestudio',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/mecanumRobot.png',
    description: formatMessage({
        id: 'MecanumRobot.description',
        default: 'MecanumRobot',
        description: 'Description for the MecanumRobot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/mecanumRobot_big.svg',
    connectionSmallIconURL: 'asset/mecanumRobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['MecanumRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    //helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = MecanumRobot;
