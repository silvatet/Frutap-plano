import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./Descanso.css";

const TelaDescanso = () => {
  const [ativo, setAtivo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setAtivo(false), 10000);

    const resetTimer = () => {
      clearTimeout(timeout);
      setAtivo(true);
      setTimeout(() => setAtivo(false), 10000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("touchstart", resetTimer);

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
      clearTimeout(timeout);
    };
  }, []);

  // Função para redirecionar ao clicar na tela de descanso
  const handleScreenClick = () => {
    navigate("/cadastro");
  };

  return (
    <Box className="tela-container" onClick={handleScreenClick}>
      <Box className="tela-descanso">
        <img src="/logo.png" alt="Logo" className="logo" />
      </Box>
    </Box>
  );
};

export default TelaDescanso;