import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";

const projects = [
  {
    title: "Juliana Martins - Terapeuta",
    description:
      "Página profissional e responsiva para um terapeuta, destacando seus serviços, especialização e facilitando o contato com pacientes.",
    img: "assets/projetos/julianamartins_terapeuta.png",
    stacks: ["React.js", "Bootstrap"],
    deploy: "https://jumartins-terapeuta.vercel.app/",
  },
  {
    title: "Velas Alecrim",
    description:
      "E-commerce moderno e responsivo, onde clientes podem navegar, adicionar itens ao carrinho e finalizar a compra com envio direto do pedido para o WhatsApp.",
    img: "assets/projetos/velas-alecrim.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://velas-alecrim.vercel.app/",
  },
  {
    title: "Pagina Advogados",
    description:
      "Site profissional para advogados, moderno, responsivo e intuitivo. Destaque seus serviços e fortaleça sua presença online!",
    img: "assets/projetos/advogados.png",
    stacks: ["Vite", "React", "tailwind"],
    deploy: "https://advogados-delta.vercel.app/",
  },
  {
    title: "Fonseca Reformas",
    description:
      "Página profissional para uma empresa de engenharia civil, destacando serviços, portfólio e facilitando o contato.",
    img: "assets/projetos/fonseca_reformas.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://fonseca-reformas.vercel.app/",
  },
  {
    title: "E-Diarista",
    description:
      "Página moderna e responsiva para facilitar a contratação de diaristas, conectando clientes a profissionais qualificados com praticidade e segurança.",
    img: "assets/projetos/e-diarista.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/pages_diaristas/",
  },
  {
    title: "Defan Tecnologia",
    description:
      "Página moderna e responsiva para destacar serviços, soluções inovadoras e facilitar o contato com clientes, transmitindo credibilidade e modernidade.",
    img: "assets/projetos/defan_tecnologia.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/web_empresa_ti/",
  },
  {
    title: "Cafeteria",
    description:
      "Página moderna e responsiva para destacar o ambiente, cardápio e serviços, proporcionando uma experiência intuitiva e facilitando o contato com clientes.",
    img: "assets/projetos/cafeteria.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/cafeteria/",
  },
];

function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="portfolio" style={{ padding: "40px 0" }}>
      <Container>
        <h2 className="text-center mb-4">Projetos</h2>

        <div className="row">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex">
              <div className="portfolio-card d-flex flex-column">
                <div className="portfolio-img-container">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="portfolio-content flex-grow-1 d-flex flex-column">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="tech-stacks mb-3">
                    {project.stacks.map((stack, i) => (
                      <span key={i}>{stack}</span>
                    ))}
                  </div>
                  <div className="portfolio-btn mt-auto">
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-4">
            <Button variant="primary" onClick={loadMore}>
              <i
                className="bi bi-arrow-down me-2"
                style={{ color: "white" }}
              ></i>
              <span style={{ color: "white" }}>Mais</span>
            </Button>
          </div>
        )}
      </Container>

      <style>{`
        .portfolio-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: white;
          border-radius: 8px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          padding: 15px;
          text-align: center;
          transition: all 0.3s ease-in-out;
        }

        .portfolio-img-container {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f3f3;
        }

        .portfolio-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .portfolio-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

         .tech-stacks span {
          padding: 4px 8px;
          font-size: 12px;
          border: 1px solid #ccc;
          border-radius: 15px 4px;
          color: #333;
          margin: 2px;
          
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
