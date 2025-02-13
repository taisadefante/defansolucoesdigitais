import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "rgb(80, 80, 167)" }}>
      <Container>
        <Navbar.Brand href="/">
          <img src="/assets/defan.png" width={100} height={40} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              style={{ color: "white" }}
              className="custom-nav-link"
            >
              Sobre
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              style={{ color: "white" }}
              className="custom-nav-link"
            >
              Portfólio
            </Nav.Link>
            <Nav.Link
              href="#services"
              style={{ color: "white" }}
              className="custom-nav-link"
            >
              Serviços
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{ color: "white" }}
              className="custom-nav-link"
            >
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* Estilos em CSS dentro do componente */}
      <style>
        {`
          .custom-nav-link {
            color: white !important;
            transition: color 0.3s ease;
          }

          .custom-nav-link:hover {
            color: #00aaff !important; /* Azul no hover */
          }
        `}
      </style>
    </Navbar>
  );
};

export default Header;
