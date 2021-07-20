/*const fs = require('fs')

//fs.writeFileSync('notes.txt', 'My name is Miraj.')

fs.appendFileSync('notes.txt', ' I am 17 years old.')
*/


// const add = require('./utils.js')

// const sum = add(4, -2)

// console.log(sum)

const greenMsg = require('chalk')

const notes = require('./notes.js')

console.log(notes())

console.log(greenMsg.red.bgBlue.inverse.bold('error!'))
