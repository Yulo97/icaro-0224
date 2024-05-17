// CALCULADORA

const sumar = require("./funciones/sumar");
const restar = require("./funciones/restar");
const dividir = require("./funciones/dividir");
const multiplicar = require("./funciones/multiplicar");

const calculadora = (operacion, num1, num2) => {
  if (operacion == "sumar") return sumar(num1, num2);
  if (operacion == "restar") return restar(num1, num2);
  if (operacion == "dividir") return dividir(num1, num2);
  if (operacion == "multiplicar") return multiplicar(num1, num2);
};

console.log(calculadora(process.argv[2], process.argv[3], process.argv[4]));
