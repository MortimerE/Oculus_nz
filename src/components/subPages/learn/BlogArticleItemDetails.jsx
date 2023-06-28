import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import AppContext from '../../../contexts/AppContext';
import Reader from '../../embeds/reader'; // replace this with the correct path
import { styled } from '@mui/system';

const Underline = styled('hr')({
  borderColor: '#000000',
  borderWidth: '1px',
});

const BlogArticleItemDetails = ({ item }) => {
  const { state, api } = useContext(AppContext);
  const { setScrollTo } = state;

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const recommendedArticles = [item.reccomendation1, item.reccomendation2, item.reccomendation3]; // replace with your actual recommended articles
  const endpoint = import.meta.env.VITE_STRAPIURL;
  const pdf = endpoint+item.pdf.data.attributes.url;
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '32px', height: '100vh' }}>
      <Box sx={{ width: '40%', paddingRight: '32px' }}>
        <Typography variant="h3" gutterBottom>{item.title}</Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>{item.abstract}</Typography>

        <Typography variant="body1" fontWeight="bold">Got a similar topic & you'd like to engage us?</Typography>
        <RouterLink to="/" onClick={() => handleScroll('enquire')}>
          <Button variant="contained" color="primary">
            Enquire Here
          </Button>
        </RouterLink>

        <Typography variant="h6" gutterBottom>You might also like</Typography>
        <Underline />
        {recommendedArticles.map((article, i) => (
            <Typography key={i} variant="body2">
              {article}
            </Typography>
          ))}

      </Box>

      <Box sx={{ width: '60%', display: 'flex', justifyContent: 'space-between' }}>

      <Box sx={{ flex: '1 1 auto', pl: 2 }}>
        <Reader file={pdf} /> {/* PDF viewer component with file passed as prop */}
      </Box>
      </Box>
    </Box>
  );
};

export default BlogArticleItemDetails;
