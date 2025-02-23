import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Service";
import FAQ from "../components/FAQ";
import HeroSection from "../components/HeroSection";
import AboutEnterprise from "../components/AboutEnterprise";
import Buttonportfolio from "../components/Buttonportfolio";

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutEnterprise />
        <Buttonportfolio />
        <Services />
        <FAQ />
        <Buttonportfolio />
      </main>
    </>
  );
}

export default Home;
