import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/template/Navbar";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { Tienda } from "./components/pages/Tienda";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
