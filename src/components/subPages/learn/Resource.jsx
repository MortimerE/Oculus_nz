import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext'; // replace YOUR_CONTEXT
import Reader from '../../embeds/reader';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import PinkButton from '../../reusable/PinkButton';
import StyledDivider from '../../reusable/StyledDivider';

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
    <div
    style={{
      width: "100vw",
      height: "100vh",
      // height: "auto",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0vh 64px 5vh 64px",
      boxSizing: "border-box",
      scrollSnapAlign: 'start',
      // gap: '64px',
      // scrollSnapType: "y mandatory",
    }}
  >
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
      <Box sx={{ flex: '1 1 auto', pr: 2, maxWidth: '50%' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {resourceData.title.toUpperCase()}
        </Typography>
        <StyledDivider />
        <Typography variant="body1" gutterBottom>
          {resourceData.abstract}
        </Typography>
        <RouterLink to="/" onClick={() => handleScroll('enquire')}>
          <PinkButton text="ENQUIRE HERE" />
        </RouterLink>
        <Box mt={4}>
          <Typography variant="h6" sx={{marginBottom: '16px'}}>Resources You May Like:</Typography>
          <StyledDivider />
          <Grid container spacing={2} sx={{marginTop: '16px'}}>
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
      <Box sx={{ flex: '1 1 auto', pl: 2, maxHeight: '80vh', alignSelf: "flex-start" }}>
        <Reader file={endpoint + resourceData.pdf.data.attributes.url} /> {/* PDF viewer component with file passed as prop */}
      </Box>
    </Box>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Resource;
