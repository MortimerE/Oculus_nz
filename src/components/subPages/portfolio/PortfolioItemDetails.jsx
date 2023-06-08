import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll';
import { Grid } from '@mui/material';

const Underline = styled('hr')({
  borderColor: '#000000',
  borderWidth: '1px',
});

const PortfolioItemDetails = ({ title, description }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '32px', height: '100vh' }}>
      <Box sx={{ width: '40%', paddingRight: '32px' }}>
        <Typography variant="h3" gutterBottom>{title}</Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>{description}</Typography>

        <Typography variant="body1" fontWeight="bold">Got a similar project & you'd like to engage us?</Typography>
        <ScrollLink to="contact" spy={true} smooth={true}>
          <Button variant="contained">ENQUIRE HERE</Button>
        </ScrollLink>

        <Typography variant="h6" gutterBottom>You might also like</Typography>
        <Underline />
        {/* Add similar articles here */}

      </Box>

      <Box sx={{ width: '60%', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '45%' }}>
          {/* Add image column here */}
        </Box>

        <Box sx={{ width: '45%' }}>
          {/* Add PDF reader here */}
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioItemDetails;
