import React from 'react';
import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const UnderlinedTitle = styled(Typography)(({ theme }) => ({
  textDecoration: 'underline',
  marginBottom: theme.spacing(2),
}));

const categoryOptions = [
  "Mould",
  "Insulation",
  "Building enclosure",
  "Gab Learns",
  "Building Science + Bullsh*t Seminars",
  "Videos",
];

const authorOptions = [
  "Shawn McIsaac",
  "James Powers",
  "Peter Raimondo",
  "Denise Martin",
  "Gab Davenport",
  "Angelika Gross",
];

const yearOptions = [
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

export const BlogBS = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', padding: '32px' }}>
      <Box sx={{ flex: '1', paddingRight: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <UnderlinedTitle variant="h3" gutterBottom>
            BLOG & BS
          </UnderlinedTitle>
          <Typography variant="body1" gutterBottom>
            These articles are a bit more editorial, opinionated, and off-the-cuff written by members of the team. They’re interesting and conversation-generating, but less definitive and polished.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
            Are you looking for some thoughts and rants about a specific topic? Drop it below.
          </Typography>
          <Button variant="contained" sx={{ marginBottom: '16px' }}>I WOULD LIKE TO LEARN ABOUT...</Button>
          <Box><Button variant="contained" onClick={() => navigate('/blog')}>OPEN BLOG</Button></Box>
        </Box>
      </Box>

      <Box sx={{ flex: '1', paddingLeft: '16px' }}>
        <Typography variant="h5" sx={{ textAlign: 'right' }} gutterBottom>
          SEARCH & FILTER
        </Typography>
        <Grid container spacing={2} marginBottom="16px">
          <Grid item xs={6}>
            <TextField select label="Category" variant="outlined" fullWidth SelectProps={{ native: true }}>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField select label="Author" variant="outlined" fullWidth SelectProps={{ native: true }}>
              {authorOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField select label="Time (Year)" variant="outlined" fullWidth SelectProps={{ native: true }}>
              {yearOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
              </option>
            ))}
          </TextField>
          </Grid>
          <Grid item xs={6}>
          <Button variant="contained">Apply Filter</Button>
        </Grid>
        </Grid>
        <Box component="form" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField label="Search keywords" variant="outlined" fullWidth />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};