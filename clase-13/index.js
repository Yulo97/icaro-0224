function prueba() {
  if (true) {
    var nombre = "Pedro";
    let apellido = "Picapiedras";
  }

  // Se va a producir un ERROR al ejecutar la funcion
  // ya que no existe apellido fuera del scoupe de el "if"
  console.log(nombre);
  console.log(apellido);
}

const array = [1, 2, 3];

const num = array[0];
const num1 = array[1];
const num2 = array[2];

// Destructuring
const [a, b, c] = [1, 2, 3];

// Valor por defecto en destructuring
const [nombre = "Joaquin"] = [];

// Salteamos la edad en el destructuring
const [telefono, , apellido = "apellido"] = ["1535468445", 20, "Mendi"];

// Destructuring en un objeto
const celular = {
  marca: "Iphone",
  modelo: 11,
  precio: "$6.800",
};

const { precio, modelo } = celular;

// Funcion Tradicional
function miFuncion(nombre) {
  return nombre;
}

// Funcion Flecha
// el return esta implicito
let miFuncionFlecha = (nombre) => nombre;

// Cuando la funcion flecha tiene "{}" el "return ya no esta implicito"
let miFuncionFlecha2 = (a, b) => {
  let resultado = a + b;
  return resultado;
};

// Retornar un objeto Literal con Arrow Function
const retornaObjeto = () => {
  return {
    nombre: "pepe",
  };
};

// Retornar un objeto Literal con Arrow Function con parentesis (return implicito)
const retonarObjeto2 = () => ({ nombre: "pepe" });

// Operadores Ternarios
const validarEdad = () => {
  let edad = 20;

  if (edad > 18) {
    console.log("Puedes pasar");
  } else {
    console.log("No puedes pasar");
  }

  edad > 18 ? console.log("Puedes pasar") : console.log("No puedes pasar");
};

// Template String
const saludo = "Hola como estas " + nombre;
const saludo2 = `Hola como estas ${nombre}`;
