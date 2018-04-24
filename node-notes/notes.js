const fs = require('fs')

let fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'))
    }
    catch (e) {
        console.log(e)
        return []
    }
}

let saveNotes = notes => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

let addNote = (title, body) => {
    let notes = fetchNotes()
    let note = {
        title,
        body
    }
    let duplicates = notes.filter(e => e.title === title)

    return duplicates.length == 0 ? (notes.push(note), saveNotes(notes), note) : null
}

let getAll = () => {
    return fetchNotes()
}

let readNote = (title) => {
    return fetchNotes().filter(e => e.title === title)[0]
}

let removeNote = (title) => {
    let notes = fetchNotes()
    let filteredNotes = notes.filter(e => e.title != title)
    return notes.length !== filteredNotes.length ? (saveNotes(filteredNotes), true) : false
}

let logNote = (note) => {
    debugger
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
}