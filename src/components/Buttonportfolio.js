import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação

function Buttonportfolio() {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center">
      <div
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?business,marketing')",
          height: "300px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "bold",
          padding: "1px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          Impulsione suas vendas com um site profissional!
        </div>
        <Button
          size="lg"
          className="btn-custom"
          onClick={() => navigate("/portfolio")}
          style={{ marginTop: "5px" }} // Reduzindo margem superior do botão
        >
          Nosso Portfólio
        </Button>
      </div>
    </Container>
  );
}

export default Buttonportfolio;
