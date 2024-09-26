import React, { useState, useEffect } from "react";
import styles from "./ProductDetail.module.css";
import axios from "axios";

export const ProductDetail = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  const fetchProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/20`);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span>US$ {product.price}</span>
      </div>
    </>
  );
};
