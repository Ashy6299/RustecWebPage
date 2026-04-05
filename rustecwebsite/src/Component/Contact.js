import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Rafiu from "../assets/Rafiu.jpg";
import Ibrahim from "../assets/ibrahimImage.jpg";
import Hamid from "../assets/hamid.jpg";

const teamMembers = [
  {
    name: "Engr. Abdulrafiu Yahaya A.",
    role: " Founder & CEO",
    img: Rafiu,
  },
  {
    name: "Engr. Saidu Abdulhamid",
    role: "Project Manager",
    img: Hamid,
  },
  {
    name: "Yakubu Ibrahim",
    role: "Project Supervisor & Team Lead",
    img: Ibrahim,
  },
];

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in your name, email, and message before sending.");
      return;
    }
    const phoneNumber = "2349122180403";
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${message}`,
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  const isSendDisabled = !name.trim() || !email.trim() || !message.trim();

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Contact Us
      </Typography>

      <Box sx={{ mt: 6 }}>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Meet the Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={4} key={index} textAlign="center">
              <Avatar
                src={member.img}
                alt={member.name}
                sx={{ width: 120, height: 120, margin: "0 auto", mb: 2 }}
              />
              <Typography variant="h6" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          Company Info
        </Typography>
        <Typography variant="body1">
          📍 Plot 234, Gwarinpa Estate, Abuja, Nigeria
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="tel:+234 9122180403"
          sx={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          📞 +234 9122180403
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="mailto:info@rustecglobal.com"
          sx={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          📧 info@rustecglobal.com
        </Typography>
      </Box>

      <Card
        sx={{ maxWidth: 500, mx: "auto", mt: 6, boxShadow: 3, borderRadius: 3 }}
      >
        <CardContent>
          <Box
            component="form"
            noValidate
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              required
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleWhatsAppSend}
              disabled={isSendDisabled}
              startIcon={<WhatsAppIcon />}
              sx={{ py: 1.5, fontWeight: 600 }}
            >
              Send via WhatsApp
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ContactSection;
