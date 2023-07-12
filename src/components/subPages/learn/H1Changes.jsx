import { Box, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext';
import PinkButton from '../../reusable/PinkButton';

const Underline = styled('hr')({
  borderColor: '#000000',
  borderWidth: '1px',
});

const GridItem = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1/1',
  height: '100%',
  padding: theme.spacing(1),
  boxSizing: 'border-box',
  borderRadius: '8px',
  cursor: 'pointer',
  color: '#000000',
}));

export const H1Changes = () => {
  const navigate = useNavigate();

  // Get the resources data from the context
  const { state, api } = useContext(AppContext);
  const { resources, scrollTo } = state;
  const { setScrollTo } = api;

  const [h1UpdateResources, setH1UpdateResources] = useState([]);

  useEffect(() => {
    if (resources) {
      setH1UpdateResources(resources.filter(resource => resource.isH1Update));
    }
  }, [resources]);

  const handleItemClick = (resource) => {
    const formattedName = resource.title.toLowerCase().replaceAll(' ', '');
    navigate(`/learn/h1-changes/${formattedName}`);
  };

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', height: '100vh', padding: '32px' }}>
      <Box sx={{ flex: '1', paddingLeft: '16px', gap: '16px' }}>
        <Typography variant="h3" gutterBottom>NZBC H1 CHANGES 2022/23</Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>In 2021 the proposed change for NZBC H1 were released, and new efficiency measures became effective from 29th November 2021. With the announcement and change came many questions – check out our H1 FAQ page or if you have a question that needs answering, drop us a line below!
        
        We can help you with finding an H1 pathway & energy modelling - get in touch now!</Typography>
        <Link to="/" onClick={() => handleScroll('enquire')}>
          <PinkButton onClick={() => {}} text={'ENQUIRE HERE'} />
        </Link>
      </Box>

      <Box sx={{ flex: '1', paddingRight: '16px', overflowY: 'auto' }}>
        <Grid container spacing={2}>
          {h1UpdateResources.map((resource, index) => (
            <Grid item xs={4} key={index}>
              <GridItem onClick={() => handleItemClick(resource)}>{resource.title}</GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default H1Changes;

