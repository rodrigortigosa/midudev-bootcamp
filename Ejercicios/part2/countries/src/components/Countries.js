import { useState } from 'react';

const showInfoCountry = (country) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}  
      </ul>
      <img src={country.flag} width='300px' height='200px' alt={'Flag of ' + country.name}></img>
    </div>
  );
};

const Country = ({ country, showButton }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };  

  if(show === true) {
    return showInfoCountry(country);
  }
  else {
    const buttonStyle = {
      marginLeft: '5'
    };
  
    if(showButton) {
      return (
        <li key={country.name}>
          <p>{country.name} 
            <button style={buttonStyle} onClick={handleShow}>show</button>
          </p>
        </li>
      );
    }
    else {
      return (
        <li key={country.name}>
          <p>{country.name}</p>
        </li>
      );
    }
  }
};

const Countries = ({ isFilterVoid, countries, filterName }) => {
  let countriesToShow = [];
  
  if(isFilterVoid) {
    return (
      <div>
        <ul>
          {countries.map(country => (
            <Country key={country.name} country={country}></Country>
          ))}
        </ul>
      </div>
    );
  }
  else {
    countries.forEach(country => {
      country.name.toLocaleLowerCase().indexOf(filterName.toLocaleLowerCase()) !== -1 
      && countriesToShow.push(country);
    });
    if(countriesToShow.length > 10) {
      return <p>To many matches, specify another filter</p>;
    }
    
    else if(countriesToShow.length === 1) {
      const countryToShow = countriesToShow[0];
      return showInfoCountry(countryToShow);
    }
    else {
      return (
        <div>
          <ul>
            {countriesToShow.map(countryToShow => (
              <Country key={countryToShow.name} country={countryToShow} showButton={true}></Country>
            ))}
          </ul>
        </div>
      );
    }
  }
};

export default Countries;