import React, { useState, useContext, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Register from '../contact/Register';
import AppContext from '../../../contexts/AppContext';

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
  aspectRatio: '1/1',
  padding: theme.spacing(1),
  boxSizing: 'border-box',
  borderRadius: '8px',
  cursor: 'pointer',
  color: '#000000',
}));

const UpcomingSeminars = [
  { date: "30/03/2023", title: "H1 - Examples of compliant assemblies" },
  { date: "27/04/2023", title: "H1 - Costing – No, it doesn't cost more" },
  { date: "25/05/2023", title: "Blower door testing and implementation on a multi-unit state-housing Passive House development" },
  { date: "27/07/2023", title: "Tanking Fundamentals" },
  { date: "31/08/2023", title: "Building improvements and their energy use impact" },
  { date: "28/09/2023", title: "The difference between code compliant and actually good" },
  { date: "26/10/2023", title: "Best practice for upgrading existing roofs" },
  { date: "30/11/2023", title: "How to keep your house cool" }
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

export const ScienceSeminars = () => {
  const navigate = useNavigate();

  const { state } = useContext(AppContext);
  const { seminars } = state;
  const [seminarItems, setSeminarItems] = useState([]);

  useEffect(() => {
    if (seminars) {
      setSeminarItems(seminars || []);
    }
  }, [seminars]);

  const handleItemClick = (item) => {
    const formattedName = item.title.toLowerCase().replaceAll(' ', '');
    navigate(`/learn/seminars/${formattedName}`);
  };

  const watchAllSeminars = () => {
    let results = [];
    if (seminars) {
      seminars.forEach((item) => {
        results.push({ type: 'Seminar', ...item });
      });
    }
    navigate('/search', { state: { results, keywords: '' } });
  };


  const [overlayVisible, setOverlayVisible] = useState(false);

  // Filter seminars where 'isFeatured' is true
  const featuredSeminars = seminarItems.filter(seminarItems => seminarItems.isFeatured);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', height: '100vh', padding: '32px' }}>
      <Box sx={{ flex: '1', paddingLeft: '16px' }}>
        <Typography variant="h3" gutterBottom>BUILDING SCIENCE + BULLSH*T SEMINARS</Typography>
        <Typography variant="h5" gutterBottom>UPCOMING SEMINARS IN 2023</Typography>
        <Underline />
        <Box>
          {UpcomingSeminars.map((seminar, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <Typography variant="body1">{seminar.date}</Typography>
              <Typography variant="body1">{seminar.title}</Typography>
            </Box>
          ))}
        </Box>
        <Button variant="contained" onClick={() => setOverlayVisible(true)}>REGISTER HERE</Button>
        {overlayVisible && (
          <Overlay>
            <Register onClose={() => setOverlayVisible(false)} />
          </Overlay>
        )}
      </Box>
  
      <Box sx={{ flex: '1', paddingRight: '16px', overflowY: 'auto' }}>
        <Typography variant="h5" gutterBottom>RECENT SEMINARS</Typography>
        {seminarItems === null ? (
          <p>Loading...</p> // Replace with your own loading component
        ) : (
          <Grid container spacing={2}>
            {seminarItems.map((item, index) => (
              <Grid item xs={4} key={index}>
                <GridItem onClick={() => handleItemClick(item)}>{item.title}</GridItem>
              </Grid>
            ))}
          </Grid>
        )}
        <Button variant="contained" onClick={watchAllSeminars}>REWATCH SEMINARS HERE</Button>
      </Box>
    </Box>
  );
            }  

export default ScienceSeminars;
