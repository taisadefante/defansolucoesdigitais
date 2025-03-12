import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const EstatisticasSection = () => {
  const stats = [
    { label: "Projetos Entregues", valor: 200 },
    { label: "Clientes Satisfeitos", valor: 199 },
    { label: "Média de Prazo", valor: "7 dias" },
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="text-center">
          {stats.map((s, i) => (
            <Col key={i} md={4} className="mb-3">
              <h2>{s.valor}</h2>
              <p>{s.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EstatisticasSection;
