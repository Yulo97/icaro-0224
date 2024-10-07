import { useState, useEffect } from "react";
import { Product } from "./components/Product";
import { ListProducts } from "./components/ListProducts";
import axios from "axios";

function App() {
  const [filtros, setFiltros] = useState({
    precioMinimo: 60,
  });
  const [products, setProducts] = useState([]);

  const fetchFakeStoreApi = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  const handleFiltros = (event) => {
    setFiltros({ precioMinimo: event.target.value });
  };

  useEffect(() => {
    fetchFakeStoreApi();
  }, []);

  return (
    <>
      <input
        style={{ fontSize: "20px", padding: "10px", margin: "25px" }}
        type="number"
        placeholder="Precio Minimo"
        id="precioMinimo"
        name="precioMinimo"
        onChange={handleFiltros}
      />
      <ListProducts>
        {products
          .filter((item) => item.price > filtros.precioMinimo)
          .map((product) => (
            <Product
              key={product.id}
              nombre={product.title}
              img={product.image}
              precio={product.price}
            />
          ))}
      </ListProducts>
    </>
  );
}

export default App;
