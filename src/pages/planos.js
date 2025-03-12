import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const planosCompletos = [
  {
    nome: "Landing Page",
    preco: "A partir de R$ 497",
    mensal: "R$ 49,90/mês",
    publico: "Para lançamentos de produtos, serviços ou campanhas",
    recursos: [
      "1 Página de alta conversão",
      "Design moderno",
      "Integração com WhatsApp ou formulário",
      "SEO básico",
      "Entrega em até 5 dias",
    ],
  },
  {
    nome: "Página de Captura",
    preco: "A partir de R$ 397",
    mensal: "R$ 49,90/mês",
    publico: "Ideal para captar leads, cursos ou e-books",
    recursos: [
      "Foco em geração de leads",
      "Formulário integrado com e-mail marketing",
      "Botão CTA com redirecionamento",
      "Link para grupo no WhatsApp",
    ],
  },
  {
    nome: "Básico Institucional",
    preco: "A partir de R$ 797",
    mensal: "R$ 59,90/mês",
    descricao: "Ideal para presença digital básica.",
    recursos: [
      "1 Página",
      "Design Responsivo",
      "Integração com WhatsApp",
      "Suporte 7 dias",
    ],
  },
  {
    nome: "Intermediário",
    preco: "A partir de R$ 1097",
    mensal: "R$ 79,90/mês",
    publico: "Pequenas empresas e negócios locais",
    recursos: ["Até 4 páginas", "Integração com WhatsApp", "Suporte 30 dias"],
  },
  {
    nome: "Avançado",
    preco: "A partir de R$ 1.997",
    mensal: "R$ 89,90/mês",
    publico: "Empresas com necessidades robustas",
    recursos: [
      "Site completo",
      "Dashboard e painel administrativo",
      "Suporte 90 dias",
    ],
  },
  {
    nome: "Ecommerce Simples",
    preco: "A partir de R$ 1.197",
    mensal: "R$ 59,90/mês",
    publico: "Comércios que estão começando online",
    recursos: [
      "Catálogo com até 20 produtos",
      "Carrinho básico com envio via WhatsApp",
    ],
  },
  {
    nome: "Loja Virtual Completa",
    preco: "A partir de R$ 5.497",
    mensal: "R$ 129,90/mês",
    publico: "Empresas com grande volume de produtos",
    recursos: [
      "Cadastro de produtos ilimitado",
      "Painel administrativo",
      "Carrinho, checkout",
      "Relatórios e dashboards",
    ],
  },
  {
    nome: "Delivery Basico",
    preco: "A partir de R$ 997",
    mensal: "R$ 59,90/mês",
    publico: "Restaurantes, lanchonetes e entregas",
    recursos: [
      "Cardápio online com categorias",
      "Carrinho com envio por WhatsApp",
      "Controle de pedidos e taxa de entrega",
      "Integração com pagamentos (Pix, cartão) e status do pedido",
    ],
  },
  {
    nome: "Delivery Personalizado",
    preco: "A partir de R$ 1.997",
    mensal: "R$ 89,90/mês",
    publico: "Restaurantes, lanchonetes e entregas",
    recursos: [
      "Cardápio online com categorias",
      "Carrinho com envio por WhatsApp",
      "Controle de pedidos e taxa de entrega",
      "Integração com pagamentos (Pix, cartão) e status do pedido",
    ],
  },
  {
    nome: "Sistema Clínica Individual",
    preco: "A partir de R$ 3.997",
    mensal: "R$ 89,90/mês",
    publico: "Profissionais de saúde",
    recursos: [
      "Agenda de consultas",
      "Prontuário eletrônico",
      "Envio de lembretes por WhatsApp",
      "Controle de pagamentos",
    ],
  },
  {
    nome: "Sistema Clínica Multi-equipe",
    preco: "A partir de R$ 5.997",
    mensal: "R$ 189,90/mês",
    publico: "Clínicas com múltiplos profissionais",
    recursos: [
      "Múltiplos usuários com acesso individual",
      "Gestão de agenda e prontuário",
      "Painel de administração geral",
      "Financeiro completo com relatórios",
    ],
  },
];

const handleWhatsApp = (nome, preco) => {
  const msg = `Olá! Tenho interesse no plano *${nome}* (${preco}). Gostaria de mais informações.`;
  const url = `https://wa.me/5521988359825?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};

const TodosPlanosPage = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center mb-4">Todos os Planos Disponíveis</h2>
        <Row>
          {planosCompletos.map((p, i) => (
            <Col md={6} lg={4} className="mb-4 px-1" key={i}>
              <Card
                className="h-100 text-white shadow-sm border-0"
                style={{ backgroundColor: "#1c1c1c" }}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title as="h4">{p.nome}</Card.Title>
                    <p
                      className="text-info mb-1"
                      style={{ fontSize: "1.25rem" }}
                    >
                      {p.preco}
                    </p>
                    <p
                      className="text-white-50 mb-2"
                      style={{ fontSize: "0.95rem" }}
                    >
                      Mensalidade: {p.mensal}
                    </p>
                    {p.publico && (
                      <p className="text-muted fst-italic">{p.publico}</p>
                    )}
                    <div className="text-start">
                      {p.recursos.map((r, idx) => (
                        <div key={idx}>✅ {r}</div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <Button
                      style={{
                        backgroundColor: "#d3d3d3",
                        color: "#000",
                        border: "none",
                      }}
                      onClick={() => handleWhatsApp(p.nome, p.preco)}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#b0b0b0")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#d3d3d3")
                      }
                    >
                      Solicitar este plano
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TodosPlanosPage;
