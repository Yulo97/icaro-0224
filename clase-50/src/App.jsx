import { CardProduct } from "./components/CardProducts.jsx";
import { ListProducts } from "./components/ListProducts.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/products/:id" element={<CardProduct />} />
        <Route path="/" element={<ListProducts />} />
      </Routes>
    </>
  );
}

export default App;
