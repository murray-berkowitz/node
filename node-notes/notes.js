let addNote = (title, body) => {
    console.log('Adding note', title, body)
}

let getAll = () => {
    console.log('Getting all notes')
}

let readNote = (title) => {
    console.log('Getting note', title)
}

let removeNote = (title) => {
    console.log('Removing note', title)
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}