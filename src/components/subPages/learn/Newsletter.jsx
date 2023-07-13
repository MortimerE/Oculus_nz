import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import NewsLetterSignUpPage from '../contact/NewsletterSignUp';
import PinkButton from '../../reusable/PinkButton';

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

  const [overlayVisible, setOverlayVisible] = useState(false);

  const newsletterUrl = '#'; // Replace with the URL to your newsletter sign up page

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', padding: '20px', paddingTop: "20vh" }}>
      <Box sx={{ alignSelf: "flex-start" }}>
        <img src="/antler.png" style={{ maxWidth: '50vw', maxHeight: '60vh', alignSelf: "flex-start", paddingLeft: "5vw" }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px', width: '50%', marginLeft: "10vw" }}>
        <Typography variant="h4" component="div" sx={{ textDecoration: 'underline' }}>
          STAY IN TOUCH
        </Typography>
        <Typography variant="h6" component="div">
          THE ANTLER - AN OCULUS NEWSLETTER
        </Typography>
        <Typography sx={{textAlign: 'right'}} variant="body1" component="div">
          Mess with the moose, and you’ll get the Antler. We like to provide regular news and updates about the stuff we’re up to and the things we think you need to know.
        </Typography>
        <Typography variant="body1" component="div">
          Interested in updates from us? Sign up below.
        </Typography>
        <PinkButton onClick={() => setOverlayVisible(true)} text='SIGN ME UP' />
        {overlayVisible && (
          <Overlay>
            <NewsLetterSignUpPage onClose={() => setOverlayVisible(false)} />
          </Overlay>
        )}
      </Box>
    </Box>
  );
};
