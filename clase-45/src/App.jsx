import { useState } from "react";
import { Card } from "./components/Card";
import { Product } from "./components/Product";

function App() {
  const items = [
    {
      nombre: "Producto 1",
      urlImage: "https://picsum.photos/id/155/100/100",
      descripcion: "Este es el primer producto de la lista, ideal para empezar.",
    },
    {
      nombre: "Producto 2",
      urlImage: "https://picsum.photos/id/322/100/100",
      descripcion: "Producto 2, diseñado para los que buscan más calidad.",
    },
    {
      nombre: "Producto 3",
      urlImage: "https://picsum.photos/id/210/100/100",
      descripcion: "Una opción equilibrada entre precio y rendimiento.",
    },
    {
      nombre: "Producto 4",
      urlImage: "https://picsum.photos/id/15/100/100",
      descripcion: "Producto 4, con características avanzadas para usuarios exigentes.",
    },
    {
      nombre: "Producto 5",
      urlImage: "https://picsum.photos/id/133/100/100",
      descripcion: "El producto más popular de nuestra tienda, recomendado por expertos.",
    },
    {
      nombre: "Producto 6",
      urlImage: "https://picsum.photos/id/220/100/100",
      descripcion: "Producto 6, ideal para aquellos que buscan durabilidad.",
    },
    {
      nombre: "Producto 7",
      urlImage: "https://picsum.photos/id/10/100/100",
      descripcion: "Producto 7, con un diseño innovador y funcional.",
    },
    {
      nombre: "Producto 8",
      urlImage: "https://picsum.photos/id/120/100/100",
      descripcion: "Producto 8, compacto y versátil, perfecto para cualquier ocasión.",
    },
    {
      nombre: "Producto 9",
      urlImage: "https://picsum.photos/id/18/100/100",
      descripcion: "Producto 9, con la mejor relación calidad-precio del mercado.",
    },
    {
      nombre: "Producto 10",
      urlImage: "https://picsum.photos/id/12/100/100",
      descripcion: "El producto 10, la última incorporación a nuestra tienda.",
    },
  ];

  const [products, setProducts] = useState(items);

  return (
    <>
      {products.map((product) => (
        <Card key={product.nombre}>
          <Product nombre={product.nombre} imagen={product.urlImage} text={product.descripcion} />
        </Card>
      ))}
    </>
  );
}

export default App;
