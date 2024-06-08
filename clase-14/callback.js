function primeraFuncion() {
  console.log("inicio");

  setTimeout(() => {
    console.log("medio de la funcion");
  }, 1000);

  console.log("fin");
}

// primeraFuncion();

function segundaFuncion(callback) {
  console.log("inicio");

  setTimeout(() => {
    console.log("medio de la funcion");
    callback();
  }, 1000);
}

function funcionCallback() {
  console.log("fin");
}

// segundaFuncion(funcionCallback);
const funcion = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);
};

funcion();
