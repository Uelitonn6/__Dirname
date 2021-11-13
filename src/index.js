const { join, resolve } = require('path')

console.log(join())     // .
console.log(resolve())  // /home/ueliton/Dev/__Dirname

console.log(join(__dirname))    // /home/ueliton/Dev/__Dirname
console.log(resolve(__dirname)) // /home/ueliton/Dev/__Dirname