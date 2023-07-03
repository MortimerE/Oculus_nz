import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext'; // replace YOUR_CONTEXT
import Reader from '../../embeds/reader';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Underline = styled('hr')({
  borderColor: '#000000',
  borderWidth: '1px',
});

const GridItem = styled(Box)(({ theme }) => ({
  background: "#f5f5f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  aspectRatio: "1/1",
  padding: theme.spacing(1),
  boxSizing: "border-box",
  borderRadius: "8px",
  cursor: "pointer",
  color: "#000000",
}));

const Resource = () => {
  const { itemId } = useParams();
  const { state } = useContext(AppContext);
  const { resources, setScrollTo } = state;
  const [resourceData, setResourceData] = useState(null);
  const [recommendedResources, setRecommendedResources] = useState([]);
  const endpoint = import.meta.env.VITE_STRAPIURL;

  useEffect(() => {
    if (resources) {
      const resource = resources.find(item => item.title.toLowerCase() === itemId);
      if (resource) {
        setResourceData(resource);
      }
    }
  }, [itemId, resources]);

  useEffect(() => {
    if(resourceData){
      if(resourceData.recIsRandom){
        // Filter out all resources in the same category
        let sameCategoryResources = resources.filter(resource => resource.category === resourceData.category && resource.title !== resourceData.title);
        if(sameCategoryResources.length === 0) {
          // If no resources in the same category, use all resources
          sameCategoryResources = resources.filter(resource => resource.title !== resourceData.title);
        }
        // Randomize and pick up to three
        sameCategoryResources.sort(() => Math.random() - 0.5);
        setRecommendedResources(sameCategoryResources.slice(0, 3).map(resource => resource.title));
      } else if(resourceData.recommendations) {
        setRecommendedResources(resourceData.recommendations.split(", "));
      }
    }
  }, [resourceData, resources]);

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const handleItemClick = (resource) => {
    navigate(`/resource/${resource}`);
  };

  return resourceData ? (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box sx={{ flex: '1 1 auto', pr: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {resourceData.title}
        </Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>
          {resourceData.abstract}
        </Typography>
        <RouterLink to="/" onClick={() => handleScroll('enquire')}>
          <Button variant="contained" color="primary">
            Enquire Here
          </Button>
        </RouterLink>
        <Box mt={4}>
          <Typography variant="h6">Resources You May Like:</Typography>
          <Underline />
          <Grid container spacing={2}>
            {recommendedResources.map((resource, i) => (
              <Grid item xs={4} key={i}>
                <GridItem onClick={() => handleItemClick(resource)}>
                  {resource}
                </GridItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 auto', pl: 2, maxHeight: '90vh' }}>
        <Reader file={endpoint + resourceData.pdf.data.attributes.url} /> {/* PDF viewer component with file passed as prop */}
      </Box>
    </Box>
  ) : (
    <p>Loading...</p>
  );
};

export default Resource;

