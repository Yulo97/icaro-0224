import React from "react";
import styles from "./Product.module.css";

export const Product = ({ nombre, descripcion, precio, image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="" />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <span>US$ {precio}</span>
        <div className={styles.containerButtons}>
          <button>Comprar</button>
          <button>Ver</button>
        </div>
      </div>
    </div>
  );
};
