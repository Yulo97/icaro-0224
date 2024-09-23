import React from "react";
import style from "./Card.module.css";

export const Card = ({ children }) => {
  return <div className={style.card}>{children}</div>;
};
