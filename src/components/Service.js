import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

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
      "Se o seu problema é vender online, desenvolvemos lojas virtuais funcionais e seguras, com todas as ferramentas necessárias para um bom desempenho comercial.",
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
      "Sites lentos frustram usuários e prejudicam sua visibilidade online. Ajudamos a otimizar o desempenho para que seu site carregue rapidamente.",
  },
  {
    title: "SEO (Otimização para Motores de Busca)",
    description:
      "Se o seu site não aparece nas pesquisas do Google, ele não está atingindo seu público-alvo. Trabalhamos com técnicas de SEO para aumentar sua visibilidade.",
  },
  {
    title: "Design Intuitivo e Atraente",
    description:
      "O design do seu site pode ser a diferença entre atrair ou perder clientes. Garantimos que seu site seja bonito e fácil de navegar.",
  },
  {
    title: "Consultoria e Suporte Contínuo",
    description:
      "Não paramos após a entrega do seu site. Oferecemos suporte contínuo e consultoria para garantir que sua presença digital evolua.",
  },
  // Novos serviços
  {
    title: "Consultoria de Presença Digital",
    description:
      "Avaliação e plano estratégico para melhorar sua presença online.",
  },
  {
    title: "Progressive Web Apps (PWA)",
    description:
      "Apps leves, rápidos e instaláveis direto no navegador, com experiência similar à de um app nativo.",
  },
  {
    title: "Sistemas Web Personalizados",
    description:
      "Portais, CRMs, ERPs e soluções sob medida para atender às necessidades específicas do seu negócio.",
  },
  {
    title: "Aplicativos Mobile com React Native",
    description:
      "Desenvolvimento de aplicativos para Android e iOS com tecnologia híbrida e excelente performance.",
  },
  {
    title: "Auditoria de Velocidade e SEO",
    description:
      "Identificamos gargalos de carregamento e pontos de melhoria para seu site ranquear melhor.",
  },
  {
    title: "Adequação à LGPD",
    description:
      "Implementação de políticas, avisos de cookies e práticas seguras de tratamento de dados.",
  },
  {
    title: "Notificações por WhatsApp",
    description:
      "Integração para envio automático de mensagens com status de pedidos, lembretes e atualizações.",
  },
  {
    title: "Formulários Inteligentes",
    description:
      "Formulários com lógica condicional, validação inteligente e integração com e-mail ou APIs.",
  },
  {
    title: "Integração com Pagamentos",
    description:
      "Integrações completas com Pix, Mercado Pago, Stripe, PagSeguro, PayPal e muito mais.",
  },
  {
    title: "Criação de Landing Page para Produto",
    description:
      "Landing pages otimizadas para conversão e campanhas de lançamento de produtos ou serviços.",
  },
  {
    title: "Hospedagem gerenciada + Suporte técnico",
    description:
      "Hospedagem de alta performance com monitoramento, backup e suporte técnico mensal incluso.",
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        }),
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => cardsRef.current.forEach((el) => el && observer.unobserve(el));
  }, []);

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
          Oferecemos soluções digitais completas, estratégicas e sob medida para
          transformar o seu negócio.
        </p>
        <Row className="gy-4">
          {services.map((service, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <Card
                className="h-100 service-card shadow-sm fade-up"
                ref={(el) => (cardsRef.current[index] = el)}
              >
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

      {/* Estilos personalizados */}
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

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Services;
