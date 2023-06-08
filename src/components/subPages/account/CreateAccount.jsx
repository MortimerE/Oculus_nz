import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const AccountCreation = () => {
  const handleSubmit = () => {
    // Implement account creation logic here
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Sign up to access Oculus' Technical Library
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Unlimited access to our technical library includes:
        <ul>
          <li>Detail drawings</li>
          <li>Engineering Judgements</li>
          <li>H1 Navigator</li>
        </ul>
        We regularly add new content and will notify you when we update
        existing content that you have downloaded.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField fullWidth label="Name" />
            </Grid>
            <Grid item>
              <TextField fullWidth label="E-MAIL" type="email" />
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel id="occupation-label">Occupation</InputLabel>
                <Select labelId="occupation-label">
                  <MenuItem value="occupation1">Occupation 1</MenuItem>
                  <MenuItem value="occupation2">Occupation 2</MenuItem>
                  <MenuItem value="occupation3">Occupation 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Would you like to receive News from Oculus"
              />
            </Grid>
            <Grid item>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                By ticking 'yes', you will sign up to our every so often
                Newsletter.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField fullWidth label="Create Password" type="password" />
            </Grid>
            <Grid item>
              <TextField fullWidth label="Repeat Password" type="password" />
            </Grid>
            <Grid item container spacing={2}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid>
              <Grid item>
                <Typography>
                  Thank you for signing up to receive access to our technical
                  library. You will receive a confirmation e-mail shortly.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountCreation;
