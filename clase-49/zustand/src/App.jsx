import { Padre } from "./components/Padre";
import { useContentStore } from "./stores/useContentStore";

function App() {
  const tema = useContentStore((state) => state.tema);

  return (
    <>
      <h1 style={{ color: tema === "oscuro" ? "#fff" : "red" }}>Hola Mundo</h1>
      <Padre />
    </>
  );
}

export default App;
