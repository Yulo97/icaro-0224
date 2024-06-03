const personas = [
  {
    nombre: "Pepe",
    sexo: "Masculino",
  },
  {
    nombre: "Maria",
    sexo: "Feminino",
  },
  {
    nombre: "Antonio",
    apellido: "Torres",
    sexo: "Masculino",
  },
  {
    nombre: "Antonio",
    apellido: "Del Monte",
    sexo: "Masculino",
  },
  {
    nombre: "Lucrecia",
    sexo: "Feminino",
  },
];

// filter: Crea un nuevo array con los elementos del mismo que cumplan una condicion
const masculinos = personas.filter(({ sexo } = persona) => sexo === "Masculino");

// findIndex
const indice = personas.findIndex(
  (persona) => persona.nombre === "Antonio" && persona.apellido === "Del Monte"
);

if (indice === -1) {
  console.log("No se encontro a la persona a eliminar");
} else {
  personas.splice(indice, 1);
}
