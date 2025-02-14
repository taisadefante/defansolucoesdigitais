import React from "react";
import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section
      className="hero text-center text-light d-flex align-items-center justify-content-center"
      style={{
        background: `url("/assets/tecnologia.jpg") no-repeat center center/cover`,
        padding: "50px 15px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container>
        <h2 className="hero-title">
          <span style={{ color: "white" }}>Bem-vindo a </span>
          <span
            className="nowrap"
            style={{
              color: "white",
              textShadow: "2px 2px 5px #80d0ff",
            }}
          >
            Defan Soluções Digitais
          </span>
        </h2>
        <p className="hero-text">Transformamos ideias em soluções digitais</p>
        <a
          href={`https://api.whatsapp.com/send?phone=21988359825&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="primary" size="lg">
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
          /* Evita quebra de linha e mantém alinhado */
          .hero-text {
            font-size: 22px;
            font-weight: 500;
            white-space: nowrap;
          }

          /* Ajusta os tamanhos conforme a tela diminui */
          @media (max-width: 992px) {
            .hero-title {
              font-size: 2.5rem;
            }
            .hero-text {
              font-size: 20px;
            }
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2rem;
            }
            .hero-text {
              font-size: 18px;
            }
          }

          @media (max-width: 576px) {
            .hero-title {
              font-size: 1.5rem;
            }
            .hero-text {
              font-size: 16px;
              white-space: normal;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
