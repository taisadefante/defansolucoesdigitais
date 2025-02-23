import React from "react";

function AboutEnterprise() {
  // Dados sobre a empresa
  const aboutText = [
    {
      text: "Somos apaixonados por transformar ideias em experiências digitais únicas. Especializados na criação de sites e no desenvolvimento web, nosso objetivo é entregar soluções inovadoras, personalizadas e altamente funcionais para empresas e indivíduos que buscam se destacar no mundo online.",
    },
    {
      text: "Trabalhamos em cada projeto com atenção aos detalhes, garantindo que cada site seja não apenas visualmente atraente, mas também intuitivo, responsivo e otimizado para o melhor desempenho possível. Seja para um site institucional, um e-commerce ou uma plataforma personalizada, estamos prontos para atender às suas necessidades.",
    },
    {
      text: "Estamos comprometidos em oferecer soluções que realmente atendem às necessidades dos nossos clientes, resolvendo os desafios digitais de forma eficiente e eficaz. Seja qual for o problema que você está enfrentando no mundo online, nós temos a experiência e as ferramentas para solucioná-lo.",
    },
  ];

  return (
    <section id="about" className="about py-5 text-dark position-relative">
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          background: "#000",
          color: "white",
        }}
      >
        <h2>Quem somos?</h2>
        <p>
          Somos especialistas em criação de sites estratégicos para impulsionar
          sua marca e aumentar conversões.
        </p>
      </div>
      <div className="container-fluid mt-5">
        {/* Alterado para container-fluid */}
        <div className="row justify-content-center position-relative">
          {/* Imagem - Ajusta conforme a tela */}
          <div className="about-image-container">
            <img
              src="/assets/logo.jpg"
              alt="Taís Defante"
              className="about-image img-fluid shadow-lg"
            />
          </div>

          {/* Texto - Agora 100% da largura em telas menores */}
          <div
            className="col-md-10 col-12 w-100 text-center position-relative p-5"
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
              {aboutText.map((item, index) => (
                <p key={index} className="text-custom mb-3">
                  {item.text}
                </p>
              ))}
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

          /* Texto ocupa 100% da largura */
          .about-text {
            text-align: left !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 0;
            margin: 0;
          }

          /* Em telas menores, remove margens e garante largura total */
          @media (max-width: 768px) {
            .about-image-container {
              position: static;
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
            }

            .about-text {
              width: 100% !important;
              padding: 0 5px !important; /* Ajuste mínimo para evitar cortes */
              margin: 0 !important; /* Remove margem lateral */
              text-align: left; /* Melhor leitura */
            }

            .about-title {
              font-size: 20px;
            }

            .about-description {
              font-size: 16px;
              line-height: 1.6;
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
