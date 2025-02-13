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
    <section id="portfolio" style={{ padding: "40px 0" }}>
      <Container>
        <h2 className="text-center mb-4">Portfólio</h2>

        <div className="d-flex align-items-center justify-content-center">
          <Button
            variant="outline-primary"
            className="d-flex align-items-center mx-2 d-none d-md-flex"
            onClick={() => swiperInstance?.slidePrev()}
          >
            <ChevronLeft size={28} />
          </Button>

          <div className="w-100 px-2">
            <Swiper
              onSwiper={setSwiperInstance}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ el: ".custom-swiper-pagination", clickable: true }}
              breakpoints={{
                576: { slidesPerView: 1.2, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper h-full"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      maxWidth: "100%",
                      minHeight: "500px",
                      background: "white",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f3f3f3",
                      }}
                    >
                      <img
                        src={project.img}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#4a90e2",
                        }}
                      >
                        {project.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#666",
                          marginBottom: "10px",
                          flexGrow: 1,
                        }}
                      >
                        {project.description}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "5px",
                          justifyContent: "center",
                        }}
                      >
                        {project.stacks.map((stack, i) => (
                          <span
                            key={i}
                            style={{
                              padding: "4px 8px",
                              fontSize: "12px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              color: "#333",
                            }}
                          >
                            {stack}
                          </span>
                        ))}
                      </div>

                      <div style={{ marginTop: "auto", width: "100%" }}>
                        <a
                          href={project.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary d-flex align-items-center justify-content-center mt-3 w-100"
                          style={{ gap: "5px" }}
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
            className="d-flex align-items-center mx-2 d-none d-md-flex"
            onClick={() => swiperInstance?.slideNext()}
          >
            <ChevronRight size={28} />
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
