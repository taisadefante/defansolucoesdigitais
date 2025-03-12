import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLink } from "react-icons/fa";
import { projects } from "../pages/Portfolio"; // Certifique-se de exportar o array lá

const DestaqueSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % projects.length);
    }, 300000); // 5 minutos

    return () => clearInterval(interval);
  }, []);

  const visible = projects.slice(startIndex, startIndex + 3);
  const destaque =
    visible.length < 3
      ? [...visible, ...projects.slice(0, 3 - visible.length)]
      : visible;

  return (
    <section
      id="destaques"
      className="py-5"
      style={{ backgroundColor: "#000" }}
    >
      <Container>
        <h2 className="text-center mb-4">Projetos em Destaque</h2>
        <Row className="justify-content-center">
          {destaque.map((project, index) => (
            <Col key={index} xs={12} md={4} className="mb-4 d-flex">
              <div className="portfolio-card d-flex flex-column w-100">
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
                      objectPosition: "top",
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
            </Col>
          ))}
        </Row>
      </Container>

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
          .portfolio-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default DestaqueSection;
