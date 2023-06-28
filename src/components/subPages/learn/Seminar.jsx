
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Reader from '../../embeds/reader'; // replace this with the correct path
import AppContext from '../../../contexts/AppContext'; // replace YOUR_CONTEXT

const seminar = () => {
  const [seminarData, setseminarData] = useState(null);
  const { seminarId } = useParams(); // Get the seminar ID from the URL
  
  // Context
  const { state } = useContext(AppContext); // replace YOUR_CONTEXT
  const { seminars } = state; // Ensure you have a 'seminars' state in your context
  const [seminarItems, setseminarItems] = useState([]);
  
  useEffect(() => {
    if (seminars) {
      setseminarItems(seminars || []);
    }
  }, [seminars]);

  useEffect(() => {
    // Find the specific item by its id from the context data
    const seminar = seminarItems.find(item => item.title === seminarId);
    if (seminar) {
      setseminarData(seminar);
    }
  }, [seminarId, seminarItems]); // Rerun this effect when the seminar ID or seminarItems array changes

  if (!seminarData) {
    return <p>Loading...</p>; // Replace with your own loading component
  }
  
  const { setScrollTo } = state;

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const recommendedArticles = [item.reccomendation1, item.reccomendation2, item.reccomendation3]; // replace with your actual recommended articles
  const endpoint = import.meta.env.VITE_STRAPIURL;
  const pdf = endpoint + seminarData.slides.data.attributes.url;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box sx={{ flex: '1 1 auto', pr: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {seminarData.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {seminarData.description}
        </Typography>
        <RouterLink to="/" onClick={() => handleScroll('enquire')}>
          <Button variant="contained" color="primary">
            Enquire Here
          </Button>
        </RouterLink>
        <Box mt={4}>
          <Typography variant="h6">Recommended Articles</Typography>
          {recommendedArticles.map((article, i) => (
            <Typography key={i} variant="body2">
              {article}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 auto', pl: 2 }}>
        <Reader file={pdf} /> {/* PDF viewer component with file passed as prop */}
      </Box>
    </Box>
  );
};

export default seminar;
