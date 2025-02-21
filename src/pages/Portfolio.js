import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";

const projects = [
  {
    title: "Juliana Martins - Terapeuta",
    description:
      "Página profissional e responsiva para um terapeuta, destacando seus serviços, especialização e facilitando o contato com pacientes.",
    img: "assets/projetos/ju_martins.jpeg",
    stacks: ["React.js", "Bootstrap"],
    deploy: "https://jumartins-terapeuta.vercel.app/",
  },
  {
    title: "Inter Film",
    description:
      "Empresa especializada em películas de controle solar (insulfilm) para automóveis e residências.",
    img: "assets/projetos/INTER_FILM.jpeg",
    stacks: ["Next", "Bootstrap"],
    deploy: "https://interfilm.vercel.app/",
  },
  {
    title: "Velas Alecrim",
    description:
      "E-commerce moderno e responsivo, onde clientes podem navegar, adicionar itens ao carrinho e finalizar a compra com envio direto do pedido para o WhatsApp.",
    img: "assets/projetos/velas_alecrim.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://velas-alecrim.vercel.app/",
  },
  {
    title: "Pagina Advogados",
    description:
      "Modelo de site profissional para advogados, moderno, responsivo e intuitivo. Destaque seus serviços e fortaleça sua presença online!",
    img: "assets/projetos/advogado.png",
    stacks: ["Vite", "React", "Tailwind"],
    deploy: "https://advogados-delta.vercel.app/",
  },
  {
    title: "Cartão Digital",
    description: "Cartão digital moderno, dinâmico e totalmente personalizado.",
    img: "assets/projetos/cartao_digital.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://cartaodefansolucoesdigitais.vercel.app/",
  },
  {
    title: "Pagina Psicologo",
    description:
      "Modelo de site profissional para Psicólogos, moderno, responsivo e intuitivo.",
    img: "assets/projetos/psicologo.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://psicologo-seven.vercel.app/",
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
    title: "Ebook Bras",
    description: "Pagina para venda de ebook",
    img: "assets/projetos/ebookbras.jpeg",
    stacks: ["React", "Bootstrapt"],
    deploy: "https://ebookbras.vercel.app/",
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
    title: "Cafeteria",
    description:
      "Página moderna e responsiva para destacar o ambiente, cardápio e serviços, proporcionando uma experiência intuitiva e facilitando o contato com clientes.",
    img: "assets/projetos/cafeteria.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://taisadefante.github.io/cafeteria/",
  },
];

function Portfolio() {
  const getInitialVisibleProjects = () => (window.innerWidth > 768 ? 3 : 1);
  const [visibleProjects, setVisibleProjects] = useState(
    getInitialVisibleProjects()
  );

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

  // Estado para controlar a expansão das imagens
  const [expandedImage, setExpandedImage] = useState(null);

  const toggleExpandImage = (index) => {
    setExpandedImage(expandedImage === index ? null : index);
  };

  return (
    <section id="portfolio" style={{ padding: "40px 0" }}>
      <Container>
        <h2 className="text-center mb-4">Portfólios</h2>
        <p>
          Bem-vindo ao meu portfólio! Aqui você encontrará uma seleção dos meus
          projetos e trabalhos, refletindo minha paixão e dedicação em cada
          detalhe. Cada peça foi pensada para atender às necessidades do
          cliente, com foco na qualidade e inovação. Sinta-se à vontade para
          explorar e conhecer melhor o meu trabalho!
        </p>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Projetos desenvolvidos por Defan Soluções Digitais
        </p>
        <div className="row">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="col-12 col-md-4 d-flex mb-4">
              <div className="portfolio-card d-flex flex-column w-100">
                {/* Contêiner da imagem que alterna entre mostrar o topo e expandir */}
                <div
                  className="image-container"
                  style={{
                    width: "100%",
                    height: expandedImage === index ? "auto" : "200px",
                    overflow: "hidden",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "height 0.4s ease-in-out",
                  }}
                  onClick={() => toggleExpandImage(index)}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: expandedImage === index ? "auto" : "100%",
                      objectFit: "cover",
                      objectPosition:
                        expandedImage === index ? "center" : "top",
                      transition: "object-position 0.4s ease-in-out",
                    }}
                  />
                </div>
                <div className="portfolio-content flex-grow-1 d-flex flex-column p-3">
                  <h3>{project.title}</h3>
                  {/* Descrição com cor preta */}
                  <p className="text-dark" style={{ color: "black" }}>
                    {project.description}
                  </p>
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
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
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
          background-color: #d3d3d3 !important; /* Cinza claro */
          color: #333 !important; /* Texto preto */
          border: 1px solid #b0b0b0 !important;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s ease-in-out;
          text-decoration: none;
          font-weight: bold;
        }

        .btn-custom:hover {
          background-color: #b0b0b0 !important; /* Cinza mais escuro no hover */
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
