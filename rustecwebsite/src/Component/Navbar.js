import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/Rustec_logo.jpg";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { name: "Home", to: "home", icon: <HomeIcon /> },
    { name: "Services", to: "services", icon: <BuildIcon /> },
    { name: "About", to: "about", icon: <InfoIcon /> },
    { name: "Contact", to: "contact", icon: <ContactMailIcon /> },
  ];

  const socialLinks = [
    {
      id: "facebook",
      href: "https://www.facebook.com/profile.php?id=100084514898791",
      icon: <FacebookIcon />,
    },
    {
      id: "instagram",
      href: "https://instagram.com/YourPage",
      icon: <InstagramIcon />,
    },
    {
      id: "linkedin",
      href: "https://linkedin.com/YourPage",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "primary.main", // use theme primary color
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <ScrollLink
            to="home"
            smooth
            duration={500}
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <img
              src={logo}
              alt="Rustec Co."
              style={{
                height: "40px",
                marginRight: "10px",
                borderRadius: "5px",
              }}
            />
          </ScrollLink>
        </Box>

        {/* Desktop Links with Icons */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              spy
              offset={-70}
              style={{ textDecoration: "none" }}
            >
              <Button color="inherit" startIcon={link.icon}>
                {link.name}
              </Button>
            </ScrollLink>
          ))}

          {/* Social Media Icons */}
          {socialLinks.map((social) => (
            <IconButton
              key={social.id}
              color="inherit"
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              width: 250,
              borderRadius: 2,
              height: 300,
              boxShadow: "none",
              backdropFilter: "blur(5px)", // fixed closing parenthesis
            },
          }}
          ModalProps={{
            BackdropProps: {
              invisible: true,
            },
          }}
        >
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{ mt: 2 }}
          >
            <List>
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  style={{ textDecoration: "none" }}
                >
                  <ListItem button>
                    {link.icon}
                    <ListItemText primary={link.name} sx={{ ml: 1 }} />
                  </ListItem>
                </ScrollLink>
              ))}
            </List>

            {/* Social icons in drawer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 2,
              }}
            >
              {socialLinks.map((social) => (
                <IconButton
                  key={social.id}
                  color="primary"
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
