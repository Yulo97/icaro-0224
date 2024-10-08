import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link to={"/"}>Inicio</Link>
      </li>

      <li>
        <Link to={"/contacto"}>Contacto</Link>
      </li>
      <li>
        <Link to={"/tienda"}>Tienda</Link>
      </li>
    </ul>
  );
};
