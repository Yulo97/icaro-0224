import inquirer from "inquirer";
import fs from "fs";

const alumnos = JSON.parse(fs.readFileSync("alumnos.json"));

console.log("Alumnos antes de agregar al nuevo: " + JSON.stringify(alumnos));

const persona = await inquirer.prompt([
  {
    name: "nombreAlumno",
    message: "¿Como te llamas Loquillo?",
  },
  {
    name: "accion",
    type: "list",
    message: "¿Que tarea quisieras realizar?",
    choices: ["Agregar", "Eliminar"],
  },
]);

if (persona.accion === "Eliminar") {
  const nuevosAlumnos = alumnos.filter((item) => persona.nombreAlumno != item.nombreAlumno);
  fs.writeFileSync("alumnos.json", JSON.stringify(nuevosAlumnos));
}

if (persona.accion === "Agregar") {
  alumnos.push(persona);
  fs.writeFileSync("alumnos.json", JSON.stringify(alumnos));
}
