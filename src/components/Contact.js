import React from "react";
import { Container, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center">
      <Container>
        <h2>Vamos Conversar?</h2>
        <p>Clique abaixo para falar conosco via WhatsApp.</p>
        <div className="d-flex justify-content-center">
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
              WhatsApp
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
