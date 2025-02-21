import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação

function Buttonportfolio() {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Button
        size="lg"
        className="d-flex align-items-center gap-2 btn-custom"
        onClick={() => navigate("/portfolio")} // Redireciona para a página do portfólio
      >
        Nosso Portfólio
      </Button>
    </Container>
  );
}

export default Buttonportfolio;
