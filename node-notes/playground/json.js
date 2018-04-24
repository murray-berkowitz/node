// let obj = {
//     name: 'Murray'
// }

// let stringObj = JSON.stringify(obj)

// console.log(typeof stringObj, stringObj)

// let person = '{"name":"murray", "age": 24}'

// console.log(typeof JSON.parse(person), JSON.parse(person))

const fs = require('fs')

let originalNote = {
    title: 'Title',
    body: 'Body'
}

let originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

let noteString = fs.readFileSync('notes.json')

let note = JSON.parse(noteString)

console.log(typeof note, note.title)
