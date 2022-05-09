const fs = require('fs');
const path = require('path');

// creates a new note
const createNote = (body, notesArr) => {
    const note = body;
    notesArr.push(note);
    // adds new note to json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
};

const findById = (id, notesArr) => {
    const result = notesArr.filter(note => note.id == id)[0];
    return result;
};

// matching id will update the note
const updateNote = (body, notesArr) => {
    const note = notesArr.filter(note => note.id === body.id)[0];
    note.title = body.title;
    note.text = body.text;

// removes old note from array and adds new note
    oldNoteIndex = notesArr.findIndex(note => note.id === body.id);
    notesArr.splice(oldNoteIndex, 1, note);
//directory path for db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
};

const deleteNote = (id, notesArr) => {
    // finds the note with matching id

    const noteIndex = notesArr.findIndex(note => note.id === id);
    notesArr.splice(noteIndex, 1);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return notesArr;
};

module.exports = { 
    createNote,
    findById,
    updateNote,
    deleteNote
}