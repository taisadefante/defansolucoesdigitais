import React from "react";
import { Container, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Perguntas Frequentes</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Qual o preço da entrega?</Accordion.Header>
            <Accordion.Body>
              Nossos prazos variam de acordo com a demanda.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>O site é feito em WordPress?</Accordion.Header>
            <Accordion.Body>
              Utilizamos diversas tecnologias de acordo com o projeto.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
