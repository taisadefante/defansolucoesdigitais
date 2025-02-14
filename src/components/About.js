import React from "react";

function About() {
  return (
    <section id="about" className="about py-5 text-dark position-relative">
      <h2 className="text-center mb-4">Sobre Taís Defante</h2>
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

          {/* Texto */}
          <div
            className="col-md-10 text-center position-relative p-5"
            style={{
              background: "rgb(70, 70, 153)",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: "2",
              color: "white",
            }}
          >
            {/* Conteúdo do texto */}
            <div className="about-text">
              <p className="about-title">Olá! Sou Tais Defante. 🚀</p>
              <p className="about-description">
                Minha trajetória profissional une gestão e tecnologia, criando
                uma visão estratégica para o desenvolvimento de soluções
                inovadoras. Sou formada em <b>Administração de Empresas</b> e
                <b> Gestão da Tecnologia da Informação</b>, com pós-graduação em
                <b> Gestão de Projetos, Finanças, Auditoria e Controladoria</b>.
              </p>
              <p className="about-description">
                Apaixonada por tecnologia e inovação, expandi minha atuação para
                o desenvolvimento de software, unindo{" "}
                <b>lógica, criatividade e resolução de problemas</b> para
                construir aplicações eficientes e impactantes.
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
            padding: 0 40px; /* Espaçamento lateral padrão */
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
            }

            .about-title {
              font-size: 20px; /* Reduz um pouco o tamanho do título */
            }

            .about-description {
              font-size: 16px; /* Reduz o tamanho do texto para melhor adaptação */
              line-height: 1.6; /* Ajusta espaçamento entre linhas */
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

export default About;
