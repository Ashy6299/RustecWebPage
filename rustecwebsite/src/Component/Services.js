import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Stack,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import servicesImage from "../assets/image2.jpg";

const services = [
  {
    title: "Structural Welding",
    description:
      "Stainless steel welding, galvanised steel welding, gates and doors fabrication, staircases, fence rails, black iron steel design, window grills, door grills, prototyping, and more.",
    icon: <EngineeringIcon fontSize="large" />,
  },
  {
    title: "Fabrication",
    description:
      "We offer skilled craftsmanship, competitive pricing, superior quality, timely service, innovative touches, and perfect finishing for all fabrication needs.",
    icon: <BuildIcon fontSize="large" />,
  },
  {
    title: "Repairs",
    description:
      "Expert repair services for structural and equipment issues, ensuring durability, safety, reliability, and excellent customer support after every project.",
    icon: <HomeRepairServiceIcon fontSize="large" />,
  },
];

const highlights = [
  "Skilled and experienced professionals",
  "High-quality materials and finishing",
  "Timely project delivery",
  "Competitive pricing",
  "Innovative and customized solutions",
  "Reliable after-service support",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

function ServicesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Our Services
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 800, mx: "auto" }}
        >
          We provide durable, high-quality welding, fabrication, and repair
          solutions tailored to residential, commercial, and industrial needs.
        </Typography>

        {/* Intro Section */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            mb: 6,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: 3,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={servicesImage}
                alt="Rustec Services"
                sx={{
                  width: "100%",
                  height: isMobile ? 240 : "100%",
                  minHeight: isMobile ? 240 : 380,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Quality Craftsmanship You Can Trust
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.9, mb: 3 }}
                >
                  At Rustec Global Company Limited, we combine technical
                  expertise, creativity, and precision to deliver welding,
                  fabrication, and repair services that meet the highest
                  standards. From custom metal works to structural repairs, our
                  team is committed to quality, safety, and client satisfaction.
                </Typography>

                <List dense>
                  {highlights.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 34 }}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <ScrollLink to="contact" smooth duration={500}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 2,
                      borderRadius: 2,
                      px: 3,
                      py: 1.2,
                      fontWeight: 600,
                    }}
                  >
                    Request a Quote
                  </Button>
                </ScrollLink>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Services Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={service.title}>
                <motion.div
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      boxShadow: 2,
                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: 6,
                        borderColor: "primary.main",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={3} alignItems="flex-start">
                        <Avatar
                          sx={{
                            bgcolor: "primary.light",
                            color: "primary.main",
                            width: 64,
                            height: 64,
                          }}
                        >
                          {service.icon}
                        </Avatar>

                        <Typography variant="h6" fontWeight="bold">
                          {service.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ lineHeight: 1.8 }}
                        >
                          {service.description}
                        </Typography>

                        <ScrollLink to="contact" smooth duration={500}>
                          <Button
                            size="small"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ fontWeight: 600, px: 0 }}
                          >
                            Learn More
                          </Button>
                        </ScrollLink>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default ServicesSection;
