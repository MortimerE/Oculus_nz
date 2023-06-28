import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Reader from '../../embeds/reader'; // replace this with the correct path
import AppContext from '../../../contexts/AppContext'; // replace YOUR_CONTEXT

const Resource = () => {
  const { resourceId } = useParams().itemId;
  console.log(useParams().itemId);
  const { state } = useContext(AppContext);
  const { resources } = state;

  const [resourceData, setResourceData] = useState(null);

  useEffect(() => {
    if (resources) {
      const resource = resources.find(item => item.title.toLowerCase() === resourceId);
      console.log(resources);
      console.log(resourceId);
      console.log(resource);
      if (resource) {
        setResourceData(resource);
      }
    }
  }, [resourceId, resources]);

  if (!resourceData) {
    return <p>Loading...</p>; 
  }
  
  const { setScrollTo } = state;
  const handleScroll = (scrollTarget) => setScrollTo(scrollTarget);

  const recommendedArticles = [resourceData.reccomendation1, resourceData.reccomendation2, resourceData.reccomendation3];
  const endpoint = import.meta.env.VITE_STRAPIURL;
  const pdf = endpoint + resourceData.pdf.data.attributes.url;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box sx={{ flex: '1 1 auto', pr: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {resourceData.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {resourceData.description}
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

export default Resource;
