import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Service";
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import WhatsAppButton from "../components/WhatsAppButton";
import AboutEnterprise from "../components/AboutEnterprise";

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutEnterprise />
        <Services />
        <About />
        <FAQ />
        <WhatsAppButton />
      </main>
    </>
  );
}

export default Home;
