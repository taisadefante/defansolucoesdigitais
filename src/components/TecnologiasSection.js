import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaWhatsapp,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiRender,
  SiRailway,
} from "react-icons/si";

const tecnologias = [
  // Desenvolvimento
  {
    nome: "React",
    icon: <FaReact size={32} color="#61DAFB" />,
    descricao:
      "Biblioteca para construir interfaces modernas e reativas com JavaScript.",
  },
  {
    nome: "Next.js",
    icon: <SiNextdotjs size={32} color="#fff" />,
    descricao: "Framework React com suporte a SSR, SSG e rotas otimizadas.",
  },
  {
    nome: "Tailwind CSS",
    icon: <SiTailwindcss size={32} color="#38bdf8" />,
    descricao: "Framework CSS utilitário para estilização rápida e responsiva.",
  },
  {
    nome: "TypeScript",
    icon: <SiTypescript size={32} color="#3178c6" />,
    descricao:
      "Superset de JavaScript com tipagem estática que melhora a manutenção do código.",
  },
  {
    nome: "JavaScript",
    icon: <FaJsSquare size={32} color="#F7DF1E" />,
    descricao: "Linguagem principal da web para tornar páginas interativas.",
  },
  {
    nome: "HTML5",
    icon: <FaHtml5 size={32} color="#E34F26" />,
    descricao: "Estrutura e marcação semântica das páginas da web.",
  },
  {
    nome: "CSS3",
    icon: <FaCss3Alt size={32} color="#1572B6" />,
    descricao: "Estilização moderna e responsiva para páginas web.",
  },
  {
    nome: "Node.js",
    icon: <FaNodeJs size={32} color="#68A063" />,
    descricao: "Ambiente para rodar JavaScript no backend com performance.",
  },
  {
    nome: "Express.js",
    icon: <SiExpress size={32} color="#fff" />,
    descricao: "Framework web para APIs simples e rápidas com Node.js.",
  },
  {
    nome: "NestJS",
    icon: <SiNestjs size={32} color="#e0234e" />,
    descricao: "Framework Node modular, escalável e com estrutura robusta.",
  },

  // Banco de dados e ORM
  {
    nome: "PostgreSQL",
    icon: <FaDatabase size={32} color="#336791" />,
    descricao:
      "Banco de dados relacional poderoso, confiável e de código aberto.",
  },
  {
    nome: "MySQL",
    icon: <SiMysql size={32} color="#00758f" />,
    descricao: "Banco de dados relacional amplamente usado em aplicações web.",
  },
  {
    nome: "Prisma",
    icon: <SiPrisma size={32} color="#0c344b" />,
    descricao:
      "ORM moderno para Node.js que facilita consultas em banco de dados.",
  },
  {
    nome: "Firebase",
    icon: <SiFirebase size={32} color="#ffcb2b" />,
    descricao:
      "Backend como serviço com autenticação, banco em tempo real e mais.",
  },

  // Versionamento e APIs
  {
    nome: "Git",
    icon: <FaGitAlt size={32} color="#f34f29" />,
    descricao: "Sistema de controle de versão para projetos colaborativos.",
  },
  {
    nome: "GitHub",
    icon: <FaGithub size={32} color="#fff" />,
    descricao: "Plataforma para hospedagem e versionamento de código com Git.",
  },
  {
    nome: "WhatsApp API",
    icon: <FaWhatsapp size={32} color="#25D366" />,
    descricao:
      "Integração de sistemas com envio automatizado de mensagens pelo WhatsApp.",
  },

  // Deploy & Hosting
  {
    nome: "Vercel",
    icon: <SiVercel size={32} color="#fff" />,
    descricao:
      "Plataforma para deploy rápido de frontends modernos com Next.js.",
  },
  {
    nome: "Netlify",
    icon: <SiNetlify size={32} color="#00C7B7" />,
    descricao: "Hospedagem contínua e CI/CD para sites estáticos e JAMStack.",
  },
  {
    nome: "Render",
    icon: <SiRender size={32} color="#46E3B7" />,
    descricao: "Deploy de servidores, bancos de dados e aplicações fullstack.",
  },
  {
    nome: "Railway",
    icon: <SiRailway size={32} color="#fff" />,
    descricao:
      "Deploy completo para aplicações web, banco e backend integrado.",
  },
  {
    nome: "Heroku",
    icon: <SiHeroku size={32} color="#430098" />,
    descricao: "Plataforma de deploy simples para apps backend e frontend.",
  },
  {
    nome: "AWS",
    icon: <FaAws size={32} color="#ff9900" />,
    descricao: "Serviços de nuvem escaláveis como S3, EC2, RDS, Lambda e mais.",
  },
  {
    nome: "Docker",
    icon: <FaDocker size={32} color="#2496ED" />,
    descricao:
      "Plataforma para empacotar aplicações e rodar em contêineres portáveis.",
  },
];

const TecnologiasSection = () => {
  const [tecnologiaSelecionada, setTecnologiaSelecionada] = useState(null);

  const abrirModal = (tecnologia) => setTecnologiaSelecionada(tecnologia);
  const fecharModal = () => setTecnologiaSelecionada(null);

  return (
    <section
      id="tecnologias"
      style={{ backgroundColor: "#000", padding: "60px 0 40px" }}
    >
      <Container>
        <h2 className="text-center mb-4">Tecnologias Utilizadas</h2>
        <p
          className="text-center text-secondary mb-4"
          style={{ fontSize: "15px" }}
        >
          Clique nos ícones para conhecer os benefícios de cada tecnologia
        </p>

        <Row className="justify-content-center">
          {tecnologias.map((tech, index) => (
            <Col
              key={index}
              xs={4}
              sm={2}
              md={1}
              className="text-center mb-4"
              onClick={() => abrirModal(tech)}
              style={{ cursor: "pointer", padding: "10px" }}
            >
              <div className="tech-icon">
                {tech.icon}
                <p
                  className="mt-2 text-white"
                  style={{ fontSize: "12px", marginBottom: "0" }}
                >
                  {tech.nome}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal com visual moderno */}
        <Modal
          show={!!tecnologiaSelecionada}
          onHide={fecharModal}
          centered
          contentClassName="bg-dark text-white"
        >
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title>{tecnologiaSelecionada?.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ fontSize: "15px" }}>
              {tecnologiaSelecionada?.descricao}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={fecharModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      <style>{`
        .tech-icon:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TecnologiasSection;
