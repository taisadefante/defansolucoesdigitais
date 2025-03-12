import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "Landing Pages",
    description:
      "Criamos páginas com foco em conversão e performance, ideais para campanhas de marketing e geração de leads.",
  },
  {
    title: "Site Institucional",
    description:
      "Desenvolvemos sites para empresas e profissionais com design moderno, responsivo e foco na presença digital.",
  },
  {
    title: "Blog",
    description:
      "Área de publicação integrada com SEO, para você compartilhar conteúdo, atrair audiência e fortalecer sua autoridade.",
  },
  {
    title: "E-commerce",
    description:
      "Lojas virtuais seguras e otimizadas, com integração de pagamento, controle de estoque e carrinho inteligente.",
  },
  {
    title: "Hospedagem",
    description:
      "Serviço de hospedagem confiável com alta performance, SSL incluso e proteção contra ataques.",
  },
  {
    title: "SEO & Otimização",
    description:
      "Melhore seu ranqueamento no Google, aumente a velocidade do site e atraia visitantes qualificados.",
  },
  {
    title: "Integração com APIs",
    description:
      "Conectamos seu sistema a WhatsApp, gateways de pagamento, ERPs, CRMs e redes sociais.",
  },
  {
    title: "Dashboard & Relatórios",
    description:
      "Criação de painéis administrativos com gráficos e KPIs para ajudar na gestão do seu negócio.",
  },
  {
    title: "Segurança & Proteção",
    description:
      "Implementamos certificados SSL, backups automáticos e camadas extras de segurança para proteger seus dados.",
  },
  {
    title: "Responsividade Total",
    description:
      "Todos os nossos sites são responsivos: funcionam perfeitamente em smartphones, tablets e desktops.",
  },
  {
    title: "Design Intuitivo",
    description:
      "UX e UI pensados para criar interfaces agradáveis, fáceis de navegar e com foco em conversão.",
  },
  {
    title: "Suporte Contínuo",
    description:
      "Após a entrega do projeto, oferecemos suporte técnico e consultoria contínua para evolução do seu sistema.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      style={{ backgroundColor: "#000", padding: "60px 0" }}
    >
      <Container>
        <h2 className="text-center mb-4 text-white fw-bold">
          Soluções que Entregam Resultados
        </h2>
        <p
          className="text-center text-secondary mb-5"
          style={{ fontSize: "15px" }}
        >
          Desenvolvemos soluções completas, do planejamento ao lançamento, com
          foco em resultado real para o seu negócio.
        </p>
        <Row className="gy-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card className="h-100 service-card shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold mb-3 text-white">
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#ccc", fontSize: "15px" }}>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Estilo CSS inline */}
      <style>{`
        .service-card {
          background: #1a1a1a;
          border: none;
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
};

export default Services;
