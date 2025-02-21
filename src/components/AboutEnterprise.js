import React from "react";

function AboutEnterprise() {
  return (
    <section id="about" className="about py-5 text-dark position-relative">
      <div className="container mt-5">
        <div className="row justify-content-center position-relative">
          {/* Imagem - Ajusta conforme a tela */}
          <div className="about-image-container">
            <img
              src="/assets/logo.jpg"
              alt="Taís Defante"
              className="about-image img-fluid shadow-lg"
            />
          </div>

          {/* Texto */}
          <div
            className="col-md-10 text-center position-relative p-5"
            style={{
              background: "rgb(112, 112, 114)",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: "2",
              color: "white",
            }}
          >
            {/* Conteúdo do texto */}
            <div className="about-text">
              <p className="about-description">
                Somos apaixonados por transformar ideias em experiências
                digitais únicas. Especializados na criação de sites e no
                desenvolvimento web, nosso objetivo é entregar soluções
                inovadoras, personalizadas e altamente funcionais para empresas
                e indivíduos que buscam se destacar no mundo online.
              </p>

              <p className="about-description">
                trabalhamos em cada projeto com atenção aos detalhes, garantindo
                que cada site seja não apenas visualmente atraente, mas também
                intuitivo, responsivo e otimizado para o melhor desempenho
                possível. Seja para um site institucional, um e-commerce ou uma
                plataforma personalizada, estamos prontos para atender às suas
                necessidades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos Responsivos */}
      <style>
        {`
          /* Imagem no canto superior esquerdo em telas grandes */
          .about-image-container {
            position: absolute;
            top: -80px;
            left: -20px;
            z-index: 3;
          }

          .about-image {
            width: 250px;
            height: 250px;
            border-radius: 20%;
            border: 5px solid white;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }

          /* Texto sempre centralizado */
          .about-text {
            text-align: center !important;
            padding: 0 40px; /* Espaçamento lateral padrão */
            margin-left: 40px;
          }

          /* Em telas menores, a imagem vai para cima, o texto tem menos margem e a fonte reduz */
          @media (max-width: 768px) {
            .about-image-container {
              position: static;
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
            }

            .about-text {
              padding: 0 15px !important; /* Reduz margem lateral */
              margin: 5px;
            }

            .about-title {
              font-size: 20px; /* Reduz um pouco o tamanho do título */
            }

            .about-description {
            width: 100%; 
            font-size: 16px; /* Mantém uma boa legibilidade */
            line-height: 1.6; /* Ajusta o espaçamento entre linhas */
            
    
  }
          }

          /* Ajuste do título e do texto */
          .about-title {
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 15px;
          }

          .about-description {
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 15px;
          }
        `}
      </style>
    </section>
  );
}

export default AboutEnterprise;
