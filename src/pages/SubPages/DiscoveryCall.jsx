import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DiscoveryCallOverlay = ({ onClose }) => {
  // Google Calendar API integration will go here

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: (theme) => theme.spacing(4),
          borderRadius: '8px',
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          BOOK A 10 MINUTE DISCOVERY CALL
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Thanks for reaching out! This is to discuss the project a bit further and hash out the scope of work you'd like us to take on. Please have some information ready so that we can quickly understand what's needed and how we can assist.
        </Typography>
        {/* Google Calendar date and time selection components will go here */}
        <Box sx={{ textAlign: 'right' }}>
          <Button variant="contained" color="primary" onClick={onClose}>
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoveryCallOverlay;
