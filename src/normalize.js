const fs = require('fs')
const { join, resolve } = require('path')

const dirPath1 =  join(__dirname, './test1')
const dirPath2 = resolve(__dirname, './test2')

fs.mkdirSync(dirPath1)
fs.mkdirSync(dirPath2)
