import React, { useState, useEffect } from "react";
import { Container, Dropdown, Modal, Button } from "react-bootstrap";
import { FaFilter, FaArrowRight } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";

export const projects = [
  {
    id: "Psicologa/Terapeuta",
    title: "Juliana Martins - Terapeuta",
    description:
      "Página profissional e responsiva para um terapeuta, destacando seus serviços, especialização e facilitando o contato com pacientes.",
    img: "assets/projetos/ju_martins.jpeg",
    stacks: ["React.js", "Bootstrap"],
    deploy: "https://jumartins-terapeuta.vercel.app/",
    price: "R$ 1.200,00",
    monthly: "R$ 79,90",
    deadline: "7 dias úteis",
  },
  {
    id: "Auto",
    title: "Concessionaria",
    description:
      "Plataforma de e-commerce especializada na exibição e gestão de veículos, com painel do administrador.",
    img: "assets/projetos/concessionaria.jpeg",
    stacks: ["React.js", "Bootstrap", "Node"],
    deploy: "https://concessionariadefan.vercel.app/",
    price: "R$ 2.500,00",
    monthly: "R$ 139,90",
    deadline: "15 dias úteis",
  },
  {
    id: "Arquiteto",
    title: "Arquiteto",
    description:
      "Site moderno e responsivo para apresentação de projetos arquitetônicos com portfólio visual.",
    img: "assets/projetos/arquiteto.jpeg",
    stacks: ["React.js", "Bootstrap"],
    deploy: "https://arquiteto-defan-gilt.vercel.app/",
    price: "R$ 1.800,00",
    monthly: "R$ 99,90",
    deadline: "10 dias úteis",
  },
  {
    id: "Clinica",
    title: "Clinica",
    description:
      "Site institucional para clínicas, com foco em agilidade de acesso a informações e equipe médica.",
    img: "assets/projetos/clinica.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/Clinica/",
    price: "R$ 1.300,00",
    monthly: "R$ 89,90",
    deadline: "7 dias úteis",
  },
  {
    id: "Academia",
    title: "Academia",
    description:
      "Site funcional e informativo para academias, com apresentação de planos e horários.",
    img: "assets/projetos/academia.jpeg",
    stacks: ["HTML", "Bootstrap", "JavaScript"],
    deploy: "https://academia-swart.vercel.app/",
    price: "R$ 1.400,00",
    monthly: "R$ 89,90",
    deadline: "7 dias úteis",
  },
  {
    id: "Institucional",
    title: "Emprestimos",
    description:
      "Site moderno e confiável para empresas de crédito, com formulário para simulação.",
    img: "assets/projetos/emprestimo.jpeg",
    stacks: ["React.js", "Bootstrap"],
    deploy: "https://emprestimos-chi.vercel.app/",
    price: "R$ 1.600,00",
    monthly: "R$ 99,90",
    deadline: "10 dias úteis",
  },
  {
    id: "Nutricionista",
    title: "Nutricionista",
    description:
      "Sistema completo para nutricionistas gerenciarem cardápios e acompanhamentos com pacientes.",
    img: "assets/projetos/nutricionista.jpeg",
    stacks: ["React.js", "Bootstrap"],
    deploy: "https://nutricionista-ashen.vercel.app/",
    price: "R$ 1.800,00",
    monthly: "R$ 109,90",
    deadline: "10 dias úteis",
  },
  {
    id: "Auto",
    title: "Inter Film",
    description:
      "Landing page de alta conversão para empresa de insulfilm automotivo e residencial.",
    img: "assets/projetos/INTER_FILM.jpeg",
    stacks: ["Next", "Bootstrap"],
    deploy: "https://interfilm.vercel.app/",
    price: "R$ 990,00",
    monthly: "R$ 69,90",
    deadline: "5 dias úteis",
  },
  {
    id: "E-Commerce",
    title: "Velas Alecrim",
    description:
      "Loja virtual com carrinho, finalização por WhatsApp e visual clean e moderno.",
    img: "assets/projetos/velas_alecrim.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://velas-alecrim.vercel.app/",
    price: "R$ 1.600,00",
    monthly: "R$ 99,90",
    deadline: "10 dias úteis",
  },
  {
    id: "Advogacia",
    title: "Página Advogados",
    description:
      "Modelo moderno e direto para advogados apresentarem serviços e contato.",
    img: "assets/projetos/advogado.png",
    stacks: ["Vite", "React", "Tailwind"],
    deploy: "https://advogados-delta.vercel.app/",
    price: "R$ 1.300,00",
    monthly: "R$ 89,90",
    deadline: "7 dias úteis",
  },
  {
    id: "Contrutora",
    title: "Fonseca Reformas",
    description:
      "Site para empresas de engenharia ou reforma, com portfólio visual e contato direto.",
    img: "assets/projetos/fonseca_reformas.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://fonseca-reformas.vercel.app/",
    price: "R$ 1.300,00",
    monthly: "R$ 89,90",
    deadline: "7 dias úteis",
  },
  {
    id: "Institucional",
    title: "E-Diarista",
    description:
      "Página moderna para conectar diaristas com clientes de forma prática.",
    img: "assets/projetos/e-diarista.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/pages_diaristas/",
    price: "R$ 1.100,00",
    monthly: "R$ 79,90",
    deadline: "5 dias úteis",
  },
  {
    id: "Institucional",
    title: "Defan Tecnologia",
    description:
      "Site institucional para destacar soluções de tecnologia e portfólio.",
    img: "assets/projetos/defan_tecnologia.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/web_empresa_ti/",
    price: "R$ 1.400,00",
    monthly: "R$ 99,90",
    deadline: "7 dias úteis",
  },
  {
    id: "Turismo",
    title: "M&A Turismo",
    description:
      "Apresentação visual de pacotes turísticos e atendimento personalizado.",
    img: "assets/projetos/meaturismo.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/web_m-a_turismo/index.html",
    price: "R$ 1.500,00",
    monthly: "R$ 89,90",
    deadline: "7 dias úteis",
  },
  {
    id: "Ebook",
    title: "Ebook Bras",
    description:
      "Landing page profissional para venda de eBook, com botão direto para pagamento.",
    img: "assets/projetos/ebookbras.jpeg",
    stacks: ["React", "Bootstrap"],
    deploy: "https://ebookbras.vercel.app/",
    price: "R$ 950,00",
    monthly: "R$ 59,90",
    deadline: "5 dias úteis",
  },
  {
    id: "Psicologa/Terapeuta",
    title: "Página Psicólogo",
    description:
      "Site institucional para psicólogos apresentarem serviços e agendamentos.",
    img: "assets/projetos/psicologo.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://psicologo-seven.vercel.app/",
    price: "R$ 1.200,00",
    monthly: "R$ 79,90",
    deadline: "7 dias úteis",
  },
  {
    id: "Cartão Digital",
    title: "Cartão Contato",
    description:
      "Cartão digital moderno e prático com links de contato e redes sociais.",
    img: "assets/projetos/cartão_contato.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/Cartao_Contato_Tais/",
    price: "R$ 600,00",
    monthly: "R$ 39,90",
    deadline: "3 dias úteis",
  },
  {
    id: "Restaurantes",
    title: "Cafeteria",
    description:
      "Site para cafeterias ou bistrôs, com cardápio, fotos e formulário de contato.",
    img: "assets/projetos/cafeteria.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/cafeteria/",
    price: "R$ 1.200,00",
    monthly: "R$ 79,90",
    deadline: "7 dias úteis",
  },
];

