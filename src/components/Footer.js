import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5" style={{ backgroundColor: "#000" }}>
      <Container>
        <Row className="mb-4 text-center text-md-start">
          <Col md={4} className="mb-4">
            <h5 className="fw-bold" style={{ color: "#b0b0b0" }}>
              Defan Soluções Digitais
            </h5>
            <p style={{ color: "#b0b0b0" }}>
              Criamos soluções modernas, profissionais e eficazes para alavancar
              sua presença digital.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 style={{ color: "#b0b0b0" }}>Navegação</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#inicio"
                  className="text-decoration-none"
                  style={{ color: "#b0b0b0" }}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-decoration-none"
                  style={{ color: "#b0b0b0" }}
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-decoration-none"
                  style={{ color: "#b0b0b0" }}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-decoration-none"
                  style={{ color: "#b0b0b0" }}
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-decoration-none"
                  style={{ color: "#b0b0b0" }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 style={{ color: "#b0b0b0" }}>Contato</h5>
            <p style={{ color: "#b0b0b0" }}>WhatsApp: (21) 98835-9825</p>
            <p style={{ color: "#b0b0b0" }}>Email: taisadefante@hotmail.com</p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a
                href="https://www.instagram.com/defan_solucoes_digitais/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b0b0b0", fontSize: "1.5rem" }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572546557616"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b0b0b0", fontSize: "1.5rem" }}
              >
                <FaFacebook />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <small style={{ color: "#b0b0b0" }}>
              © {new Date().getFullYear()} Todos os direitos reservados.
              Desenvolvedora:{" "}
              <strong style={{ color: "#b0b0b0" }}>Taís Defante</strong>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
