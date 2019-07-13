
const fs = require('fs')

function getExpansionOption(api) {
    const tryGetFile = file => {
        const files = [].concat(file)
        return files.reduce((res, fileName) => res || fs.existsSync(api.resolve(fileName)), false)
    }

    return {
        useTypescript: tryGetFile('tsconfig.json'),
        usePrettier: tryGetFile(['.prettierrc', '.prettierrc.js', 'prettier.config.js'])
    }
}

module.exports = (api, options) => {
    Object.assign(options, getExpansionOption(api))

    /**
     * 注入 vscode remote 配置
     */
    api.render('./template')
}
