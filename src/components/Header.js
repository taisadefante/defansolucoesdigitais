import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/assets/defan.png" width={100} height={40} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="mx-auto">
            {/* SOBRE */}
            <Nav.Link
              onClick={() =>
                location.pathname === "/"
                  ? scrollToSection("about")
                  : (window.location.href = `/#about`)
              }
              className="nav-hover"
            >
              Sobre
            </Nav.Link>

            {/* SERVIÇOS */}
            <Nav.Link
              onClick={() =>
                location.pathname === "/"
                  ? scrollToSection("services")
                  : (window.location.href = `/#services`)
              }
              className="nav-hover"
            >
              Serviços
            </Nav.Link>

            {/* PLANOS (entre Serviços e FAQ) */}
            <Nav.Link as={Link} to="/planos" className="nav-hover">
              Planos
            </Nav.Link>

            {/* FAQ */}
            <Nav.Link
              onClick={() =>
                location.pathname === "/"
                  ? scrollToSection("faq")
                  : (window.location.href = `/#faq`)
              }
              className="nav-hover"
            >
              FAQ
            </Nav.Link>

            {/* CONTATO */}
            <Nav.Link
              onClick={() =>
                location.pathname === "/"
                  ? scrollToSection("contact")
                  : (window.location.href = `/#contact`)
              }
              className="nav-hover"
            >
              Contato
            </Nav.Link>

            {/* PORTFÓLIO */}
            <Nav.Link as={Link} to="/portfolio" className="nav-hover">
              Portfólio
            </Nav.Link>
          </Nav>

          {/* REDES SOCIAIS */}
          <div className="d-flex align-items-center">
            <a
              href="https://www.instagram.com/defan_solucoes_digitais"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572546557616"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 social-icon"
            >
              <FaFacebook />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>

      <style>
        {`
          .social-icon {
            color: white;
            font-size: 1.5rem;
            transition: color 0.3s ease-in-out;
          }

          .social-icon:hover {
            color: rgb(99, 98, 97) !important;
          }

          .nav-hover {
            transition: color 0.3s ease-in-out;
          }

          .nav-hover:hover {
            color: rgb(209, 207, 207) !important;
          }
        `}
      </style>
    </Navbar>
  );
};

export default Header;
