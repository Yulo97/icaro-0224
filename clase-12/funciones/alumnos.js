import fs from "fs";
import inquirer from "inquirer";

const alumnos = JSON.parse(fs.readFileSync("./alumnos.json", "utf-8"));

export const alumnosMain = async () => {
  const input = await inquirer.prompt([
    {
      name: "accion",
      message: "¿Qué quieres hacer?",
      type: "list",
      choices: ["Agregar", "Eliminar", "Actualizar", "Leer"],
    },
  ]);

  // AGREGAR ALUMNO
  if (input.accion === "Agregar") {
    const { nombre, dni } = await inquirer.prompt([
      {
        name: "nombre",
        message: "¿Cómo es tu nombre?",
      },
      {
        name: "dni",
        message: "¿Cuál es tu documento?",
      },
    ]);

    const alumno = {
      nombre: nombre,
      dni: dni,
    };

    alumnos.push(alumno);
    fs.writeFileSync("./alumnos.json", JSON.stringify(alumnos));
    console.log("Alumno agregado:", alumno);

    //ELIMINAR ALUMNO
  } else if (input.accion === "Eliminar") {
    const { dni } = await inquirer.prompt([
      {
        name: "dni",
        message: "¿Cuál es el documento del alumno a eliminar?",
      },
    ]);

    const indice = alumnos.findIndex((alumno) => alumno.dni == dni);

    alumnos.splice(indice, 1);

    fs.writeFileSync("./alumnos.json", JSON.stringify(alumnos));

    // ACTUALIZAR ALUMNO
  } else if (input.accion === "Actualizar") {
    const { dni } = await inquirer.prompt([
      {
        name: "dni",
        message: "¿Cuál es el documento del alumno a actualizar?",
      },
    ]);

    const alumno = alumnos.find((item) => item.dni === dni);

    if (!alumno) {
      console.log("Alumno no encontrado");
      return;
    }

    const { nombre } = await inquirer.prompt([
      {
        name: "nombre",
        message: `¿Cuál es el nuevo nombre? (actual: ${alumno.nombre})`,
      },
    ]);

    alumno.nombre = nombre;
    fs.writeFileSync("./alumnos.json", JSON.stringify(alumnos));
    console.log("Alumno actualizado:", alumno);

    // VER TODOS LOS ALUMNOS
  } else if (input.accion === "Leer") {
    alumnos.forEach((element) => {
      console.log(element);
    });
  }
};
