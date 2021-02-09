import "./App.css";
import Mensaje from "./Mensaje.js";

const Descripcion = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>;
};

const App = () => {
  const titulo = 'Mi primer app en React';

  return (
    <div className="App">
      <h1>{titulo}</h1>
      
      <Mensaje message='Estamos trabajando' color='red' />
      <Mensaje message='en un curso' color='green' />
      <Mensaje message='de React' color='blue'></Mensaje>
      <Descripcion></Descripcion>
    </div>
  );
};

export default App;
