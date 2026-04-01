import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Avatar,
  Stack,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Rustec Global delivered excellent fabrication services for our construction project. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback:
      "Their attention to detail and welding quality is top-notch. Rustec is always our first call.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    feedback:
      "Professional team, quick delivery time, and outstanding finishing. Great experience working with Rustec.",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

function Testimonials() {
  return (
    <Box sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 5 }}
          >
            Hear what our clients have to say about our work.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((t, i) => (
              <Grid item xs={12} sm={6} md={4} key={t.name}>
                <motion.div
                  variants={cardVariants}
                  custom={i}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card
                    sx={{ height: "100%", boxShadow: 3, borderRadius: 3, p: 1 }}
                  >
                    <CardContent>
                      <Stack spacing={2} alignItems="center">
                        <Avatar
                          sx={{
                            bgcolor: "primary.main",
                            width: 56,
                            height: 56,
                          }}
                        >
                          {t.name.charAt(0)}
                        </Avatar>
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          {t.name}
                        </Typography>
                        <Rating value={t.rating} readOnly />
                        <Typography
                          align="center"
                          color="text.secondary"
                          sx={{ fontStyle: "italic" }}
                        >
                          "{t.feedback}"
                        </Typography>
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

export default Testimonials;
