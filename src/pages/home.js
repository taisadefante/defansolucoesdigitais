import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/styles.css";
import Services from "../components/Service";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";

import AboutEnterprise from "../components/AboutEnterprise";
import DestaqueSection from "../components/DestaqueSection";
import Buttonportfolio from "../components/Buttonportfolio";

import TecnologiasSection from "../components/TecnologiasSection";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutEnterprise />
        <DestaqueSection />
        <Buttonportfolio />
        <Services />
        <TecnologiasSection />

        <FAQ />
      </main>
    </>
  );
}

export default Home;
