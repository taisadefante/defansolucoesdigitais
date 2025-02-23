import React from "react";
import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center text-light w-100 px-3"
      style={{
        background: "black",
        height: "auto", // Altura automática baseada no conteúdo
        padding: "50px 0",
        textShadow: "2px 2px 8px rgba(139, 138, 138, 0.7)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container fluid>
        <h2
          className="fw-bold"
          style={{
            fontSize: "3.5rem",
            lineHeight: "1.2",
            color: "white",
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
              size="lg"
              className="d-flex align-items-center gap-2 btn-custom"
            >
              <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </Container>

      {/* Estilos Globais Inline para Remover Margens */}
      <style>
        {`
          body, html {
            margin: 0 !important;
            padding: 0 !important;
            overflow-x: hidden;
          }

     
          .btn-custom {
            background-color: #d3d3d3 !important; /* Cinza claro */
            color: #333 !important; /* Texto preto para contraste */
            border: 1px solid #b0b0b0 !important;
            transition: background-color 0.3s ease-in-out;
          }

          .btn-custom:hover {
            background-color: #b0b0b0 !important; /* Cinza mais escuro no hover */
          }



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
