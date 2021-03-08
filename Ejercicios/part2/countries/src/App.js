import React, { useEffect, useState } from 'react';
import {getAll as getAllCountries} from './services/countries';
import Countries from './components/Countries';
import Filter from './components/Filter';

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [ newFilterName, setNewFilterName ] = useState('');

  useEffect(() => {
    getAllCountries().then((countries) => {
      setCountries(prevCountries => prevCountries.concat(countries));
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const handleFilterNameChange = (event) => {
    console.log('change', event.target.value);
    setNewFilterName(event.target.value);
  }

  const isFilterVoid = newFilterName.length === 0 ? true : false;

  return (
    <>
    <h1>Countries</h1>
    <Filter handleChange={handleFilterNameChange}></Filter>
    <Countries isFilterVoid={isFilterVoid} countries={countries} filterName={newFilterName}></Countries>
    </>
  );
}

export default App;
