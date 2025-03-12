import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../pages/Portfolio"; // Certifique-se que está exportando corretamente

const DestaqueSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

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
                <div className="portfolio-content flex-grow-1 d-flex flex-column p-3">
                  <h5 className="mb-1">{project.title}</h5>
                  <small className="text-muted mb-2">{project.id}</small>
                  <div className="text-end mt-auto">
                    <Button
                      variant="light"
                      className="btn-detail"
                      onClick={() => setSelectedProject(project)}
                    >
                      Detalhes <FaArrowRight className="ms-2" />
                    </Button>
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
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-5px);
        }

        .portfolio-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .btn-detail {
          font-weight: bold;
          border-radius: 5px;
          background-color: #d3d3d3;
          border: 1px solid #aaa;
          color: #000;
          transition: 0.3s ease-in-out;
        }

        .btn-detail:hover {
          background-color: #b0b0b0;
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
