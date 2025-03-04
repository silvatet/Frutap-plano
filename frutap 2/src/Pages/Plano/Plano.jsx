import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Plano.css";

const Plano = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulação de URL do PDF enviado pela empresa (substitua pela URL real)
    setPdfUrl("/assets/plano-estrategico.pdf"); // Certifique-se de que o arquivo está acessível

    // Timer para voltar para a tela de descanso após 30 segundos sem interação
    const timeout = setTimeout(() => {
      navigate("/");
    }, 30000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handlePrint = () => {
    const newWindow = window.open(pdfUrl, "_blank");
    if (newWindow) {
      newWindow.onload = () => {
        newWindow.print(); // Aciona a impressão automática

        // Aguarda um tempo e redireciona para TelaFinal após a impressão
        setTimeout(() => {
          navigate("/final");
        }, 2000);
      };
    } else {
      alert("Por favor, permita pop-ups para imprimir o plano.");
    }
  };

  return (
    <Box className="plano-container">
      <Typography variant="h3" className="titulo-plano">
        Plano Estratégico
      </Typography>
      <iframe src={pdfUrl} className="pdf-viewer" title="Plano Estratégico"></iframe>
      <Button variant="contained" color="primary" onClick={handlePrint} className="botao-imprimir">
        IMPRIMIR
      </Button>
    </Box>
  );
};

export default Plano;
