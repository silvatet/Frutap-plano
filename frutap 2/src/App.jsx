import { Routes, Route } from "react-router-dom";
import TelaDescanso from "./Pages/TelaDescanso/Descanso";
import TelaCadastro from "./Pages/Cadastro/Cadastro";
import Plano from "./Pages/Plano/Plano"; // Importe a nova tela
import TelaFinal from "./Pages/TelaFinal/TelaFinal";



function App() {
  return (
    <Routes>
      <Route path="/" element={<TelaDescanso />} />
      <Route path="/cadastro" element={<TelaCadastro />} />
      <Route path="/plano" element={<Plano />} />
      <Route path="/final" element={<TelaFinal />} /> {/* Adicionando a tela final */}
    </Routes>
  );
}

export default App;