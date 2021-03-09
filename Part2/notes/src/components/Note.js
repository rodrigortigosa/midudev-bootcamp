import React from "react";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important';

  const buttonStyle = {
    marginLeft: '5'
  };

  return (
    <li>
      <p>
        {note.content} <button style={buttonStyle} onClick={toggleImportance}>{label}</button>
      </p>
      <small>
        <time>{note.date}</time>
      </small>
    </li>
  );
};

export default Note;
