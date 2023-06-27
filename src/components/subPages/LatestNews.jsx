import React, { useState, useContext } from 'react';
import { Typography, Button, Grid, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Register from './contact/Register.jsx';
import AppContext from '../../contexts/AppContext';

// Styled Components
const Title = styled(Typography)`
  text-decoration: underline;
`;

const LatestNews = () => {
  const {state, api} = useContext(AppContext);
  const { latestNewsData } = state;

  const {
    featuredArticle,
    newestArticle,
    nextSeminar,
  } = latestNewsData;

  /* State for featured article
  const [featuredArticle, setFeaturedArticle] = useState({
    title: 'BADER VENTURA: FIRST SOCIAL HOUSING PASSIVE HOUSE IN NZ APPROACHING COMPLETION',
    link: '/featured-article' // Update this with the actual route or URL when available
  });

  // State for new article
  const [newestArticle, setNewArticle] = useState({
    title: 'NEW RESOURCE ON EXTERNAL INSULATION',
    link: '/new-article' // Update this with the actual route or URL when available
  });

  // State for next seminar
  const [nextSeminar, setNextSeminar] = useState({
    title: 'NEXT BUILDING SCIENCE + BULLSH*T SEMINAR: EXTERNAL INSULATION 02.03.2022',
    link: '/next-seminar', // Update this with the actual route or URL when available
    seminar: 'External Insulation' // This should be the exact seminar name in your registration form dropdown
  });*/

  const [showRegister, setShowRegister] = useState(false);

  // Function to handle the closure of Register overlay
  const closeRegister = () => {
    setShowRegister(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Typography variant="h1">Latest News</Typography>
            <Divider />
            <Typography variant="h4">{featuredArticle.title}</Typography>
            <Typography variant="body1">{featuredArticle.description}</Typography>
            <Button variant="contained" color="secondary">
                <Link to={featuredArticle.link}>READ HERE</Link>
            </Button>
            <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant="h6">{newestArticle.title}</Typography>
            <Button variant="contained" color="secondary">
                <Link to={newestArticle.link}>READ HERE</Link>
            </Button>
            <Typography variant="h6">{nextSeminar.title}</Typography>
            {/* Set showRegister to true when the button is clicked */}
            <Button variant="contained" color="secondary" onClick={() => setShowRegister(true)}>
                REGISTER HERE
            </Button>
        </Grid>
      </Grid>
      
      {/* Display the Register component as overlay if showRegister is true */}
      {showRegister && <Register onClose={closeRegister} selectedSeminars={[nextSeminar.seminar]} />}
    </div>
  );
};

export default LatestNews;
