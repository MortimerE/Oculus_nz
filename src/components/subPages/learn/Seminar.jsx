import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography, Grid, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Reader from '../../embeds/reader';
import { styled } from '@mui/system';
import AppContext from '../../../contexts/AppContext';
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

const Seminar = () => {
  const { itemId } = useParams();
  const { state } = useContext(AppContext);
  const { seminars, setScrollTo } = state;
  const [seminarData, setSeminarData] = useState(null);
  const [recommendedSeminars, setRecommendedSeminars] = useState([]);
  const endpoint = import.meta.env.VITE_STRAPIURL;
  const navigate = useNavigate();

  useEffect(() => {
    if (seminars) {
      const seminar = seminars.find(item => item.title.toLowerCase() === itemId);
      if (seminar) {
        setSeminarData(seminar);
      }
    }
  }, [itemId, seminars]);

  useEffect(() => {
    if(seminarData){
      if(seminarData.recIsRandom){
        let sameCategorySeminars = seminars.filter(seminar => seminar.category === seminarData.category && seminar.title !== seminarData.title);
        if(sameCategorySeminars.length === 0) {
          sameCategorySeminars = seminars.filter(seminar => seminar.title !== seminarData.title);
        }
        sameCategorySeminars.sort(() => Math.random() - 0.5);
        setRecommendedSeminars(sameCategorySeminars.slice(0, 3).map(seminar => seminar.title));
      } else if(seminarData.recommendations) {
        setRecommendedSeminars(seminarData.recommendations.split(", "));
      }
    }
  }, [seminarData, seminars]);

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const handleItemClick = (seminar) => {
    navigate(`/seminar/${seminar}`);
  };

  return seminarData ? (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Box sx={{ flex: '1 1 auto', pr: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {seminarData.title}
        </Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>
          {seminarData.abstract}
        </Typography>
        <RouterLink to="/" onClick={() => handleScroll('enquire')}>
          <Button variant="contained" color="primary">
            Enquire Here
          </Button>
        </RouterLink>
        <Box mt={4}>
          <Typography variant="h6">Seminars You May Like:</Typography>
          <Underline />
          <Grid container spacing={2}>
            {recommendedSeminars.map((seminar, i) => (
              <Grid item xs={4} key={i}>
                <GridItem onClick={() => handleItemClick(seminar)}>
                  {seminar}
                </GridItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ flex: '1 1 auto', pl: 2, maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
        <Container sx={{ height: '45%', marginBottom: '2rem' }}>
          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${seminarData.videoEmbed}`} title={seminarData.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </Container>
        <Container sx={{ height: '45%' }}>
          <Reader file={endpoint + seminarData.slides.data.attributes.url} />
        </Container>
      </Box>
    </Box>
  ) : (
    <p>Loading...</p>
  );
};

export default Seminar;
