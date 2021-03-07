import React, { useState } from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [ persons, setPersons ] = useState([ 
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilterName, setNewFilterName ] = useState('');

  const handleNameChange = (event) => {
    console.log('change', event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log('change', event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterNameChange = (event) => {
    console.log('change', event.target.value);
    setNewFilterName(event.target.value);
  }
  
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

  const isFilterVoid = newFilterName.length === 0 ? true : false;

  return (
    <>
      <h2>Phonebook</h2>
    
      <Filter handleChange={handleFilterNameChange}></Filter>

      <h3>Add a new</h3>

      <PersonForm onSubmit={handleSubmit} onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange} valueName={newName} 
        valueNumber={newNumber}>
      </PersonForm>

      <h3>Numbers</h3>

      <Persons isFilterVoid={isFilterVoid} persons={persons} filterName={newFilterName}></Persons>
    </>
  );
};

export default App;