import React, { useState, useEffect } from "react";

export const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/alumnos")
      .then((response) => response.json())
      .then((data) => setAlumnos(data));
  }, []);

  return (
    <>
      {!alumnos
        ? "loading..."
        : alumnos
            // .filter((alumno) => alumno.edad > 22)
            .sort((a, b) => a.edad - b.edad)
            .map((alumno, index) => (
              <p key={`ejemplo-key-2-${index}-${alumno.alumno}`}>
                El alumno {alumno.alumno} tiene la edad de {alumno.edad} años. Su número de alumno
                es {alumno.id}.
              </p>
            ))}
    </>
  );
};
