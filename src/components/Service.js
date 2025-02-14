import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const services = [
  {
    title: "Landing Pages",
    description:
      "Páginas focadas em conversões, como vendas ou captação de leads.",
  },
  {
    title: "Site Institucional",
    description:
      "Para empresas, profissionais e organizações apresentarem informações básicas e contato.",
  },
  {
    title: "Blog",
    description:
      "Sistema de postagem de artigos, integração com SEO e categorias.",
  },
  {
    title: "E-commerce",
    description:
      "Lojas virtuais com carrinho de compras, meios de pagamento e gestão de pedidos.",
  },
  {
    title: "Hospedagem",
    description:
      "Serviço de hospedagem otimizado para performance e segurança.",
  },
  {
    title: "SEO & Otimização",
    description: "Melhore o ranqueamento do seu site e aumente a velocidade.",
  },
  {
    title: "Integração com APIs",
    description: "Conectamos seu site a WhatsApp, Pagamentos e Redes Sociais.",
  },
  {
    title: "Dashboard & Relatórios",
    description: "Visualize métricas e relatórios detalhados do seu negócio.",
  },
  {
    title: "Segurança & Proteção",
    description: "Implementamos SSL, backups e proteções contra ataques.",
  },
];

const Services = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [groupedServices, setGroupedServices] = useState([]);
  const [autoScroll, setAutoScroll] = useState(true);

  const updateItemsPerSlide = () => {
    if (window.innerWidth < 576) {
      setItemsPerSlide(1); // Mobile
    } else if (window.innerWidth < 768) {
      setItemsPerSlide(2); // Tablet
    } else {
      setItemsPerSlide(3); // Desktop
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    const newGroupedServices = [];
    for (let i = 0; i < services.length; i += itemsPerSlide) {
      newGroupedServices.push(services.slice(i, i + itemsPerSlide));
    }
    setGroupedServices(newGroupedServices);
    setIndex(0); // Resetar índice ao mudar o agrupamento
  }, [itemsPerSlide]);

  // Função para avançar os slides
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % groupedServices.length);
    setAutoScroll(false); // Pausar rolagem automática ao clicar
    setTimeout(() => setAutoScroll(true), 10000); // Retomar após 10s
  };

  // Rolagem automática a cada 5 segundos
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % groupedServices.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoScroll, groupedServices.length]);

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Nossos Serviços</h2>

        <Row className="justify-content-center">
          {(groupedServices[index] || []).map((service, idx) => (
            <Col
              key={idx}
              xs={12}
              sm={6}
              md={4}
              className="d-flex align-items-stretch mb-4"
            >
              <Card
                className="shadow-lg border-0 text-center w-100"
                style={{ boxShadow: "0px 4px 10px #4a90e2" }}
              >
                <Card.Body>
                  <Card.Title
                    as="h4"
                    className="fw-bold"
                    style={{ color: "#4a90e2" }}
                  >
                    {service.title}
                  </Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Botão "Próximo" centralizado abaixo dos cartões */}
        <div className="text-center mt-3">
          <Button variant="primary" onClick={nextSlide}>
            Próximo
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
