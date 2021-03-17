const Country = ({name}) => {
  return (
    <li key={name}>
      <p>{name}</p>
    </li>
  );
};

const Countries = ({isFilterVoid, countries, filterName }) => {
  let countriesToShow = [];

  if(isFilterVoid) {
    return (
      <div>
        <ul>
          {countries.map(country => (
            <Country key={country.name} name={country.name}></Country>
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
      return (
        <div>
          <h1>{countryToShow.name}</h1>
          <p>Capital: {countryToShow.capital}</p>
          <p>Population: {countryToShow.population}</p>
          <h3>Languages</h3>
          <ul>
            {countryToShow.languages.map(language => (
              <li key={language.name}>{language.name}</li>
            ))}  
          </ul>
          <img src={countryToShow.flag} width='300px' height='200px' alt={'Flag of ' + countryToShow.name}></img>
        </div>
      )
    }
    else {
      return (
        <div>
          <ul>
            {countriesToShow.map(countryToShow => (
              <Country key={countryToShow.name} name={countryToShow.name}></Country>
            ))}
          </ul>
        </div>
      );
    }
  }
};

export default Countries;