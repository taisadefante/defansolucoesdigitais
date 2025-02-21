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
      "e o seu problema é vender online, desenvolvemos lojas virtuais funcionais e seguras, com todas as ferramentas necessárias para um bom desempenho comercial.",
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
  {
    title: "Sites Responsivos e Funcionais",
    description:
      "Criamos sites que funcionam perfeitamente em qualquer dispositivo, garantindo que seus clientes tenham uma experiência fluida, seja em desktops ou smartphones.",
  },
  {
    title: "Melhoria de Desempenho e Velocidade",
    description:
      "Sites lentos frustram usuários e prejudicam sua visibilidade online. Ajudamos a otimizar o desempenho para que seu site carregue rapidamente e proporcione uma navegação sem interrupções.",
  },
  {
    title: "SEO (Otimização para Motores de Busca",
    description:
      "Se o seu site não aparece nas pesquisas do Google, ele não está atingindo seu público-alvo. Trabalhamos com técnicas de SEO para aumentar sua visibilidade e atrair mais visitantes qualificados.",
  },
  {
    title: "Design Intuitivo e Atraente",
    description:
      "O design do seu site pode ser a diferença entre atrair ou perder clientes. Garantimos que seu site seja não apenas bonito, mas também fácil de usar e com um layout que faça sentido para seus usuários.",
  },
  {
    title: "Consultoria e Suporte Contínuo",
    description:
      " Não paramos após a entrega do seu site. Oferecemos suporte contínuo e consultoria para garantir que sua presença digital evolua conforme o seu negócio cresce.",
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
    setTimeout(() => setAutoScroll(true), 100); // Retomar após 10s
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
                className="shadow-lg border-4 text-center w-100"
                style={{
                  boxShadow: "0px 4px 10px #4a90e2",
                  borderRadius: "5px 80px",
                }}
              >
                <Card.Body>
                  <Card.Title
                    as="h4"
                    className="fw-bold"
                    style={{ color: "#b0b0b0" }} // Cinza para o título
                  >
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#000" }}>
                    {" "}
                    {/* Descrição preta */}
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Botão "Próximo" centralizado abaixo dos cartões */}
        <div className="text-center mt-3">
          <Button className="btn-custom" onClick={nextSlide}>
            Próximo
          </Button>
        </div>
      </Container>

      {/* Estilos CSS Inline */}
      <style>{`
        .btn-custom {
          background-color: #d3d3d3 !important; /* Cinza claro */
          color: #333 !important; /* Texto preto */
          border: 1px solid #b0b0b0 !important;
          padding: 10px 20px;
          border-radius: 5px 10px;
          transition: background-color 0.3s ease-in-out;
          font-weight: bold;
        }

        .btn-custom:hover {
          background-color: #b0b0b0 !important; /* Cinza mais escuro no hover */
        }
      `}</style>
    </section>
  );
};

export default Services;
