import React from "react";
import { Container, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-5 text-center"
      style={{ backgroundColor: "#111", color: "#fff" }}
    >
      <Container>
        <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
          Vamos Conversar?
        </h2>
        <p
          className="lead mb-4"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          Tem um projeto em mente, dúvidas ou quer começar agora mesmo? Estou
          aqui para ajudar! Me chame no WhatsApp e vamos criar algo incrível
          juntos.
        </p>

        {/* Botão centralizado */}
        <div className="d-flex justify-content-center">
          <a
            href="https://api.whatsapp.com/send?phone=+5521988359825&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              size="lg"
              className="btn-custom d-flex align-items-center gap-2 px-4 py-2"
            >
              <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
              Falar pelo WhatsApp
            </Button>
          </a>
        </div>
      </Container>

      {/* Estilo para o botão cinza claro */}
      <style>
        {`
          .btn-custom {
            background-color: #d3d3d3 !important;
            color: #333 !important;
            border: 1px solid #b0b0b0 !important;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease-in-out;
          }

          .btn-custom:hover {
            background-color: #bcbcbc !important;
            color: #111 !important;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
