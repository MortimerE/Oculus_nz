import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PinkButton from '../../reusable/PinkButton';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const DiscoveryCallOverlay = ({ onClose, isRequestCollected }) => {
  const handleSubmit = () => {
    // Implement newsletter sign-up logic here
    onClose();
    isRequestCollected(true);
  };
  // Google Calendar API integration will go here

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        maxWidth: '80vw',
        width: '80%',
        borderRadius: '15px',
        margin: 'auto',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'black',
          padding: (theme) => theme.spacing(4),
          borderRadius: '8px',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 2, right: 2, color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
        <Typography variant="h4" sx={{ mb: 2 }}>
          BOOK A 10 MINUTE DISCOVERY CALL
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Thanks for reaching out! This is to discuss the project a bit further and hash out the scope of work you'd like us to take on. Please have some information ready so that we can quickly understand what's needed and how we can assist.
        </Typography>
        {/* Google Calendar date and time selection components will go here */}
        <Box sx={{ textAlign: 'right' }}>
          <PinkButton onClick={handleSubmit} text={'Book Now'}/>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoveryCallOverlay;
