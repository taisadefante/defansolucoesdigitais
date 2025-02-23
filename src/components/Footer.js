import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "#222",
        color: "white",
        padding: "20px",
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Defan soluções Digitais - Todos os
        direitos reservados
      </p>
    </div>
  );
};

export default Footer;
