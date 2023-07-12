import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Box, Typography } from '@mui/material';
//import { useAuth } from '../auth';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Reader = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  //const { isAuthenticated } = useAuth();
  const viewerRef = useRef();

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
    <Box ref={viewerRef} sx={{ backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <Typography variant="subtitle1">Page {pageNumber} of {numPages}</Typography>
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
          Prev Page
        </Button>
        <Button variant="contained" disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
          Next Page
        </Button>
        <Button variant="contained" onClick={downloadPdf}>
          Download PDF
        </Button>
        <Button variant="contained" onClick={toggleFullscreen}>
          Toggle Full Screen
        </Button>
        <Button variant="contained" onClick={sharePdf}>
          Share Link
        </Button>
      </Box>
    </Box>
  );
};

export default Reader;



