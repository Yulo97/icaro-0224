import inquirer from "inquirer";
import fs from "fs";

const alumnos = JSON.parse(fs.readFileSync("alumnos.json", "utf-8"));

const input = await inquirer.prompt([
  {
    name: "accion",
    message: "¿Que quieres hacer?",
    type: "list",
    choices: ["Agregar", "Eliminar", "Actualizar", "Leer"],
  },
  {
    name: "nombre",
    message: "¿Como es tu nombre?",
  },
  {
    name: "dni",
    message: "¿Cual es tu documento?",
  },
]);

if (input.accion === "Agregar") {
  const alumno = {
    nombre: input.nombre,
    dni: input.dni,
  };

  alumnos.push(alumno);

  fs.writeFileSync("alumnos.json", JSON.stringify(alumnos));
}

if (input.accion === "Eliminar") {
  const nuevosAlumnos = alumnos.filter((item) => input.dni != item.dni);

  fs.writeFileSync("alumnos.json", JSON.stringify(nuevosAlumnos));
}
