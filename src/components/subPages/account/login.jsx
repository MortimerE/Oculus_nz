import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

const LoginPage = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleResetPassword = (event) => {
    event.preventDefault();
    // Implement reset password logic here
    // Show confirmation message
    setConfirmation(true);
    // Hide confirmation message and close overlay after 3 seconds
    setTimeout(() => {
      setConfirmation(false);
      setShowResetPassword(false);
    }, 3000);
  };

  const handleClose = () => {
    setShowResetPassword(false);
  };


  const handleForgotPassword = () => {
    setShowResetPassword(true);
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
      <form onSubmit={handleResetPassword}>
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
      {showResetPassword && (
        <Overlay>
          <Box
            sx={{
              backgroundColor: 'white',
              padding: (theme) => theme.spacing(4),
              borderRadius: '8px',
              position: 'relative', // Needed to position the close button absolutely
            }}
          >
            <IconButton
              sx={{ position: 'absolute', top: 8, right: 8 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            {!confirmation ? (
              <>
            <Typography variant="h5" align="right" sx={{ mb: 2 }}>
              Reset Password
            </Typography>
            <form onSubmit={handleResetPassword}>
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
            </form>
            </>
            ) : (
              <Typography variant="h5" align="center">
                A reset password link has been sent to your email.
              </Typography>
            )}
          </Box>
        </Overlay>
      )}
      <Link to="/signup">
      <Button
        variant="text"
        color="primary"
        onClick={handleRegister}
        sx={{ mt: 2 }}
      >
        Register/Create New Account
      </Button></Link>
    </Box>
  );
};

export default LoginPage;
