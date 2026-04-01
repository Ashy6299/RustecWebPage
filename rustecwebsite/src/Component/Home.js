import React from "react";
import { Box } from "@mui/material";
import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FloatingSocialButtons from "../components/FloatingSocialButtons";

function Home() {
  return (
    <>
      <Navbar />

      <Box component="main">
        <Element name="home">
          <HeroSection />
        </Element>

        <Element name="services">
          <ServicesSection />
        </Element>

        <Element name="about">
          <AboutSection />
        </Element>

        <Element name="testimonials">
          <Testimonials />
        </Element>

        <Element name="contact">
          <ContactSection />
        </Element>
      </Box>

      <Footer />
      <FloatingSocialButtons />
    </>
  );
}

export default Home;
