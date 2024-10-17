import { Navbar } from "./components/templates/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Tienda } from "./components/pages/Tienda";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/tienda"} element={<Tienda />} />
        <Route path={"/contacto"} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
