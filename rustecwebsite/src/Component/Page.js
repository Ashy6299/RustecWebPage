import React from "react";
import { Typography, Box } from "@mui/material";
import { Element } from "react-scroll";
import Navbar from "../Component/Navbar";
import HeroCarousel from "./HeroSection";
import Services from "../Component/Services";
import AboutSection from "./About";
import ContactSection from "./Contact";
import Testimonials from "./Testimonial";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const FloatingSocialButtons = () => {
  const buttons = [
    {
      id: "instagram",
      href: "https://instagram.com/YourPage",
      icon: InstagramIcon,
      background:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    },
    {
      id: "whatsapp",
      // wa.me must NOT include the "+"
      href: "https://wa.me/2349122180403",
      icon: WhatsAppIcon,
      background: "#25D366",
    },
    {
      id: "facebook",
      href: "https://facebook.com/YourPage",
      icon: FacebookIcon,
      background: "#4267B2",
    },
  ];

  return (
    <>
      {buttons.map((btn, index) => {
        const Icon = btn.icon;
        return (
          <Box
            key={btn.id}
            component="a"
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "fixed",
              bottom: 20 + index * 70, // 20, 90, 160 ...
              right: 30,
              background: btn.background,
              color: "white",
              borderRadius: "50%",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
              zIndex: 1000,
            }}
          >
            <Icon sx={{ fontSize: 30 }} />
          </Box>
        );
      })}
    </>
  );
};

function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <Element name="home">
        <HeroCarousel />
      </Element>

      {/* Services Section */}
      <Element name="services">
        <Services />
      </Element>

      {/* About Section */}
      <Element name="about">
        <AboutSection />
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <ContactSection />
      </Element>

      <Testimonials />

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          py: 2,
          mt: 4,
        }}
      >
        <Typography>
          &copy; {currentYear} Rustec_Co. All rights reserved.
        </Typography>
      </Box>

      {/* Floating Social Buttons */}
      <FloatingSocialButtons />
    </div>
  );
}

export default Page;
