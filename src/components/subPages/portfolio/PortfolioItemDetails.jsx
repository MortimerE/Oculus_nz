import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext';
import Reader from '../../embeds/reader';
import { styled } from '@mui/system';

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

const PortfolioItemDetails = ({ item }) => {
  const { state, api } = useContext(AppContext);
  const { setScrollTo, portfolio } = state;
  const navigate = useNavigate();

  const [recommendedPortfolios, setRecommendedPortfolios] = useState([]);
  const endpoint = import.meta.env.VITE_STRAPIURL;
  const pdf = endpoint+item.pdf.data.attributes.url;

  useEffect(() => {
    if(item){
      if(item.recIsRandom){
        // Filter out all portfolios in the same category
        let sameCategoryPortfolios = portfolio.filter(portfolio => portfolio.category === item.category && portfolio.title !== item.title);
        if(sameCategoryPortfolios.length === 0) {
          // If no portfolios in the same category, use all portfolios
          sameCategoryPortfolios = portfolio.filter(portfolio => portfolio.title !== item.title);
        }
        // Randomize and pick up to three
        sameCategoryPortfolios.sort(() => Math.random() - 0.5);
        setRecommendedPortfolios(sameCategoryPortfolios.slice(0, 3).map(portfolio => portfolio.title));
      } else if(item.recommendations) {
        setRecommendedPortfolios(item.recommendations.split(", "));
      }
    }
  }, [item, portfolio]);

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const handleItemClick = (portfolio) => {
    navigate(`/portfolio/${portfolio}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box sx={{ flex: '1 1 auto', pr: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {item.title}
        </Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>
          {item.abstract}
        </Typography>
        <RouterLink to="/" onClick={() => handleScroll('enquire')}>
          <Button variant="contained" color="primary">
            Enquire Here
          </Button>
        </RouterLink>
        <Box mt={4}>
          <Typography variant="h6">You Might Also Like:</Typography>
          <Underline />
          <Grid container spacing={2}>
            {recommendedPortfolios.map((portfolio, i) => (
              <Grid item xs={4} key={i}>
                <GridItem onClick={() => handleItemClick(portfolio)}>
                  {portfolio}
                </GridItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 auto', pl: 2, maxHeight: '90vh' }}>
        <Reader file={pdf} /> {/* PDF viewer component with file passed as prop */}
      </Box>
    </Box>
  );
};

export default PortfolioItemDetails;


