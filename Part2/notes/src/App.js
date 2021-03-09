import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect');
    
    noteService
    .getAll()
    .then(initialNotes => {
      console.log('promise fulfilled');
      setNotes(initialNotes);
    });
  }, []);

  console.log('render', notes.length, 'notes');

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleSubmitAddNote = (event) => {
    event.preventDefault();
    console.log('add note');
    console.log(newNote);

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddToState);

    noteService
    .create(noteToAddToState)
    .then(returnedNote => {
      console.log(returnedNote);
      setNotes(prevNotes => prevNotes.concat(returnedNote)); 
      setNewNote('');
    });
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  const toggleImportanceOf = id => {
    console.log(`importance of ${id} needs to be toggled`);
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote));
    })
    .catch(error => {
      console.log(error);
      alert(`the note '${note.content}' was already deleted from server`);
      setNotes(notes.filter(n => n.id !== id));
    });
  };

  if (typeof notes === 'undefined' || notes.length === 0 || notes === null) {
    return 'No hay notas para mostrar';
  }
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? 'Show only important' : 'Show all'}
      </button>
      <ol>
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            else return note.important === true;
          })
          .map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          ))}
      </ol>
      <form onSubmit={handleSubmitAddNote}>
        <input type='text' onChange={handleChange} value={newNote} required />
        <button>Add note</button>
      </form>
    </div>
  );
};

export default App;
