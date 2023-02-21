const gesture_recognition = formatMessage => ({
    name: formatMessage({
        id: 'gesture_recognition',
        default: 'Gesture Recognition',
        description: 'Gesture Recognition'
    }),
    extensionId: 'gesture_recognition',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: [''],
    author: 'keyes',
    iconURL: `asset/ges.png`,
    description: formatMessage({
        id: 'gesture_recognition.description',
        default: 'gesture_recognition sensor module.',
        description: 'Description of gesture_recognition'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = gesture_recognition;
