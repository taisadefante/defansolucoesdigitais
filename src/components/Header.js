import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="/assets/defan.png" width={100} height={40} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="mx-auto">
            <Nav.Link href="#about" className="nav-hover">
              Sobre
            </Nav.Link>
            <Nav.Link href="#services" className="nav-hover">
              Serviços
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav-hover">
              Projetos
            </Nav.Link>
            <Nav.Link href="#faq" className="nav-hover">
              FAQ
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-hover">
              Contato
            </Nav.Link>
          </Nav>
          {/* Ícones das redes sociais */}
          <div className="d-flex align-items-center">
            <a
              href="https://www.linkedin.com/in/taisadefante/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover mx-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/defan_tecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover mx-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572546557616"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover mx-2"
            >
              <FaFacebook />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>

      {/* Estilos de Hover */}
      <style>
        {`
          .nav-hover {
            color: #d3d3d3 !important; /* Branco claro */
            font-size: 18px;
            transition: color 0.3s ease;
          }
          
          .nav-hover:hover {
            color: #ffffff !important; /* Branco forte no hover */
            font-weight: bold;
          }

          .social-hover {
            color: #d3d3d3 !important; /* Branco claro */
            font-size: 20px;
            transition: color 0.3s ease, font-size 0.3s ease;
          }

          .social-hover:hover {
            color: #ffffff !important; /* Branco forte no hover */
            font-size: 24px; /* Aumenta um pouco no hover */
          }
        `}
      </style>
    </Navbar>
  );
};

export default Header;
