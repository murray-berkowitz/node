const fs = require('fs') //include other modules into your file
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const titleOptions = {
  describe: 'Title of note', //offers help description of what your command argument does
  demand: true, //makes mandatory 
  alias: 't'  //set title command in command line with an alias, used as -t (instead of --title)
}
const bodyOptions = {
  describe: 'Body of the note',
  demand:true,
  alias: 'b'
}

const argv = yargs.command('add', 'Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
  title: titleOptions
})
.command('remove', 'Remove a note', {
  title: titleOptions
})
.help()
.argv //yargs verion of the argument vector object
let command = argv._[0] //first argument in yargs is the command
if (command == 'add') {
  let note = notes.addNote(argv.title, argv.body)
  _.isObject(note) ? console.log('Note successfully added') : console.log('Title already in use')   
}
else if (command == 'list') {
  let allNotes = notes.getAll()
  allNotes.forEach(e => {
    console.log(`${e.title} \n ${e.body} \n\n`)
  })
}
else if (command == 'read'){
  let note = notes.readNote(argv.title)
  _.isObject(note) ? notes.logNote(note) : console.log('Note not found') 
}
else if(command == 'remove') {
  notes.removeNote(argv.title) ? console.log('Note was removed') : console.log('Note was not removed')
}
else {
    console.log('Invalid command')
}