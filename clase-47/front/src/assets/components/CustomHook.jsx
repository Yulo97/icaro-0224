import React, { useState } from "react";

const useContador = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const incrementar = () => setCount(count + 1);
  const disminuir = () => setCount(count - 1);
  const resetear = () => setCount(initialValue);

  return { count, incrementar, disminuir, resetear };
};

export const CustomHook = () => {
  const contador = useContador(10);
  const contador2 = useContador(20);

  return (
    <>
      <button onClick={contador.incrementar}>Incrementar</button>
      <button onClick={contador.disminuir}>Disminuir</button>
      <button onClick={contador.resetear}>Resetear</button>

      <br />
      <br />
      <span>{contador.count}</span>
      <br />
      <br />
      <button onClick={contador2.incrementar}>Incrementar</button>
      <button onClick={contador2.disminuir}>Disminuir</button>
      <button onClick={contador2.resetear}>Resetear</button>

      <br />
      <br />
      <span>{contador2.count}</span>
    </>
  );
};
