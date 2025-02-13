import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Service";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <HeroSection />

      <section id="portfolio" className="portfolio py-5">
        <Header />
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </section>
    </>
  );
}

export default Home;
