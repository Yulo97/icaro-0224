import React from "react";
import styles from "./Product.module.css";
import { useCartStore } from "../../stores/useCartStore";

export const Product = ({ nombre, precio, img }) => {
  const addCart = useCartStore((store) => store.addCart);

  const handleClick = () => {
    addCart({ nombre, precio });
  };

  return (
    <div className={styles.container}>
      <h2>{nombre}</h2>
      <img src={img} alt="" />
      <p>Lorem ipsum dolor sit amet.</p>
      <button onClick={handleClick}>Comprar {precio}</button>
    </div>
  );
};
