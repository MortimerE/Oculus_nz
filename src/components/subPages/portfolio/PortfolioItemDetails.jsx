import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import AppContext from '../../../contexts/AppContext';
import Reader from '../../embeds/reader'; // replace this with the correct path

const PortfolioItemDetails = ({ item }) => {
  const { state, api } = useContext(AppContext);
  const { setScrollTo } = state;

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const recommendedArticles = ["Article 1", "Article 2", "Article 3"]; // replace with your actual recommended articles
  const endpoint = import.meta.env.VITE_STRAPIURL;
  const pdf = endpoint+item.pdf.data.attributes.url;

  console.log(pdf);
    return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box sx={{ flex: '1 1 auto', pr: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {item.description}
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

export default PortfolioItemDetails;

