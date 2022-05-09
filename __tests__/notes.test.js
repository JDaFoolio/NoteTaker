const fs = require('fs');
const { notes } = require('../db/db.json');
const { createNote, findById, updateNote, deleteNote } = require('../lib/notes');

jest.mock('fs');

// test that function creates a note obj
test('checks a note is created with title and text', () => {
    const note = createNote({
        id: "123",
        title: 'New note',
        text: 'New note text'
    }, notes);

    expect(note.title).toBe('New note');
    expect(note.text).toBe('New note text');
    expect(note.id).toBe("123");
});

// test that function returns note with queried id
test('returns a single note with matching id', () => {
    const notesList = [
        {
            id: "123",
            title: 'New note',
            text: 'New note text'
        },
        {
            id: "321",
            title: 'New note 2',
            text: 'New note text 2'
        },
    ];

    const result = findById("321", notesList);

    expect(result.title).toBe('New note 2');
});

// update note function test
test('checks function updates note data', () => {
    const notesList = [
        {
            id: "123",
            title: 'New note',
            text: 'New note text'
        },
        {
            id: "321",
            title: 'New note 2',
            text: 'New note text 2'
        },
    ];

    const changedNote = {
        id: "123",
        title: 'Updated note',
        text: 'Updated text'
    };

    const result = updateNote(changedNote, notesList);

    expect(result.title).toBe('Updated note');
    expect(result.text).toBe('Updated text');
    expect(notesList.length).toBe(2);
});

// test delete method
test('checks delete function removes one note', () => {
    const notesList = [
        {
            id: "123",
            title: 'New note',
            text: 'New note text'
        },
        {
            id: "321",
            title: 'New note 2',
            text: 'New note text 2'
        },
    ];
    const oldNotesArrayLength = notesList.length;
    const result = deleteNote("123", notesList);

    expect(result.length).toBeLessThan(oldNotesArrayLength);
});