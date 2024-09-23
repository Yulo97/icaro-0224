import React from "react";
import { Button } from "../Button";

export const Product = ({ imagen, nombre, text }) => {
  return (
    <>
      <h4 style={{ margin: "10px 0 15px " }}>{nombre}</h4>
      <img src={imagen} alt="Imagen del producto" />
      <p style={{ padding: "5px" }}>{text}</p>
      <Button text={nombre} />
    </>
  );
};
