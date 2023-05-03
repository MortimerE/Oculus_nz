import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const Manage = () => {
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const handleEdit = () => {
    // Implement edit logic here
  };

  const handleSave = () => {
    // Implement save logic here
  };

  const handleResetPassword = () => {
    // Implement reset password logic here
  };

  const handleDeleteAccount = () => {
    setShowDeleteForm(true);
  };

  const handleDeleteAccountNow = () => {
    // Implement delete account logic here
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Your Profile
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Personal Details
      </Typography>
      <Grid container direction="column" spacing={2} alignItems="flex-start">
        <Grid item>
          <TextField fullWidth label="Name" />
        </Grid>
        <Grid item>
          <TextField fullWidth label="Email" type="email" />
        </Grid>
        <Grid item>
          <TextField fullWidth label="Occupation" />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Receive Newsletter"
          />
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={handleEdit}>
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="text" color="primary" onClick={handleResetPassword}>
            Reset Password
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            color="error"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: showDeleteForm ? 'block' : 'none',
          p: 4,
        }}
      >
        <Typography variant="h5" align="right" sx={{ mb: 2 }}>
          Farewell
        </Typography>
        <Typography paragraph>
          We are sad to see you go! Please share the reason of leaving and any
          other feedback you might have below. Rest assured your personal
          information will be deleted from our database.
        </Typography>
        <Grid container direction="column" spacing={2} alignItems="flex-end">
          <Grid item>
            <TextField fullWidth label="Confirm your email" type="email" />
          </Grid>
          <Grid item>
            <TextField fullWidth label="Confirm your password" type="password" />
          </Grid>
          <Grid item>
            <TextField fullWidth label="Reason for deleting your account" />
          </Grid>
          <Grid item>
            <TextField fullWidth label="Feedback" />
          </Grid>
          <Grid item>
            <Button variant="contained" color="error" onClick={handleDeleteAccountNow}>
              Delete Account Now
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Manage;

