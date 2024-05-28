const listaComidas = [
  {
    comida: "Locro",
    ingredientes: ["Carne", "Panceta", "Mondongo", "Porotos", "Chorizo Colorado", "Zapallo"],
    precio: 5000,
    tiempoCoccion: "4 hs",
    dificultad: "Dificil",
  },
  {
    comida: "Asado",
    ingredientes: ["Carne"],
    precio: 8000,
    tiempoCoccion: "2 hs",
    dificultad: "Media",
  },
  {
    comida: "Pastel de Papa",
    ingredientes: ["Papas", "Huevo", "Queso", "Carne Picada"],
    precio: 6000,
    tiempoCoccion: "1.5 hs",
    dificultad: "Media",
  },
];

// for (let index = 0; index < listaComidas.length; index++) {
//   console.log("Esta es la receta numero: " + index + 1);
//   console.log(listaComidas[index]);
// }

// let index = 0;
// while (index < listaComidas.length) {
//   console.log("Esta es la receta numero: " + (index + 1));
//   console.log(listaComidas[index]);
//   index++;
// }

// let contador = 1;
// listaComidas.forEach((item) => {
//   console.log(item.comida);
//   console.log(item.precio);
// });

const comidasPromocion = listaComidas.filter((comida) => comida.precio <= 6000);

listaComidas.filter();

// console.log(comidasPromocion);

// const numeros = [1, 4, 2, 3, 4, 5, 10];

// const eliminarNumer = (num) => {
//   const numeroIndex = numeros.indexOf(num);
//   numeros.splice(numeroIndex, 1);
// };

// eliminarNumer(4);
// console.log(numeros);

// function miFuncion(a, callback) {
//   const c = a + 15;
//   return callback(c);
// }

// function esPar(n) {
//   return n % 2 === 0;
// }

// if (miFuncion(6, esPar)) {
//   console.log("Es par");
// } else {
//   console.log("No es par");
// }

// console.log(miFuncion(5, esPar));
