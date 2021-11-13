const { readFileSync } = require('fs')
const { join } = require('path')

class Example {
    static async csvToString(filePath) {
        const normalize = join(__dirname, filePath)
        return ( await readFileSync(normalize) ).toString('utf8')
    }
}

(async () => {
    const result = await Example.csvToString('../mocks/itens.csv')
    console.log(result)
})()