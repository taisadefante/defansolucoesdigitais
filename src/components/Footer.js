import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="bg-dark text-light text-center py-3"
      style={{
        width: "100%",
        marginTop: "10px",
      }}
    >
      <Container>
        <p
          style={{
            margin: "1px 0",
            fontSize: "14px",
          }}
          className="footer-text"
        >
          © 2025 Defan Soluções Digitais - Todos os direitos reservados
        </p>
        <p
          style={{
            margin: "1px 0",
            fontSize: "14px",
          }}
          className="footer-text"
        >
          Desenvolvido por: Taís Defante
        </p>
      </Container>

      {/* Estilos Responsivos Inline */}
      <style>
        {`
          @media (max-width: 768px) {
            .footer-text {
              font-size: 12px !important;
            }
          }

          @media (max-width: 576px) {
            .footer-text {
              font-size: 10px !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
