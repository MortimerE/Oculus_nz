import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

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

const H1ChangesItems = [
  "CHANGES SUMMARY",
  "WHAT ARE THE CHANGES",
  "ROOFS",
  "WINDOWS",
  "IMPACT OF SLAB EDGES",
  "AIRTIGHTNESS",
  "HEATING & VENTILATION",
  "THERMAL BRIDGING",
  "H1 Pathway"
];

export const H1Changes = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    const formattedName = itemName.toLowerCase().replaceAll(' ', '');
    navigate(`/learn/h1changes/${formattedName}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', height: '100vh', padding: '32px' }}>
      <Box sx={{ flex: '1', paddingLeft: '16px' }}>
        <Typography variant="h3" gutterBottom>NZBC H1 CHANGES 2022/23</Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>In 2021 the proposed change for NZBC H1 were released, and new efficiency measures became effective from 29th November 2021. With the announcement and change came many questions – check out our H1 FAQ page or if you have a question that needs answering, drop us a line below!
        
        We can help you with finding an H1 pathway & energy modelling - get in touch now!</Typography>
        <ScrollLink to="contact" spy={true} smooth={true}>
          <Button variant="contained">ENQUIRE HERE</Button>
        </ScrollLink>
      </Box>

      <Box sx={{ flex: '1', paddingRight: '16px', overflowY: 'auto' }}>
        <Grid container spacing={2}>
          {H1ChangesItems.map((item, index) => (
            <Grid item xs={4} key={index}>
              <GridItem onClick={() => handleItemClick(item)}>{item}</GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default H1Changes;
