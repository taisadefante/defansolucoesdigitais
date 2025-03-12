import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const DiferenciaisSection = () => {
  const itens = [
    "✅ Design moderno e responsivo",
    "✅ Performance otimizada",
    "✅ SEO profissional",
    "✅ Suporte dedicado",
    "✅ Segurança e proteção de dados",
    "✅ Integração com WhatsApp, redes sociais e APIs",
    "✅ Hospedagem otimizada e confiável",
    "✅ Desenvolvimento com tecnologias de ponta",
    "✅ Personalização para atender às suas necessidades",
    "✅ Facilidade de manutenção e escalabilidade",
    "✅ Experiência aprimorada para usuários (UX/UI)",
    "✅ Automação de processos para maior eficiência",
  ];

  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center mb-4">Por que escolher a Defan?</h2>
        <Row>
          {itens.map((item, i) => (
            <Col md={6} key={i} className="mb-2">
              <p className="mb-1">{item}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DiferenciaisSection;
