console.log("Hola Mundo");

let firstName = "Rodri"; //Permitir (se puede REASIGNAR el valor)

console.log(firstName);
firstName = "Pepito";
console.log(firstName);

const age = 23; //Constante (No se puede REASIGNAR un valor)

console.log(age);
//age = 5;
//console.log(age); //Uncaught TypeError: Assignment to constant variable

var isDeveloper = true; //Viejo

const lastName = "Ortigosa";
lastName.toLocaleUpperCase(); //No se puede cambiar el valor de un string (tipo primitivo)
console.log(lastName); //Sigue igual, muestra Ortigosa

const lastNameWithUpperCase = lastName.toLocaleUpperCase();
console.log(lastNameWithUpperCase); //Muestra ORTIGOSA

//Objetos
const list = [];
list.push(157);

console.log(list); //[157]

console.log(list[0]); //157

const anotherList = list.concat(158);
console.log(anotherList); //[157, 158]

anotherList.forEach((value) => {
  console.log(value);
  //157
  //158
});

const person = {
  name: "Rodrigo",
  lastName: "Ortigosa",
  age: 23,
  isDeveloper: true,
  links: [
    "https://rodrigortigosa.github.io/",
    "https://github.com/rodrigortigosa",
  ],
};

console.log(person.name); //Rodrigo
console.log(person["name"]); //Rodrigo
console.log(person.links); //["https://rodrigortigosa.github.io/", "https://github.com/rodrigortigosa"]
console.log(person.links[0]); //https://rodrigortigosa.github.io/

const field = "lastName";
console.log(person[field]); //Ortigosa
console.log(person["lastName"]); //Ortigosa

//Funciones

const sumar = (a, b) => {
  console.log(a);
  console.log(b);
  return a + b;
};

//Si la función solo contiene una expresión, las llaves no son necesarias
//const sumar = (a, b) => a + b;

const x = 1;
const y = 3;

const suma = sumar(x, y);
console.log("Suma: " + x + " + " + y + " = " + suma);

//Al declarar la funcion asi, se puede usar arriba de todo "Hoisting"
function restar(a, b) {
  return a - b;
}

const w = 6;
const z = 4;

const resta = restar(w, z);
console.log("Resta: " + w + " - " + z + " = " + resta);
