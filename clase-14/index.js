const neumatico = {
  medida: "185/60r14",
  precio: 50000,
  marca: "Fate",
};

const array = [
  {
    fruta: "manzana",
    precio: "5000",
  },
  "pera",
  5000,
  [1, 2, 3],
];

// console.log(neumatico.precio);
// console.log(array[3][1]);

const { precio, marca } = neumatico;

// console.log(precio);
// console.log(marca);

[a, , , d] = array;

// console.log(d);

// SPREAD OPERATOR

const origalArray = [1, 2, 3];
const clonedArray = [...origalArray];

const arrayNum1 = [1, 2, 3];
const arrayNum2 = [4, 5, 6];

const arrayCombinado = [...arrayNum1, ...arrayNum2];

// console.log(arrayCombinado);

const persona = {
  nombre: "Diego",
  apellido: "Guevara",
};

const personaClonada = { ...persona };

persona.nombre = "Pepe";

// console.log(persona);
// console.log(personaClonada);

// combinamos objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 2, d: 2 };

const objetoCombinado = { ...obj1, ...obj2 };

const argentina = {
  lugar: 1,
  poblacion: "5000",
};

const francia = {
  lugar: 2,
  comida: "croissant",
};

let paisCombinado = { ...argentina, ...francia };

// REST OPERATOR

const alumno = {
  nombre: "Nahuel",
  apellido: "Rodriguez",
  edad: 30,
  nota: 10,
};

const { nota, ...restoAlumno } = alumno;

const arreglo = [1, 2, 3, 4, 5];

let [primero, ...restoArreglo] = arreglo;

// console.log(primero);
// console.log(restoArreglo);

// setTimeout y Callbacks

const miFuncion = (cb) => {
  console.log("Empieza la funcion");

  setTimeout(() => {
    console.log("HOLAAAAAA");
    cb();
  }, 3000);
};

function miCallback() {
  console.log("Termina la Funcion");
}

const descargarDatos = async () => {
  const dato = await fetch("https://fakestoreapi.com/products/1");
  console.log(dato);
};

// descargarDatos();
