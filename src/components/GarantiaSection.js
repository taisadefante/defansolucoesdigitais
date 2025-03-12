import React from "react";
import { Container } from "react-bootstrap";

const GarantiaSection = () => {
  return (
    <section className="py-5 bg-black text-white text-center">
      <Container>
        <h2 className="mb-3">Garantia de Satisfação</h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
          Se você não estiver satisfeito com o site em até{" "}
          <strong>7 dias</strong> após a entrega, devolvemos{" "}
          <strong>100% do seu dinheiro</strong>. Sem complicações, sem
          burocracia.
        </p>
      </Container>
    </section>
  );
};

export default GarantiaSection;
