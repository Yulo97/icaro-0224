import { BottonPrincipal } from "./components/BottonPrincipal";
import { Parrafo } from "./components/Parrafo";
import { Titulo } from "./components/Titulo";
import { Contador } from "./components/Contador";

const App = () => {
  return (
    <>
      <Titulo />
      <BottonPrincipal />
      <Parrafo />
      <br />
      <br />
      <Contador />
    </>
  );
};

export default App;
