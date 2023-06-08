import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Underline = styled('hr')({
  borderColor: '#000000',
  borderWidth: '1px',
});

export const Associations = () => {
  // Here's a list of placeholder images. You can replace this with your own list fetched from an API.
  const images = Array(9).fill('https://via.placeholder.com/150');

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginLeft: '64px',
        marginRight: '64px',
      }}
    >
      <Box
        sx={{
          width: '45%',
          height: '75%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '32px',
        }}
      >
        <Typography variant="h1">Associations</Typography>
        <Underline />
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={4} key={index}>
              <img src={image} alt={`Association ${index + 1}`} style={{ width: '100%' }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
