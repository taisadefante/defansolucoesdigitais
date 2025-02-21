import React from "react";
import { Container, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <section id="faq" className="py-5 ">
      <Container>
        <h2 className="text-center mb-4">Perguntas Frequentes</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Quais tecnologias vocês utilizam no desenvolvimento de sistemas?
            </Accordion.Header>
            <Accordion.Body>
              Trabalhamos com React, Next.js, Node.js, PostgreSQL, Firebase, e
              diversas outras tecnologias modernas para oferecer soluções
              escaláveis e eficientes.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Vocês oferecem hospedagem para os sistemas desenvolvidos?
            </Accordion.Header>
            <Accordion.Body>
              Sim, hospedamos aplicações em Vercel, Railway, Render e outras
              plataformas conforme a necessidade do projeto.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Os sistemas desenvolvidos são responsivos?
            </Accordion.Header>
            <Accordion.Body>
              Sim, todos os nossos projetos são desenvolvidos para serem
              totalmente responsivos, garantindo uma ótima experiência em
              qualquer dispositivo.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Vocês oferecem suporte após o desenvolvimento?
            </Accordion.Header>
            <Accordion.Body>
              Sim, oferecemos suporte contínuo para manutenção, correções e
              atualizações dos sistemas.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Quanto tempo leva para desenvolver um sistema?
            </Accordion.Header>
            <Accordion.Body>
              O tempo de desenvolvimento varia conforme a complexidade do
              projeto, podendo levar de algumas semanas a meses.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Vocês fazem integração com APIs de terceiros?
            </Accordion.Header>
            <Accordion.Body>
              Sim, realizamos integrações com APIs de pagamento, redes sociais,
              mensageria e outros serviços conforme a necessidade do cliente.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Os sistemas possuem painel administrativo?
            </Accordion.Header>
            <Accordion.Body>
              Sim, desenvolvemos painéis administrativos personalizados para
              facilitar o gerenciamento dos sistemas.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Vocês implementam otimização para SEO?
            </Accordion.Header>
            <Accordion.Body>
              Sim, aplicamos técnicas avançadas de SEO para melhorar a
              visibilidade e o posicionamento dos sistemas nos motores de busca.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
