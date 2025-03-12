import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const DepoimentosSection = () => {
  const depoimentos = [
    {
      nome: "Juliana",
      texto: "Excelente serviço! Meu site ficou incrível e funcional.",
    },
    {
      nome: "Carlos",
      texto: "Profissionais rápidos e eficientes. Super recomendo!",
    },
    {
      nome: "Aline",
      texto: "Aumentei minhas vendas após o novo site. Obrigada Defan!",
    },
  ];

  return (
    <section className="py-5 bg-black">
      <Container>
        <h2 className="text-center text-white mb-4">Depoimentos</h2>
        <Row>
          {depoimentos.map((d, i) => (
            <Col md={4} key={i} className="mb-3">
              <Card className="h-100 shadow-sm bg-white">
                <Card.Body>
                  <Card.Text style={{ color: "#000", fontSize: "1.1rem" }}>
                    "{d.texto}"
                  </Card.Text>
                  <Card.Subtitle className="mt-3 text-muted">
                    - {d.nome}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DepoimentosSection;
