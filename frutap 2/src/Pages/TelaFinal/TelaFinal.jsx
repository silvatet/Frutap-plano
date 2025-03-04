import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "./TelaFinal.css";

const TelaFinal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/"); // Volta para a tela de descanso após 10 segundos
    }, 10000);

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar
  }, [navigate]);

  return (
    <Box className="tela-final-container">
      <img src="../../public/logo.png" alt="Logo" className="logo-final" />
      <Typography variant="h2" className="mensagem-final">
      Retire seu Plano Estratégico no Balcão
      </Typography>
    </Box>
  );
};

export default TelaFinal;