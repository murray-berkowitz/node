const fs = require('fs') //include other modules into your file
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv //yargs verion of the argument vector object
let command = argv._[0] //first argument in yargs is the command
if (command == 'add') {
  notes.addNote(argv.title, argv.body)   
}
else if (command == 'list') {
  notes.getAll()
}
else if (command == 'read'){
  notes.readNote(argv.title)
}
else if(command == 'remove') {
  notes.removeNote(argv.title)
}
else {
    console.log('Invalid command')
}