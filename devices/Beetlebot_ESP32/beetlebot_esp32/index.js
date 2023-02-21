const BeetlebotEsp32 = formatMessage => ({
    name: 'Beetlebot ESP32',
    deviceId: 'Beetlebot_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://ks5002-keyestudio-beetlebot-robot-for-stem-education-scratch.readthedocs.io/en/latest/',
    iconURL: 'asset/beetlebot.png',
    description: formatMessage({
        id: 'BeetlebotEsp32.description',
        default: 'Beetlebot ESP32',
        description: 'Description for the Beetlebot ESP32 device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/esp32robot_big.svg',
    connectionSmallIconURL: 'asset/esp32robot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Beetlebot_esp32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://ks5002-keyestudio-beetlebot-robot-for-stem-education-scratch.readthedocs.io/en/latest/'
});

module.exports = BeetlebotEsp32;
