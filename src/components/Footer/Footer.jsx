import React from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" bgcolor="black" color="white" py={2}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" gutterBottom>
              &copy; 2023 - @ Oculus Architectural Engineering Ltd
            </Typography>
            <Box display="flex">
              <Typography variant="body2" mr={1}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Privacy Statement
                </a>
              </Typography>
              <Typography variant="body2">
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Terms and Conditions
                </a>
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit" href="#">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="#">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="#">
              <Instagram />
            </IconButton>
            <img src="Reverse White Oculus Logo transparent bg.png" alt="Oculus NZ" height="50px" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
