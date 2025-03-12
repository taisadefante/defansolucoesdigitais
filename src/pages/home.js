import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/styles.css";
import Services from "../components/Service";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";

import AboutEnterprise from "../components/AboutEnterprise";
import DestaqueSection from "../components/DestaqueSection";
import Buttonportfolio from "../components/Buttonportfolio";

import DiferenciaisSection from "../components/DiferenciaisSection";

import Depoimento from "../components/Depoimento";

import TecnologiasSection from "../components/TecnologiasSection";
import EstatisticasSection from "../components/EstatisticasSection";
import GarantiaSection from "../components/GarantiaSection";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutEnterprise />
        <DestaqueSection />
        <Buttonportfolio />
        <Services />
        <DiferenciaisSection />
        <Depoimento />
        <TecnologiasSection />
        <EstatisticasSection />
        <GarantiaSection />
        <CTASection />

        <FAQ />
      </main>
    </>
  );
}

export default Home;
