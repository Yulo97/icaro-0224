function puedesEntrar() {
  const arreglo = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }

  arreglo.forEach((item) => {
    console.log(item);
  });
}

module.exports = puedesEntrar;
