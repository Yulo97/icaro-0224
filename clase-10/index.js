// function miFuncion() {
//   return 10;
// }

// let variable = 10;

// console.log(variable);

// let array = ["hola", "asd", "123"];

// let elementoElminado = array.pop();

// console.log(array);
// console.log(elementoElminado);

// let esVerdadero = 4 < 5 || 4 > 5;

// console.log(esVerdadero);

// function miFuncion() {
//   let celular = {
//     marca: "Iphone",
//     precio: 50000,
//   };

//   return celular;
// }

// let resultado = miFuncion();
// console.log(resultado);

// const miFuncion2 = () => {
//   let celular = {
//     marca: "Iphone 15",
//     precio: 50000,
//   };

//   return celular;
// };

// let resultado2 = miFuncion2();
// console.log(resultado2);

function miFuncion(nombre, edad) {
  if (edad >= 18) {
    return `Bievenido ${nombre}`;
  }
}

const miFuncionFlecha = (nombre, edad) => {
  if (edad >= 18) return `Bievenido ${nombre}`;
};

// let resultado = miFuncionFlecha("PEPE", 20);

const usuario = {
  name: "Pepe",
  password: "123",
};

const validacion = (user) => {
  if (user.name === "Pepe") {
    if (user.password === "123") {
      console.log("Puedes entrar");
    } else {
      console.log("La contraseña no es correcta");
    }
  } else {
    console.log("El usuario no es correcto");
  }
};

const validacion2 = (user) => {
  if (user.name === "Pepe" && user.password === "123") {
    console.log("Puedes entrar");
  } else {
    console.log("No puedes entrar");
  }
};

let persona = {
  nombre: "josesisto",
  password: "123",
};

const arrayDeUsuarios = [
  {
    nombre: "Jose",
    password: "123456",
    rol: "user",
  },
  {
    nombre: "Pepe",
    password: "123456",
    rol: "admin",
  },
  {
    nombre: "Maria",
    password: "123456",
    rol: "user",
  },
  {
    nombre: "Luciano",
    password: "123456",
    rol: "admin",
  },
];

let verduras = [
  "tomate",
  "lechuga",
  "tomate",
  "lechuga",
  "patata",
  5,
  { celular: "Iphone", precio: 5000 },
];

const tomates = (cajonVerduras) => {
  const tomates = cajonVerduras.filter((verdura) => {
    console.log("El ITEM actual es: " + verdura);
    return verdura === "tomate";
  });
  return tomates;
};

console.log(tomates(verduras));
