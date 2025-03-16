import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Importando o Footer
import Portfolio from "./pages/Portfolio";
import Home from "./pages/home"; // Certifique-se de importar a Home
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mt-4 main-content">
        {" "}
        {/* Mantém um espaçamento entre Header e conteúdo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Contact />
      </main>
      <WhatsAppButton />

      <Footer />

      {/* Estilos para corrigir a sobreposição do Header */}
      <style>
        {`
          .main-content {
            padding-top: 80px; /* Espaço suficiente para compensar o Header fixo */
          }

          @media (max-width: 768px) {
            .main-content {
              padding-top: 90px; /* Ajuste maior para telas menores */
            }
          }
        `}
      </style>
    </Router>
  );
};

export default App;
