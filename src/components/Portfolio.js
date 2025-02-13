import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { FaLink } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const projects = [
  {
    title: "Juliana Martins - Terapeuta",
    description:
      "Página profissional e responsiva para um terapeuta, destacando seus serviços, especialização e facilitando o contato com pacientes.",
    img: "assets/projetos/julianamartins_terapeuta.png",
    stacks: ["React.js", "Bootstrap"],
    deploy: "https://jumartins-terapeuta.vercel.app/",
  },
  {
    title: "Velas Alecrim",
    description:
      "E-commerce moderno e responsivo, onde clientes podem navegar, adicionar itens ao carrinho e finalizar a compra com envio direto do pedido para o WhatsApp.",
    img: "assets/projetos/velas-alecrim.png",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://velas-alecrim.vercel.app/",
  },
  {
    title: "Fonseca Reformas",
    description:
      "Página profissional para uma empresa de engenharia civil, destacando serviços, portfólio e facilitando o contato.",
    img: "assets/projetos/fonseca_reformas.jpeg",
    stacks: ["HTML", "CSS", "JS"],
    deploy: "https://fonseca-reformas.vercel.app/",
  },
];

function Portfolio() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section id="portfolio" style={{ padding: "40px 0", position: "relative" }}>
      <Container>
        <h2 className="text-center mb-4">Portfólio</h2>

        <div className="d-flex align-items-center justify-content-center position-relative">
          <Button
            variant="outline-primary"
            className="btn-nav btn-prev d-flex align-items-center"
            onClick={() => swiperInstance?.slidePrev()}
          >
            <ChevronLeft size={20} />
          </Button>

          <div className="w-100 px-2">
            <Swiper
              onSwiper={setSwiperInstance}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ el: ".custom-swiper-pagination", clickable: true }}
              breakpoints={{
                480: { slidesPerView: 1.2, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper h-full"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="portfolio-card">
                    <div className="portfolio-img-container">
                      <img src={project.img} alt={project.title} />
                    </div>

                    <div className="portfolio-content">
                      <h4
                        style={{
                          marginTop: "15px",
                          fontSize: "25px",
                          marginBottom: "20px",
                        }}
                      >
                        {project.title}
                      </h4>
                      <p>{project.description}</p>

                      <div className="tech-stacks">
                        {project.stacks.map((stack, i) => (
                          <span key={i}>{stack}</span>
                        ))}
                      </div>

                      <div
                        className="portfolio-btn"
                        style={{
                          marginTop: "20px",
                          fontSize: "25px",
                          marginBottom: "20px",
                        }}
                      >
                        <a
                          href={project.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink /> Ver Projeto
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-swiper-pagination d-flex justify-content-center mt-4"></div>
          </div>

          <Button
            variant="outline-primary"
            className="btn-nav btn-next d-flex align-items-center"
            onClick={() => swiperInstance?.slideNext()}
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </Container>

      {/* Estilos adicionais para os cards elevados */}
      <style>
        {`
          .portfolio-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 100%;
            min-height: 480px;
            background: white;
            border-radius: 8px;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            padding: 15px;
            text-align: center;
            transition: all 0.3s ease-in-out;
          }

          .portfolio-card:hover {
            box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
            transform: translateY(-5px);
          }

          .portfolio-img-container {
            width: 100%;
            height: 180px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f3f3f3;
          }

          .portfolio-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .portfolio-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }

          .portfolio-content h4 {
            font-size: 18px;
            font-weight: bold;
            color: #4a90e2;
          }

          .portfolio-content p {
            font-size: 14px;
            color: #666;
            margin-bottom: 10px;
            flex-grow: 1;
          }

          .tech-stacks {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            justify-content: center;
          }

          .tech-stacks span {
            padding: 4px 8px;
            font-size: 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            color: #333;
          }

          .portfolio-btn {
            margin-top: auto;
            width: 100%;
          }

          .portfolio-btn a {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0d6efd;
            color: white;
            padding: 8px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 14px;
            gap: 5px;
          }

          .portfolio-btn a:hover {
            background: #0b5ed7;
          }

          .btn-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            background: white;
            border: 2px solid #0d6efd;
            color: #0d6efd;
            padding: 5px 15px;
            font-size: 14px;
            transition: all 0.3s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .btn-nav:hover {
            background: #0d6efd;
            color: white;
          }

          .btn-prev {
            left: -50px;
          }

          .btn-next {
            right: -50px;
          }

          @media (max-width: 768px) {
            .btn-prev {
              left: -20px;
            }

            .btn-next {
              right: -20px;
            }
          }

          @media (max-width: 480px) {
            .btn-prev {
              left: 5px;
            }

            .btn-next {
              right: 5px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Portfolio;
