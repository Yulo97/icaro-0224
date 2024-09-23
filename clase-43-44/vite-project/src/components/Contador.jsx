import React, { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumarContador = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <button onClick={sumarContador}>Contador: {contador}</button>
    </>
  );
};
