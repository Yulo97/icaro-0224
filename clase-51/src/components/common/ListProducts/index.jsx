import { useEffect, useState } from "react";
import { CardProduct } from "../CardProduct";
import axios from "axios";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {products.map((item) => (
        <CardProduct key={item.id} product={item} />
      ))}
    </div>
  );
};
