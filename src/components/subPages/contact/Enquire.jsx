import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';
import DiscoveryCallOverlay from './DiscoveryCall';


const buildingTypes = ['Type A', 'Type B', 'Type C'];
const projectStages = ['Stage A', 'Stage B', 'Stage C'];

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

const Enquire = () => {

  const [overlayVisible, setOverlayVisible] = React.useState(false);
  const [isRequestCollected, setIsRequestCollected] = useState(false);

  const [projectLocation, setProjectLocation] = React.useState('');
  const [buildingType, setBuildingType] = React.useState('');
  const [isBookingCall, setIsBookingCall] = React.useState(false);

  const handleProjectLocationChange = (event) => {
    setProjectLocation(event.target.value);
  };

  const handleBuildingTypeChange = (event) => {
    setBuildingType(event.target.value);
  };

  const handleBookingButtonClick = () => {
    setIsBookingCall(true);
    setOverlayVisible(true);
  };
  
  const handleAttachmentChange = (event) => {
    // Implement attachment handling logic here
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submit logic here
  };

  return (
    <div
      sx={{
        flexGrow: 1,
        padding: (theme) => theme.spacing(4),
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          fontSize: '28px',
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        Enquire Here
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
        Thank you for your interest in working with us! Please fill in as much as you can so that we can make the most of our phone call together.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Name or Address of Project"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              select
              fullWidth
              label="Project Location"
              value={projectLocation}
              onChange={handleProjectLocationChange}
              variant="standard"
            >
              <MenuItem value="Location A">Location A</MenuItem>
              <MenuItem value="Location B">Location B</MenuItem>
              <MenuItem value="Location C">Location C</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Company Name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Your Full Name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Your Email"
              type="email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              label="Your Phone Number"
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              name="howCanWeHelp"
              label="How Can We Help You With Your Project?"
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              variant="outlined"
              name="buildingType"
              label="What Type of Building?"
            >
              {buildingTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              variant="outlined"
              name="projectStage"
              label="What Stage of Design is Your Project?"
            >
              {projectStages.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              name="otherInformation"
              label="Other Relevant Information"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="receiveNews" color="primary" />}
              label="Would you like to receive news from us?"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">
              Would you like to book a discovery call so we can discuss your enquiry?
            </Typography>
            <Button variant="contained" onClick={handleBookingButtonClick}>BOOK A CALL</Button>
            {isRequestCollected && <Typography variant="body2" color="success.main">Your booking request will be submitted with the enquiry form.</Typography>}
            {overlayVisible && (
              <Overlay>
                <DiscoveryCallOverlay onClose={() => setOverlayVisible(false)} isRequestCollected={setIsRequestCollected}/>
              </Overlay>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">
              Attachments:
            </Typography>
            <input
              type="file"
              name="attachments"
              onChange={handleAttachmentChange}
              multiple
            />
          </Grid>

        </Grid>
      </form>
    </div>
  );
              }

              export default Enquire;

