const puedesEntrar = require("./funciones/validacionEdad.js");

puedesEntrar();

// console.log("Esto es JavaScript ejecutado desde MI PC ! ");

// EJEMPLO de process.argv
let numero1 = Number(process.argv[2]);
let numero2 = Number(process.argv[3]);

console.log(numero1 + numero2);
