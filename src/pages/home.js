import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/styles.css";
import Services from "../components/Service";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";

import AboutEnterprise from "../components/AboutEnterprise";
import DestaqueSection from "../components/DestaqueSection";

import Buttonportfolio from "../components/Buttonportfolio";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutEnterprise />
        <DestaqueSection />
        <Buttonportfolio />
        <Services />
        <FAQ />
      </main>
    </>
  );
}

export default Home;
