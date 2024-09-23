import React, { useState } from "react";

export const Parrafo = () => {
  const [nombre, setNombre] = useState("Pepe");

  return (
    <>
      <p>
        {nombre} dice: Lorem ipsum sit amet {"{palabra}"} adipisicing elit. Porro ducimus doloribus
        veniam molestias in perspiciatis.
      </p>

      <input type="text" onChange={(e) => setNombre(e.target.value)} />
    </>
  );
};
