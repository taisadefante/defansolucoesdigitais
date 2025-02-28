import React, { useState, useEffect } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { FaLink, FaFilter } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";

const projects = [
  {
    id: "Psicologa/Terapeuta",
    title: "Juliana Martins - Terapeuta",
    description:
      " Página profissional e responsiva para um terapeuta, destacando seus serviços, especialização e facilitando o contato com pacientes, com um design moderno e intuitivo para uma experiência fluida em todos os dispositivos.",
    img: "assets/projetos/ju_martins.jpeg",
    stacks: ["React.js", "Bootstrap"],
    repo: "",
    deploy: "https://jumartins-terapeuta.vercel.app/",
  },
  {
    id: "Auto",
    title: "Concessionaria",
    description:
      " Plataforma de e-commerce especializada, focada na exibição, gestão e negociação de veículos. com login do administrador para adicionar, excluir e editar o estoque de veiculos.",
    img: "assets/projetos/concessionaria.jpeg",
    stacks: ["React.js", "Bootstrap", "Node"],
    repo: "",
    deploy: "https://concessionariadefan.vercel.app/",
  },
  {
    title: "Arquiteto",
    description:
      " Criamos um site moderno e responsivo para destacar projetos arquitetônicos com um design sofisticado e intuitivo.",
    img: "assets/projetos/arquiteto.jpeg",
    stacks: ["React.js", "Bootstrap"],
    repo: "",
    deploy: "https://arquiteto-beta.vercel.app/",
  },
  {
    id: "Institucional",
    title: "Emprestimos",
    description:
      " Projeto foi desenvolvido como modelo para uma empresa de empréstimos pessoais com o objetivo de criar uma plataforma intuitiva, moderna e responsiva, garantindo uma experiência fluida para os usuários que desejam solicitar crédito de forma simples e segura.",
    img: "assets//projetos/emprestimo.jpeg",
    stacks: ["React.js", "Bootstrap"],
    repo: "",
    deploy: "https://emprestimos-chi.vercel.app/",
  },
  {
    id: "Nutricionista",
    title: "Nutricionista",
    description:
      " Modelo Projeto  Nutricionista, uma plataforma moderna e responsiva para profissionais de nutrição gerenciarem seus atendimentos, cardápios personalizados e interagirem com pacientes de forma prática e eficiente.",
    img: "assets//projetos/nutricionista.jpeg",
    stacks: ["React.js", "Bootstrap"],
    repo: "",
    deploy: "https://nutricionista-ashen.vercel.app/",
  },
  {
    id: "Auto",
    title: "Inter Film",
    description:
      "Empresa especializada em películas de controle solar (insulfilm) para automóveis e residências.",
    img: "assets//projetos/INTER_FILM.jpeg",
    stacks: ["Next", "Bootstrap"],
    deploy: "https://interfilm.vercel.app/",
  },
  {
    id: "E-Commerce",
    title: "Velas Alecrim",
    description:
      "E-commerce moderno e responsivo, onde clientes podem navegar, adicionar itens ao carrinho e finalizar a compra com envio direto do pedido para o WhatsApp, garantindo uma experiência rápida e intuitiva.",
    img: "assets//projetos/velas_alecrim.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    repo: "",
    deploy: "https://velas-alecrim.vercel.app/",
  },
  {
    id: "Advogacia",
    title: "Pagina Advogados",
    description:
      "Modelo de site profissional para advogados, moderno, responsivo e intuitivo. Destaque seus serviços e fortaleça sua presença online!",
    img: "assets//projetos/advogado.png",
    stacks: ["Vite", "React", "Tailwind"],
    deploy: "https://advogados-delta.vercel.app/",
  },
  {
    id: "Contrutora",
    title: "Fonseca Reformas",
    description:
      "Página profissional e responsiva para uma empresa de engenharia civil, destacando serviços, portfólio e facilitando o contato, com design moderno e navegação intuitiva.",
    img: "assets//projetos/fonseca_reformas.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    repo: "",
    deploy: "https://fonseca-reformas.vercel.app/",
  },

  {
    id: "Institucional",
    title: "E-Diarista",
    description:
      "Página moderna e responsiva para facilitar a contratação de diaristas, conectando clientes a profissionais qualificados com praticidade e segurança.",
    img: "assets//projetos/e-diarista.png",
    stacks: ["HTML", "CSS", "JS"],
    repo: "",
    deploy: "https://taisadefante.github.io/pages_diaristas/",
  },
  {
    id: "Institucional",
    title: "Defan Tecnologia",
    description:
      "Página moderna e responsiva para destacar serviços, soluções inovadoras e facilitar o contato com clientes, transmitindo credibilidade e modernidade.",
    img: "assets//projetos/defan_tecnologia.png",
    stacks: ["HTML", "CSS", "JS"],
    repo: "",
    deploy: "https://taisadefante.github.io/web_empresa_ti/",
  },
  {
    id: "Turismo",
    title: "M&A Turismo",
    description: "",
    img: "assets//projetos/meaturismo.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/web_m-a_turismo/index.html",
  },

  {
    id: "Ebook",
    title: "Ebook Bras",
    description: "Pagina para venda de ebook",
    img: "assets//projetos/ebookbras.jpeg",
    stacks: ["React", "Bootstrapt"],
    deploy: "https://ebookbras.vercel.app/",
  },
  {
    id: "Psicologa/Terapeuta",
    title: "Pagina Psicologo",
    description:
      "Modelo de site profissional para Psicólogos, moderno, responsivo e intuitivo.",
    img: "assets//projetos/psicologo.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://psicologo-seven.vercel.app/",
  },
  {
    id: "Cartão Digital",
    title: "Cartão Contato",
    description: "",
    img: "assets/projetos/cartão_contato.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    repo: "",
    deploy: "https://taisadefante.github.io/Cartao_Contato_Tais/",
  },

  {
    id: "Restaurantes",
    title: "Cafeteria",
    description:
      "Página moderna e responsiva para destacar o ambiente, cardápio e serviços, proporcionando uma experiência intuitiva e facilitando o contato com clientes.",
    img: "assets//projetos/cafeteria.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    repo: "",
    deploy: "https://taisadefante.github.io/cafeteria/",
  },
];

