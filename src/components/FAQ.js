import React from "react";
import { Container, Accordion } from "react-bootstrap";

const FAQ = () => {
  // Dados das perguntas frequentes
  const faqData = [
    {
      question:
        "Quais tecnologias vocês utilizam no desenvolvimento de sistemas?",
      answer:
        "Trabalhamos com React, Next.js, Node.js, PostgreSQL, Firebase, e diversas outras tecnologias modernas para oferecer soluções escaláveis e eficientes.",
    },
    {
      question: "Vocês oferecem hospedagem para os sistemas desenvolvidos?",
      answer:
        "Sim, hospedamos aplicações em Vercel, Railway, Render e outras plataformas conforme a necessidade do projeto.",
    },
    {
      question: "Os sistemas desenvolvidos são responsivos?",
      answer:
        "Sim, todos os nossos projetos são desenvolvidos para serem totalmente responsivos, garantindo uma ótima experiência em qualquer dispositivo.",
    },
    {
      question: "Vocês oferecem suporte após o desenvolvimento?",
      answer:
        "Sim, oferecemos suporte contínuo para manutenção, correções e atualizações dos sistemas.",
    },
    {
      question: "Quanto tempo leva para desenvolver um sistema?",
      answer:
        "O tempo de desenvolvimento varia conforme a complexidade do projeto, podendo levar de algumas semanas a meses.",
    },
    {
      question: "Vocês fazem integração com APIs de terceiros?",
      answer:
        "Sim, realizamos integrações com APIs de pagamento, redes sociais, mensageria e outros serviços conforme a necessidade do cliente.",
    },
    {
      question: "Os sistemas possuem painel administrativo?",
      answer:
        "Sim, desenvolvemos painéis administrativos personalizados para facilitar o gerenciamento dos sistemas.",
    },
    {
      question: "Vocês implementam otimização para SEO?",
      answer:
        "Sim, aplicamos técnicas avançadas de SEO para melhorar a visibilidade e o posicionamento dos sistemas nos motores de busca.",
    },
  ];

  return (
    <section id="faq" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Perguntas Frequentes</h2>
        <Accordion>
          {faqData.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
