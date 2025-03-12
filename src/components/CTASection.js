import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-5 bg-dark text-white text-center mt-4">
      <Container>
        <h2>Pronto para alavancar seu negócio?</h2>
        <p>Solicite um orçamento agora mesmo com nossa equipe especializada.</p>

        <a
          href="https://wa.me/5521988359825"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success d-inline-flex align-items-center gap-2 mt-3"
          style={{
            fontWeight: "bold",
            padding: "10px 25px",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        >
          <FaWhatsapp size={20} />
          Fale no WhatsApp
        </a>
      </Container>
    </section>
  );
};

export default CTASection;
