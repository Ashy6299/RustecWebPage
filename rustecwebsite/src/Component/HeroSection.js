import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import heroImage1 from "../assets/image1.jpg";
import heroImage2 from "../assets/image2.jpg";
import heroImage3 from "../assets/image3.jpg";
import heroImage4 from "../assets/image4.jpg";
import heroImage5 from "../assets/image5.jpg";

const heroImages = [
  {
    img: heroImage1,
    title: "Structural Welding",
    description: "Precision welding for industrial and structural needs.",
  },
  {
    img: heroImage2,
    title: "Fabrication Services",
    description: "High-quality metal fabrication with custom finishes.",
  },
  {
    img: heroImage3,
    title: "Expert Repairs",
    description: "On-site equipment and structural repair services.",
  },
  {
    img: heroImage4,
    title: "Custom Designs",
    description: "Unique metal designs tailored to client needs.",
  },
  {
    img: heroImage5,
    title: "Quality Assurance",
    description: "Ensuring safety and precision in every project.",
  },
];

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #f8fbff 0%, #eef4fa 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            color: "#0a1929",
          }}
        >
          Welcome to Rustec Global Company Limited.
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 5,
            color: "#334155",
            maxWidth: 750,
            mx: "auto",
          }}
        >
          Delivering Precision Welding & Fabrication Services in Abuja & Beyond
        </Typography>

        <Slider {...settings}>
          {heroImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ px: 2 }}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: 4,
                    overflow: "hidden",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.img}
                    alt={item.title}
                  />
                  <CardContent sx={{ minHeight: 120 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        color: "#0a1929",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#475569",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Slider>

        <Box sx={{ textAlign: "center", mt: 5 }}>
          <ScrollLink to="contact" smooth duration={500}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                color: "#0a1929",
                backgroundColor: "#f0f2f5",
                "&:hover": {
                  backgroundColor: "#060229",
                  color: "#f0f2f5",
                },
              }}
            >
              Get a Quote
            </Button>
          </ScrollLink>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
