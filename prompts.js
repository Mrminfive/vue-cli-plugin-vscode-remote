
const versionList = [
    'current',
    'latest',
    '12',
    '11',
    '10',
    '9',
    '8',
    '7',
    '6'
]

module.exports = [
    {
        type: 'rawlist',
        name: 'nodeVersion',
        message: 'The version of node used in the remote development container',
        choices: versionList,
        default: 'latest',
    },
    {
        type: 'number',
        name: 'port',
        message: 'Port used for remote development',
        default: 8080,
    }
]
