import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import NewsLetterSignUpPage from '../contact/NewsletterSignUp';

const Overlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.5)', // Opaque
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000, // High z-index to ensure it's on top of all other elements
}));

export const Newsletter = () => {
  const InstagramFeedPlaceholder = () => (
    <Box sx={{ width: '100%', height: '500px', bgcolor: 'gray' }}>
      <Typography variant="h5" component="div" sx={{ p: 2, color: 'white' }}>
        Instagram Feed Placeholder
      </Typography>
    </Box>
  );

  const [overlayVisible, setOverlayVisible] = useState(false);

  const newsletterUrl = '#'; // Replace with the URL to your newsletter sign up page

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
      <InstagramFeedPlaceholder />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Typography variant="h4" component="div" sx={{ textDecoration: 'underline' }}>
          STAY IN TOUCH
        </Typography>
        <Typography variant="h6" component="div">
          THE ANTLER - AN OCULUS NEWSLETTER
        </Typography>
        <Typography variant="body1" component="div">
          Mess with the moose, and you’ll get the Antler. We like to provide regular news and updates about the stuff we’re up to and the things we think you need to know.
        </Typography>
        <Typography variant="body1" component="div">
          Interested in updates from us? Sign up below.
        </Typography>
        <Button variant="contained" onClick={() => setOverlayVisible(true)}>SIGN ME UP</Button>
        {overlayVisible && (
          <Overlay>
            <NewsLetterSignUpPage onClose={() => setOverlayVisible(false)} />
          </Overlay>
        )}
      </Box>
    </Box>
  );
};
