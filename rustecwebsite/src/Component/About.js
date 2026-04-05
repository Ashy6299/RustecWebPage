import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HandymanIcon from "@mui/icons-material/Handyman";
import logo from "../assets/Rustec_logo.jpg";

const highlights = [
  "Exceptional welding and fabrication quality",
  "Timely and reliable project delivery",
  "Innovative and sustainable solutions",
  "Experienced and skilled professionals",
];

function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      {/* Section Header */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        About Us
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        sx={{ mb: 5 }}
      >
        Our services combine aesthetics, functionality, efficiency, and
        sustainability. We are committed to delivering exceptional quality and
        timely project.
      </Typography>

      {/* Main About Card */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          mb: 6,
        }}
      >
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={logo}
              alt="Rustec Logo"
              sx={{
                width: "100%",
                height: isMobile ? 260 : "100%",
                minHeight: isMobile ? 260 : 420,
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Who We Are
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  mb: 3,
                }}
              >
                Rustec Global Company Limited is a construction, welding, and
                fabrication company committed to delivering exceptional product
                quality and timely project completion.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  mb: 3,
                }}
              >
                Our projects reflect deep expertise, innovation, and attention
                to detail. We focus on creating value through high-quality
                welding and precision finishing to enhance both performance and
                quality of life.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.9,
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                }}
              >
                Headquartered in Abuja, Nigeria, Rustec has grown into a trusted
                name in the fabrication industry, known for quality, innovation,
                and reliability.
              </Typography>

              <List sx={{ mt: 3 }}>
                {highlights.map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 34 }}>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Grid>
        </Grid>
      </Paper>

      {/* Extra Info Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Stack spacing={2} alignItems="flex-start">
                <WorkspacePremiumIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight="bold">
                  Our Vision
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  To become one of the most recognized and trusted leaders in
                  welding, fabrication, and construction services through
                  quality, innovation, and customer satisfaction.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Stack spacing={2} alignItems="flex-start">
                <EngineeringIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight="bold">
                  Our Mission
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  To deliver top-quality welding and fabrication services with
                  precision, professionalism, and a commitment to safety,
                  durability, and customer value.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%", borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Stack spacing={2} alignItems="flex-start">
                <HandymanIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight="bold">
                  Our Strength
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  We combine skilled craftsmanship, hands-on experience, durable
                  materials, and keen attention to detail to deliver
                  long-lasting solutions for every project. project.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutSection;
