import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const LoginPage = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submit logic here
  };

  const handleForgotPassword = () => {
    setShowResetPassword(true);
  };

  const handleResetPassword = () => {
    // Implement reset password logic here
  };

  const handleRegister = () => {
    // Implement register logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Log in to access Oculus' technical library
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2} alignItems="flex-start">
          <Grid item>
            <TextField
              required
              fullWidth
              label="Email"
              type="email"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleForgotPassword}
              >
                Forgot Password
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: showResetPassword ? 'block' : 'none',
          p: 4,
        }}
      >
        <Typography variant="h5" align="right" sx={{ mb: 2 }}>
          Reset Password
        </Typography>
        <Grid container direction="column" spacing={2} alignItems="flex-end">
          <Grid item>
            <TextField
              fullWidth
              label="Email"
              type="email"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleResetPassword}
            >
              Reset Password Now
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="text"
        color="primary"
        onClick={handleRegister}
        sx={{ mt: 2 }}
      >
        Register/Create New Account
      </Button>
    </Box>
  );
};

export default LoginPage;
