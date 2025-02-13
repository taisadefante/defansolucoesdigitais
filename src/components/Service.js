import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Nossos Serviços</h2>
        <Row>
          <Col md={4} className="mb-3">
            <div className="service-box text-center p-4 border rounded">
              <h4>Landing Pages</h4>
              <p>Páginas persuasivas ultra rápidas focadas em conversão.</p>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="service-box text-center p-4 border rounded">
              <h4>Site Institucional</h4>
              <p>Seu negócio posicionado no digital com alta autoridade.</p>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="service-box text-center p-4 border rounded">
              <h4>Hospedagem</h4>
              <p>
                Serviço de hospedagem otimizado para performance e segurança.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