function Portfolio() {
  const getInitialVisibleProjects = () => (window.innerWidth > 768 ? 3 : 1);
  const [visibleProjects, setVisibleProjects] = useState(
    getInitialVisibleProjects()
  );
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

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

        {/* Filtro */}
        <div className="mb-4 d-flex">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <FaFilter className="me-2" /> Filtrar Projetos
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedCategory("ALL")}>
                Todos
              </Dropdown.Item>
              {[...new Set(projects.map((p) => p.id))].map((id, index) => (
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

        {/* Cards */}
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-12 col-md-4 d-flex mb-4">
              <div className="portfolio-card d-flex flex-column w-100">
                <div
                  className="image-container"
                  style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
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
                      objectPosition: "top",
                    }}
                  />
                </div>
                <div className="portfolio-content p-3 flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="mb-1">{project.title}</h5>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#666",
                        marginBottom: "10px",
                      }}
                    >
                      {project.id}
                    </p>
                  </div>
                  <div className="text-end mt-auto">
                    <Button
                      variant="light"
                      className="btn-custom"
                      onClick={() => setSelectedProject(project)}
                    >
                      Detalhes <FaArrowRight className="ms-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <Modal
            show={!!selectedProject}
            onHide={() => setSelectedProject(null)}
            centered
            size="lg"
          >
            <Modal.Header
              closeButton
              closeVariant="white"
              style={{ backgroundColor: "#2c2c2c", color: "#fff" }}
            >
              <div className="w-100">
                <h5 className="mb-0">{selectedProject.title}</h5>
                <small style={{ fontSize: "0.8rem", color: "#ccc" }}>
                  {selectedProject.id}
                </small>
              </div>
            </Modal.Header>

            <Modal.Body
              style={{ backgroundColor: "#2c2c2c", color: "#fff" }}
              className="p-4"
            >
              <div className="row">
                <div className="col-md-5 mb-3">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="img-fluid rounded shadow"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "250px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>

                <div className="col-md-7">
                  <p>
                    <strong>Descrição:</strong>
                    <br />
                    {selectedProject.description}
                  </p>
                  <p>
                    <strong>Tecnologias:</strong>{" "}
                    {selectedProject.stacks?.join(", ")}
                  </p>
                  <p>
                    <strong>Valor do Projeto:</strong>{" "}
                    {selectedProject.price || "R$ 1.500,00"}
                  </p>
                  <p>
                    <strong>Plano Mensal:</strong>{" "}
                    {selectedProject.monthly || "R$ 89,90/mês"}
                  </p>
                  <p>
                    <strong>Prazo de Entrega:</strong>{" "}
                    {selectedProject.deadline || "10 dias úteis"}
                  </p>
                </div>
              </div>

              <div className="text-center mt-4">
                <Button
                  href={selectedProject.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#d3d3d3",
                    color: "#000",
                    border: "none",
                    fontWeight: "bold",
                    padding: "10px 25px",
                    borderRadius: "5px",
                  }}
                >
                  Ver Projeto Online
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </Container>

      {/* CSS Inline */}
      <style>{`
        .portfolio-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
        }

        .btn-custom {
          background-color: #d3d3d3 !important;
          color: #333 !important;
          font-weight: bold;
          border: 1px solid #b0b0b0 !important;
          transition: background-color 0.3s ease;
        }

        .btn-custom:hover {
          background-color: #b0b0b0 !important;
        }

        @media (max-width: 768px) {
          .portfolio-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
