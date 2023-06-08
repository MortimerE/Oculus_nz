import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const NewsletterSignUpPage = () => {
  const handleSubmit = () => {
    // Implement newsletter sign-up logic here
  };

  return (
    <Box sx={{ p: 4 }}>
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
