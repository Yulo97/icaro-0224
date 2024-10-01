import { useState, useEffect } from "react";

export function FormularioAlumno() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);

  const handleSubmit = () => {
    fetch("http://localhost:3000/alumnos", {
      // Configuración básica del fetch.
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ alumno: nombre, edad }),
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <br />
      <input type="number" onChange={(e) => setEdad(e.target.valueAsNumber)} />
      <br />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}
