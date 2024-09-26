import React, { useState, useEffect } from "react";

export const PruebaUseEffect = (props) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const MAX_COUNT = 10;

  useEffect(() => {
    console.log("Se ejecuta el UseEffect");

    if (count === MAX_COUNT) {
      fetch(`https://soy-el-ejemplo.de.una/api/que/se-dispara/?al-llegar-a${MAX_COUNT}`)
        .then((data) => data.json())
        .then((response) => setMessage(response.message))
        .catch(() => setMessage("Hubo un error en el llamado."));
    }
  }, [count]);

  return (
    <div>
      {" "}
      <p>
        {" "}
        El contador actual es: {count} {message}{" "}
      </p>
      <button onClick={() => setCount(count + 1)}>+ 1</button>{" "}
    </div>
  );
};
