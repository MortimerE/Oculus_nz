import React, { useState, useContext } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Radio} from '@mui/icons-material';  // Replace with podcast icons or images
import AppContext from '../../../contexts/AppContext';

const Underline = styled('hr')({
  borderColor: '#000000',
  borderWidth: '1px',
});

const PodcastImage = styled('img')({
  width: '100%',
  height: 'auto',
});

export const Podcast = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', padding: '32px' }}>
      <Box sx={{ flex: '1', paddingRight: '16px' }}>
        <Typography variant="h3" gutterBottom>PODCASTS</Typography>
        <Typography variant="h5" gutterBottom>THE 20 DEGREE PODCAST</Typography>
        <Underline />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <PodcastImage src="podcast-placeholder.jpg" alt="Podcast" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Season 1: Building Science Fundamentals</Typography>
            <Typography variant="body1">Season 2: New Zealand Building Code One episode per code clause</Typography>
            <Typography variant="body1">Season 3: Assemblies & Materials</Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: '16px' }}>
            <div
                dangerouslySetInnerHTML={{
                __html: `
                    <iframe src="https://open.spotify.com/embed-podcast/show/2XAVUE9618A37iR6HQPuZc" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                `,
                }}
            />
        </Box>
        <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'space-around' }}>
          <IconButton onClick={() => window.open('https://open.spotify.com/show/2XAVUE9618A37iR6HQPuZc', '_blank')}>
            <Radio />
          </IconButton>
          <IconButton onClick={() => window.open('https://podcasts.apple.com/us/podcast/the-20-degree-podcast/id1670757626', '_blank')}>
            <Radio />
          </IconButton>
          {/* Repeat for other platforms */}
        </Box>
      </Box>

      <Box sx={{ flex: '1', paddingLeft: '16px' }}>
        <Typography variant="body1">
          The 20 Degree podcast, hosted by Peter Raimondo + Jon Davies, is a building science podcast discussing the basics of the building enclosure and how it affects the people inside.
        </Typography>
        <Typography variant="body1">
          They keep it fun but technical and go on heaps of tangents as they explore the niches and nuances of how to keep the inside in and the outside out.
        </Typography>
        <Typography variant="body1">
          Learn and laugh in the office or on your drive to work while you hear about how to design and install a high performance building envelope.
        </Typography>
      </Box>
    </Box>
  );
};

export const Podcast2 = () => {
    const navigate = useNavigate();
    const {state, api} = useContext(AppContext);
    const { scrollTo } = state;
const { setScrollTo } = api;

    const handleScroll = (scrollTarget) => {
      setScrollTo(scrollTarget);
    };
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh', padding: '32px' }}>
        <Box sx={{ flex: '1', paddingRight: '16px' }}>
          <Typography variant="h3" gutterBottom>PODCASTS</Typography>
          <Typography variant="h5" gutterBottom>GAB LEARNS</Typography>
          <Underline />
          <Typography variant="body1">
            Gab asks the questions every Kiwi wants answers to.... and Peter helps out. As a Senior Building Enclosure Engineer at Oculus Architectural Engineering Ltd Peter explains the fundamentals of buildings, gives real-life examples and advises on how to solve performance issues in our homes).Gab Learns is a building science podcast for everyone. Tune in to learn about your home - how you can make it warmer, dryer and more comfortable for yourself and your family. Gab will learn some things, you’ll learn some things, and if not, there'll be laughs along the way.Gab Learns! And so will you.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Read our Gab Learns blog articles here
          </Typography>
          <Link to="blog-articles" onClick={() => handleScroll('blog-articles')}>
          <Button variant="contained">BLOG ARTICLES</Button>
          </Link>
        </Box>
  
        <Box sx={{ flex: '1', paddingLeft: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <PodcastImage src="podcast-placeholder.jpg" alt="Podcast" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Season 1: XXXX</Typography>
              <Typography variant="body1">Season 2: XXXX</Typography>
              <Typography variant="body1">Season 3: XXXXX</Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: '16px' }}>
            <div
                dangerouslySetInnerHTML={{
                __html: `
                    <iframe src="https://open.spotify.com/embed-podcast/show/0US6qG9VxsLYIqCv3lmGba?si=d55c73d0591c47dc" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                `,
                }}
            />
        </Box>
          <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'space-around' }}>
            <IconButton onClick={() => window.open('https://open.spotify.com/show/0US6qG9VxsLYIqCv3lmGba?si=d55c73d0591c47dc', '_blank')}>
              <Radio />
            </IconButton>
            {/* Repeat for other platforms */}
          </Box>
        </Box>
      </Box>
    );
  };
  