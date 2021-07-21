const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})


//create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler:function(argv){
        console.log('Removing a new note!', argv)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler:function(){
        console.log('Listing out all the notes!')
    }
})

yargs.command({
    command:'read',
    describe:'Reads note',
    handler:function(){
        console.log('Reads a note!')
    }
})

//add, remove, read, list

yargs.parse()

