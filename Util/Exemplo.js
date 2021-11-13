const { readFileSync } = require('fs')
const { join } = require('path')

class Example {
    static csvToString(filePath) {
        const normalize = join(__dirname, filePath)
        return (readFileSync(normalize) ).toString('utf8')
    }
}

(() => {
    const result =  Example.csvToString('../mocks/itens.csv')
    console.log(result)
})()