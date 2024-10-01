import React, { useState } from "react";

export const EjemploCondicional = () => {
  const [aprobado, setAprobado] = useState(false);

  return (
    <>
      <button onClick={() => setAprobado(!aprobado)}>Change</button>
      <div>
        {aprobado ? (
          <p style={{ color: "green" }}>Estas Aprobado</p>
        ) : (
          <p style={{ color: "red" }}>Estas Desaprobado</p>
        )}
      </div>
    </>
  );
};
