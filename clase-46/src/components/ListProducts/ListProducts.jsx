import React, { useState, useEffect } from "react";
import { Product } from "../Product/Product";
import axios from "axios";
import { cortarString } from "../../utils/tools";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [quantityProducts, setQuantityProducts] = useState(0);

  const fetch = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    setQuantityProducts(response.data.length);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h2>Cantidad de Productos: {quantityProducts}</h2>
      {products.map((product) => (
        <Product
          image={product.image}
          key={product.id}
          precio={product.price}
          nombre={product.title}
          descripcion={cortarString(product.description)}
        />
      ))}
    </div>
  );
};
