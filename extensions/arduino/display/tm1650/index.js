/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const tm1650 = formatMessage => ({
    name: formatMessage({
        id: 'tm1650.name',
        default: 'tm1650 module'
    }),
    extensionId: 'tm1650',
    version: '1.0.0',
    supportDevice: ['unoCore','unoStart'],
    author: 'keyestudio',
    iconURL: `asset/tm1650.png`,
    description: formatMessage({
        id: 'tm1650.description',
        default: 'tm1650 module.',
        description: 'Description of tm1650 module'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'www.keyestudio.com'
});

module.exports = tm1650;
