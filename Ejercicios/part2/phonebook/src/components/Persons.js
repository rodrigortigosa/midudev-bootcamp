const Person = ({ name, number }) => {
  return (
    <li key={name}>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};

const Persons = ({ isFilterVoid, persons, filterName }) => {
  return (
    <div>
      <ul>
        {isFilterVoid ? 
          persons.map(person => (
            <Person key={person.name} name={person.name} number={person.number}></Person>
          ))
          :
          persons.map(person => (
            person.name.toLocaleLowerCase().indexOf(filterName.toLocaleLowerCase()) !== -1 &&
            <Person key={person.name} name={person.name} number={person.number}></Person>
          ))
        }
      </ul>
    </div>
  );
};

export default Persons;