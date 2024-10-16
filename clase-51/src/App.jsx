import { Navbar } from "./components/template/Navbar";
import { Routes, Route } from "react-router-dom";
import { CardProduct } from "./components/common/CardProduct";
import { ListProducts } from "./components/common/ListProducts";

function App() {
  return (
    <>
      <Navbar />
      <ListProducts />
    </>
  );
}

export default App;
