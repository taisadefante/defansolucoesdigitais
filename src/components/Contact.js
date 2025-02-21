import React from "react";
import { Container, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center">
      <Container>
        <h2>Vamos Conversar?</h2>
        <p className="text-custom mb-3">
          Estou aqui para ajudar! Se você tem alguma dúvida, sugestão ou
          gostaria de discutir um projeto, não hesite em entrar em contato. Você
          pode me enviar uma mensagem através do link ou me encontrar nas redes
          sociais. Responderei o mais rápido possível!
        </p>
        <div className="d-flex justify-content-center">
          <a
            href={`https://api.whatsapp.com/send?phone=+5521988359825&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button size="lg" className="btn-custom">
              <i
                className="bi bi-whatsapp me-2"
                style={{ fontSize: "1.5rem" }}
              ></i>
              WhatsApp
            </Button>
          </a>
        </div>
      </Container>

      {/* Estilos inline para personalizar o botão e texto */}
      <style>
        {`
          .text-custom {
            max-width: 600px; /* Limita a largura do texto */
            margin: 0 auto; /* Centraliza */
            font-size: 1.2rem;
            line-height: 1.5;
          }

          .btn-custom {
            background-color: #d3d3d3 !important; /* Cinza claro */
            color: #333 !important; /* Texto preto */
            border: 1px solid #b0b0b0 !important;
            transition: background-color 0.3s ease-in-out;
          }

          .btn-custom:hover {
            background-color: #b0b0b0 !important; /* Cinza mais escuro no hover */
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
