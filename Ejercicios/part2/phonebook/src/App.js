import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '040-123456' }]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const handleNameChange = (event) => {
    console.log('change', event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log('change', event.target.value);
    setNewNumber(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit add person');
    console.log(newName, newNumber);
    const personToAddToState = {
      name: newName,
      number: newNumber
    };

    if(persons.map(person => person.name).includes(personToAddToState.name)) {
      console.log(personToAddToState);
      alert(`${newName} is already added to phonebook`);
    }
    else {
      setPersons(persons.concat(personToAddToState));
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} required/>
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} required />
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
            <p>{person.number}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;