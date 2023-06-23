import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const NewsletterSignUpPage = ({ onClose }) => {
  const handleSubmit = () => {
    // Implement newsletter sign-up logic here
    onclose();
  };

  return (
    <Box
      sx={{
        p: 4,
        background: '#fff',
        maxWidth: '80vw',
        width: '80%',
        borderRadius: '15px',
        margin: 'auto',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 2, right: 2 }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Sign Me Up
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Want to stay in touch? Subscribe to our newsletter!
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField fullWidth label="First Name" />
            </Grid>
            <Grid item>
              <TextField fullWidth label="Last Name" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField fullWidth label="Company Name" />
            </Grid>
            <Grid item>
              <TextField fullWidth label="Email" type="email" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default NewsletterSignUpPage;
