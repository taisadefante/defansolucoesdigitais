import React from "react";
import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section
      className="hero text-center text-light d-flex align-items-center"
      style={{
        background: `url("/assets/tecnologia.jpg") no-repeat center center/cover`,
        padding: "100px 0",
        height: "600px",
      }}
    >
      <Container>
        <h1 className="display-4 hero-title">
          <span style={{ color: "white" }}>Bem-vindo a </span>
          <span
            className="nowrap"
            style={{
              color: "white", // Texto branco
              textShadow: "2px 2px 5px #80d0ff", // Sombra azul clara
            }}
          >
            Defan Tecnologia
          </span>
        </h1>
        <p className="lead">Transformamos ideias em soluções digitais</p>
        <a
          href={`https://api.whatsapp.com/send?phone=21988359825&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="primary" size="lg aline">
            <i
              className="bi bi-whatsapp me-2"
              style={{ fontSize: "1.5rem" }}
            ></i>
            Solicitar Orçamento
          </Button>
        </a>
      </Container>

      {/* Estilos Responsivos */}
      <style>
        {`
          /* Evita quebra de linha no título em telas menores */
          .nowrap {
            white-space: nowrap;
          }

          /* Ajuste de tamanho do título em telas menores */
          @media (max-width: 576px) {
            .hero-title {
              font-size: 1.8rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
