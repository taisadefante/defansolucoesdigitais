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

        {/* Centraliza o botão */}
        <div className="d-flex justify-content-center">
          <a
            href="https://api.whatsapp.com/send?phone=+5521988359825&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="light"
              size="lg"
              className="d-flex align-items-center gap-2 px-4 py-2"
              style={{ borderRadius: "40px", fontWeight: "bold" }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
              Falar pelo WhatsApp
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
