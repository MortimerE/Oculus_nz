import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
//import { useAuth } from '../auth';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Reader = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const viewerRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);


  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateDimensions() {
      if (viewerRef.current) {
        setDimensions({
          width: viewerRef.current.clientWidth,
          height: viewerRef.current.clientHeight
        });
      }
    }

    window.addEventListener('resize', updateDimensions);
    updateDimensions(); // call once immediately to get initial dimensions

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // replace this with your actual date
  const publishedOn = "July 1, 2023"; 

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const downloadPdf = () => {
    window.open(file, '_blank');
  }

  const sharePdf = () => {
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
        backgroundColor: 'black', 
        color: 'white', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        height: isFullscreen ? 'auto' : '100%', // if fullscreen, don't restrict height
        position: 'relative',
        justifyContent: 'flex-start', // stack children from top
        overflowY: isFullscreen ? 'scroll' : 'hidden', // if fullscreen, allow vertical scrolling
      }}
    >

      <Button 
        variant="text" 
        color="inherit" 
        onClick={toggleFullscreen} 
        sx={{ position: 'absolute', top: '2%', right: '2%' }}
      >
        <FullscreenIcon />
      </Button>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Page 
          pageNumber={pageNumber} 
          width={dimensions.width*.65}
          height={dimensions.height*.7}
          renderTextLayer={false}
          renderAnnotationLayer={false}  
        />
      </Document>
  
      <Button 
        variant="text" 
        color="inherit" 
        startIcon={<ArrowBackIcon />} 
        disabled={pageNumber <= 1} 
        onClick={() => setPageNumber(pageNumber - 1)} 
        sx={{ position: 'absolute', top: '50%', left: '0%' }}
      />
      <Button 
        variant="text" 
        color="inherit" 
        startIcon={<ArrowForwardIcon />} 
        disabled={pageNumber >= numPages} 
        onClick={() => setPageNumber(pageNumber + 1)} 
        sx={{ position: 'absolute', top: '50%', right: '2%' }}
      />
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          border: '2px solid white', 
          width: `${dimensions.width * 0.65}px`, 
          alignSelf: 'center' // this makes sure this box aligns at center horizontally
        }}
      >
        <Button variant="text" color="inherit" onClick={sharePdf} sx={{ whiteSpace: 'nowrap',}}>
          Share
        </Button>
        <Button variant="text" color="inherit" onClick={downloadPdf} sx={{ whiteSpace: 'nowrap',}}>
          Download
        </Button>
        <Button variant="text" color="inherit" sx={{ whiteSpace: 'nowrap'}}>
          {publishedOn}
        </Button>
      </Box>
    </Box>
  );

};

export default Reader;



