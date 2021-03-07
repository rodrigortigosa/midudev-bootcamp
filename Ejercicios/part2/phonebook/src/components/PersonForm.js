const PersonForm = ({ onSubmit, onNameChange, onNumberChange, valueName, valueNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input onChange={onNameChange} value={valueName} required/>
      </div>
      <div>
        number: <input onChange={onNumberChange} value={valueNumber} required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;