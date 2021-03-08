import React, { useEffect, useState } from 'react';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import {getAll as getAllPersons, create as createPerson} from './services/persons';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilterName, setNewFilterName ] = useState('');

  useEffect(() => {
    getAllPersons().then((persons) => {
      setPersons(prevPersons => prevPersons.concat(persons));
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

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

      createPerson(personToAddToState)
      .then((person) => {
        setPersons((prevPersons) => prevPersons.concat(person));
      })
      .catch((error) => {
        console.log(error);
      });
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