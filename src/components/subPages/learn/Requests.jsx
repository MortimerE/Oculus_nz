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

const RequestsPage = () => {
  const handleSubmit = () => {
    // Implement request submission logic here
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        I would like to learn about...
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Understanding what information you are looking for helps us create
        specific content for your needs. Please leave your topics of interest
        here and we will try our best to accommodate them in one of our future
        content pieces across our channels. Should you have a specific question
        we will be in touch shortly!
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
            <Grid item>
              <TextField fullWidth label="E-Mail" type="email" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel id="topics-label">Topics</InputLabel>
                <Select labelId="topics-label">
                  <MenuItem value="topic1">Topic 1</MenuItem>
                  <MenuItem value="topic2">Topic 2</MenuItem>
                  <MenuItem value="topic3">Topic 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Details/Specific Questions"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default RequestsPage;
