const fs = require("fs");

const objeto = {
  parametro1: "texto",
  parametro2: 5,
};

const arreglo = [
  {
    parametro1: "texto1",
    parametro2: 56,
  },
  {
    parametro1: "texto2",
  },
];

// console.log(arreglo[0]);

const json = JSON.stringify(arreglo);

// console.log(JSON.parse(json));

const jsonArreglo = JSON.parse(json);

fs.writeFile("texto.json", "Hola, mi nombre es Giuliano y estudio en Icaro", (error) => {
  if (error) {
    console.log(`ERROR: ${error}`);
  }
});

fs.writeFileSync("texto2.json", json);

const texto = fs.readFileSync("texto.txt", { encoding: "utf-8" });

console.log(texto);
