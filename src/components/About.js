import React from "react";

function About() {
  return (
    <section id="" className="about py-5 text-dark position-relative">
      <div className="container mt-5">
        <div className="row justify-content-center position-relative">
          {/* Imagem - Ajusta conforme a tela */}
          <div className="about-image-container">
            <img
              src="/assets/tais.jpg"
              alt="Taís Defante"
              className="about-image img-fluid shadow-lg"
            />
          </div>

          {/* Caixa de texto com fundo cinza */}
          <div
            className="col-md-10 text-center position-relative p-5"
            style={{
              background: "#d3d3d3", // Cinza claro
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: "2",
              color: "#000", // Preto puro
            }}
          >
            {/* Conteúdo do texto */}
            <div className="about-text">
              <p className="about-title">Olá! Sou Taís Defante. 🚀</p>
              <p className="about-description">
                Minha trajetória profissional une gestão e tecnologia, criando
                uma visão estratégica para o desenvolvimento de soluções
                inovadoras. Sou formada em Administração de Empresas e Gestão da
                Tecnologia da Informação, com pós-graduação em Gestão de
                Projetos, Finanças, Auditoria e Controladoria.
              </p>

              <p className="about-description">
                Apaixonada por tecnologia e inovação, expandi minha atuação para
                o desenvolvimento de software, lógica, criatividade e resolução
                de problemas para construir aplicações eficientes e impactantes.
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
            top: -40px;
            left: -40px;
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
            padding: 0 40px;
            margin-left: 40px;
            color: #000 !important; /* Força a cor preta */
          }

          /* Em telas menores, a imagem vai para cima e o texto é ajustado */
          @media (max-width: 768px) {
            .about-image-container {
              position: static;
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
            }

            .about-text {
              padding: 0 1px !important;
              margin: 1x;
            }

            .about-title {
              font-size: 20px;
            }

            .about-description {
              width: 100%; 
              font-size: 16px;
              line-height: 1.6;
            }
          }

          /* Ajuste do título e do texto */
          .about-title, .about-description {
            color: #000 !important; /* Preto puro */
          }

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

export default About;
