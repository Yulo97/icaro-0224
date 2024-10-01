import { useState } from "react";

function IntentosComponent() {
  const [intentos, setIntentos] = useState(5); // Configuramos el hook comenzando la cuenta desde 5.

  return (
    <div>
      {" "}
      <p>
        {" "}
        {intentos < 1
          ? "Ya no quedan intentos"
          : intentos === 1
          ? `Le queda ${intentos} intento.`
          : `Le quedan ${intentos} intentos.`}{" "}
      </p>{" "}
      <button disabled={intentos < 1} onClick={() => setIntentos(intentos - 1)}>
        Intentar{" "}
      </button>{" "}
    </div>
  );
}
export default IntentosComponent;
