import React from "react";
import { Box, Typography, Link, Container, Stack } from "@mui/material";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: "black", color: "#fff", py: 4 }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Typography variant="body2">
            © {year} Rustec Global Company Limited. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="https://facebook.com"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
