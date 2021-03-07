import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' }]); 
  const [ newName, setNewName ] = useState('');

  const handleChange = (event) => {
    console.log("change", event.target.value);
    setNewName(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit add person");
    console.log(newName);
    const personToAddToState = {
      name: newName
    };
    console.log(personToAddToState);
    setPersons(persons.concat(personToAddToState));
    setNewName("");
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => (
           <li key={person.name}>
            <p>{person.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;