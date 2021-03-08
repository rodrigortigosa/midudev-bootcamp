const Country = ({name}) => {
  return (
    <li key={name}>
      <p>{name}</p>
    </li>
  );
};

const Countries = ({isFilterVoid, countries, filterName }) => {
  return (
    <div>
      <ul>
        {isFilterVoid ? 
          countries.map(country => (
            <Country key={country.name} name={country.name}></Country>
          ))
          :
          countries.map(country => (
            country.name.toLocaleLowerCase().indexOf(filterName.toLocaleLowerCase()) !== -1 &&
            <Country key={country.name} name={country.name}></Country>
          ))
        }
      </ul>
    </div>
  );
};

export default Countries;