function Portfolio() {
  const getInitialVisibleProjects = () => (window.innerWidth > 768 ? 3 : 1);
  const [visibleProjects, setVisibleProjects] = useState(
    getInitialVisibleProjects()
  );
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisibleProjects((prev) =>
          Math.min(prev + (window.innerWidth > 768 ? 3 : 1), projects.length)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects.slice(0, visibleProjects)
      : projects.filter((project) => project.id === selectedCategory);

  return (
    <section id="portfolio" style={{ padding: "40px 0" }}>
      <Container>
        <h2 className="text-center mb-4">Portfólios</h2>
        <p style={{ textAlign: "justify", textIndent: "25px" }}>
          Bem-vindo ao meu portfólio! Aqui você encontrará uma seleção dos meus
          projetos e trabalhos, refletindo minha paixão e dedicação em cada
          detalhe. Cada peça foi pensada para atender às necessidades do
          cliente, com foco na qualidade e inovação. Sinta-se à vontade para
          explorar e conhecer melhor o meu trabalho!
        </p>

        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Projetos desenvolvidos por Defan Soluções Digitais
        </p>
        {/* Botão de Filtro na Esquerda */}
        <div className="mb-4 d-flex">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <FaFilter className="me-2" /> Filtrar Projetos
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedCategory("ALL")}>
                Todos
              </Dropdown.Item>
              {[...new Set(projects.map((p) => p.id))]
                .filter((id) => id)
                .map((id, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => setSelectedCategory(id)}
                  >
                    {id}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-12 col-md-4 d-flex mb-4">
              <div className="portfolio-card d-flex flex-column w-100">
                {/* Contêiner da imagem */}
                <div
                  className="image-container"
                  style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top", // Adicionado para garantir que a parte superior da imagem apareça primeiro
                    }}
                  />
                </div>
                <div className="portfolio-content flex-grow-1 d-flex flex-column p-3">
                  <h3>{project.title}</h3>
                  <p className="text-dark">{project.description}</p>
                  <div className="tech-stacks mb-3">
                    {project.stacks.map((stack, i) => (
                      <span key={i} className="badge bg-secondary me-1">
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div className="portfolio-btn mt-auto">
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-custom d-flex align-items-center justify-content-center"
                    >
                      <FaLink className="me-2" /> Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Estilos CSS Inline */}
      <style>{`
        .portfolio-card {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 8px;
          box-shadow: 5px 5px 10px 5px rgba(192, 189, 189, 0.85);
          transition: all 0.3s ease-in-out;
          overflow: hidden;
        }

        .portfolio-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .portfolio-btn a {
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .btn-custom {
          background-color: #d3d3d3 !important;
          color: #333 !important;
          border: 1px solid #b0b0b0 !important;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s ease-in-out;
          text-decoration: none;
          font-weight: bold;
        }

        .btn-custom:hover {
          background-color: #b0b0b0 !important;
        }

        @media (max-width: 768px) {
          .row {
            flex-direction: column;
            align-items: center;
          }

          .portfolio-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
