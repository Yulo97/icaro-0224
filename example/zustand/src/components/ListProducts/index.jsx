import React from "react";
import styles from "./ListProducts.module.css";

export const ListProducts = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
