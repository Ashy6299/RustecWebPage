import React from "react";
import { Box, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function FloatingSocialButtons() {
  const buttons = [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/YourPage",
      icon: InstagramIcon,
      background:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/2349122180403",
      icon: WhatsAppIcon,
      background: "#25D366",
    },
    {
      id: "facebook",
      label: "Facebook",
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
          <Tooltip title={btn.label} placement="left" key={btn.id}>
            <Box
              component="a"
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={btn.label}
              sx={{
                position: "fixed",
                bottom: 20 + index * 70,
                right: 24,
                background: btn.background,
                color: "white",
                borderRadius: "50%",
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: 4,
                zIndex: 1300,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": { transform: "scale(1.08)", boxShadow: 6 },
              }}
            >
              <Icon sx={{ fontSize: 28 }} />
            </Box>
          </Tooltip>
        );
      })}
    </>
  );
}

export default FloatingSocialButtons;
