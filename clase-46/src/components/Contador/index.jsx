import React, { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState(0);
  const [aprobado, setAprobado] = useState(false);

  const handleAprobado = () => {
    setAprobado(!aprobado);
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleCount}>Contador = {count} </button>
      <button onClick={handleAprobado}>Aprobado = {aprobado ? "Si" : "No"} </button>
    </div>
  );
};
