const Codingbox = formatMessage => ({
    name: 'Coding box',
    deviceId: 'Codingbox_arduinoUno',
    manufactor: 'kidsbits',
    leanMore: 'https://www.kidsbits.cc/products/kidsbits-maker-coding-box-v10-starter-kit-for-arduino-stem-education-7-92',
    iconURL: 'asset/codingbox.png',
    description: formatMessage({
        id: 'Codingbox.description',
        default: 'Codingbox',
        description: 'Description for the Codingbox device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/codingbox_big.svg',
    connectionSmallIconURL: 'asset/codingbox_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Codingbox'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.kidsbits.cc/'
});

module.exports = Codingbox;
