import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Portfólio</h2>
        <Row>
          {[...Array(6)].map((_, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://via.placeholder.com/300?text=Projeto+${
                    idx + 1
                  }`}
                />
                <Card.Body>
                  <Card.Title>Projeto {idx + 1}</Card.Title>
                  <button className="btn btn-primary">Ver Detalhes</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
