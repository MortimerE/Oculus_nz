import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Button } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const ArticleReader = ({ data }) => {
  const viewerRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const publishedOn = "July 1, 2023"; 
  
  const shareArticle = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  }

  const toggleFullscreen = () => {
    if (viewerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      } else {
        viewerRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    }
  }

  return (
    <Box 
      ref={viewerRef} 
      sx={{ 
        color: 'white', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        justifyContent: 'center', 
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <Box sx={{color: 'black'}}>
      <Button 
        variant="text" 
        color="inherit" 
        onClick={toggleFullscreen} 
        sx={{ position: 'absolute', top: '3%', right: '0%' }}
      >
        <FullscreenIcon />
      </Button>
      </Box>

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', color: 'black' }}>
        <Box sx={{ height: isFullscreen ? 'auto' : '50vh', overflowY: 'auto', paddingTop: '5vh' }}>
          <ReactMarkdown children={data} />
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignSelf: 'flex-start',
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
            border: '2px solid white',
            gap: '5vw',
          }}
        >
          <Button variant="text" color="inherit" onClick={shareArticle}>
            Share Link
          </Button>
          <Button variant="text" color="inherit" sx={{ whiteSpace: 'nowrap'}}>
            {publishedOn}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleReader;


