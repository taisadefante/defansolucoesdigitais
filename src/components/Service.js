import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

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

  const updateItemsPerSlide = () => {
    setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const groupedServices = [];
  for (let i = 0; i < services.length; i += itemsPerSlide) {
    groupedServices.push(services.slice(i, i + itemsPerSlide));
  }

  useEffect(() => {
    if (groupedServices.length > 0 && index >= groupedServices.length) {
      setIndex(0);
    }
  }, [groupedServices, index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % groupedServices.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + groupedServices.length) % groupedServices.length
    );
  };

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Nossos Serviços</h2>

        <Row className="align-items-center justify-content-center">
          <Col xs="auto">
            <Button
              variant="outline-primary"
              onClick={prevSlide}
              className="d-flex align-items-center"
              disabled={groupedServices.length === 0}
            >
              <ChevronLeft size={24} />
            </Button>
          </Col>

          <Col>
            <Row className="justify-content-center">
              {(groupedServices[index] || []).map((service, idx) => (
                <Col md={4} key={idx} className="d-flex align-items-stretch">
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
          </Col>

          <Col xs="auto">
            <Button
              variant="outline-primary"
              onClick={nextSlide}
              className="d-flex align-items-center"
              disabled={groupedServices.length === 0}
            >
              <ChevronRight size={24} />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
