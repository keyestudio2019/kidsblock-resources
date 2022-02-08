const BeetlebotEsp32 = formatMessage => ({
    name: 'Beetlebot ESP32',
    deviceId: 'Beetlebot_arduinoEsp32',
    manufactor: 'keyes',
    leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
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
    connectionIconURL: 'asset/esp32-illustration.svg',
    connectionSmallIconURL: 'asset/esp32-small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['Beetlebot_esp32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = BeetlebotEsp32;
