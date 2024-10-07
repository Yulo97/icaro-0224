import React from "react";
import styles from "./Product.module.css";

export const Product = ({ nombre, precio, img }) => {
  return (
    <div className={styles.container}>
      <h2>{nombre}</h2>
      <img src={img} alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
      <button>Comprar {precio}</button>
    </div>
  );
};
