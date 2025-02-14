import React from "react";
import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-light"
      style={{
        background: `url("/assets/tecnologia.jpg") no-repeat center center/cover`,
        minHeight: "90vh",
        padding: "50px 15px",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container>
        <h2
          className="fw-bold"
          style={{
            fontSize: "3.5rem",
            lineHeight: "1.2",
            color: "white", // Mantendo o título branco
          }}
        >
          <span>Bem-vindo a </span>
          <span
            style={{
              display: "block",
              textShadow: "2px 2px 5px #80d0ff",
            }}
          >
            Defan Soluções Digitais
          </span>
        </h2>
        <p
          className="fw-medium"
          style={{
            fontSize: "1.5rem",
          }}
        >
          Transformamos ideias em soluções digitais
        </p>
        <div className="d-flex justify-content-center">
          <a
            href="https://api.whatsapp.com/send?phone=+5521988359825&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <Button
              variant="primary"
              size="lg"
              className="d-flex align-items-center gap-2"
            >
              <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </Container>

      {/* Estilos Responsivos Inline */}
      <style>
        {`
          @media (max-width: 992px) {
            h2 {
              font-size: 3rem !important;
            }
            p {
              font-size: 1.4rem !important;
            }
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 2.5rem !important;
            }
            p {
              font-size: 1.3rem !important;
            }
          }

          @media (max-width: 576px) {
            h2 {
              font-size: 2rem !important;
            }
            p {
              font-size: 1.2rem !important;
              white-space: normal;
              line-height: 1.4;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
