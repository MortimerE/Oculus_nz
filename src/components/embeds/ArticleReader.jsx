import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Button, Typography } from '@mui/material';
//import gfm from 'remark-gfm'; // optional, for Github flavored markdown

// const { isAuthenticated } = useAuth(); // Uncomment if auth is needed

const ArticleReader = ({ data }) => {
  //const { isAuthenticated } = useAuth(); // Uncomment if auth is needed
  const viewerRef = useRef();

  const shareArticle = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }

  const toggleFullscreen = () => {
    if (viewerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        viewerRef.current.requestFullscreen();
      }
    }
  }

  /*if (!isAuthenticated) {
    return (
      <Box sx={{ backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Typography variant="h5">Please log in to view this content.</Typography>
      </Box>
    );
  }*/

  return (
    <Box ref={viewerRef} sx={{ backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '90vh', overflowY: 'auto' }}>
      {/* <ReactMarkdown plugins={[gfm]} children={data} /> Use this if you have gfm */}
      <ReactMarkdown children={data} />
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" onClick={toggleFullscreen}>
          Toggle Full Screen
        </Button>
        <Button variant="contained" onClick={shareArticle}>
          Share Link
        </Button>
      </Box>
    </Box>
  );
};

export default ArticleReader;
