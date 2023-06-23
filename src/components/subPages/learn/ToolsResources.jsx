import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Requests from '../contact/Requests';


const Underline = styled('hr')({
  borderColor: '#000000',
  borderWidth: '1px',
});

const GridItem = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: theme.spacing(1),
  boxSizing: 'border-box',
  borderRadius: '8px',
  cursor: 'pointer',
}));



const toolsAndResourcesItems = [
  "NZBC H1 CHANGES SUMMARY",
  "BADER VENTURA CASE STUDY",
  "HOMESTAR V5",
  "THE PARKA WRAP",
  "HOW TO DESIGN DRY DURABLE...",
  "SUMMER PLANNING GUIDE",
  "BUILD WITH WARM ROOFS",
  "VENTILATION SYSTEMS",
  "HEALTHY HOMES GUIDE",
  "FIRE COMPLIANCE OF CLADDING SYSTEMS",
  "RETROFITTINF WALL INSULATION",
  "HEALTHY HOME - SUMMER KIT",
  "HEALTHY HOME - WINTER KIT",
  "HEALTHY HOME GUIDE",
  "H1 Pathway"
];

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

export const ToolsResources = () => {
  const navigate = useNavigate();

  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleItemClick = (itemName) => {
    const formattedName = itemName.toLowerCase().replaceAll(' ', '');
    navigate(`/learn/${formattedName}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', padding: '32px' }}>
      <Box sx={{ flex: '1', paddingRight: '16px' }}>
        <Typography variant="h3" gutterBottom>Tools & Resources</Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>These resources have been created by Oculus to provide advice and guidance. All resource articles follow international best practice, and are backed by science.</Typography>
        <Typography variant="body1" fontWeight="bold">Is there any specific topic you’d like to learn about / require help with? Drop them below</Typography>
        <Button variant="contained" onClick={() => setOverlayVisible(true)}>I Would Like to Learn About...</Button>
        {overlayVisible && (
          <Overlay>
            <Requests onClose={() => setOverlayVisible(false)} />
          </Overlay>
        )}
      </Box>

      <Box sx={{ flex: '1', paddingLeft: '16px', overflowY: 'auto' }}>
        <Grid container spacing={2}>
          {toolsAndResourcesItems.map((item, index) => (
            <Grid item xs={4} key={index}>
              <GridItem onClick={() => handleItemClick(item)}>{item}</GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ToolsResources;
