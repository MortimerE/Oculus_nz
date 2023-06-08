import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAuth } from '../auth';  // assuming you have an authentication context

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const useStyles = makeStyles((theme) => ({
  viewerContainer: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  buttonsContainer: {
    marginTop: theme.spacing(2),
  },
}));

const PdfViewer = ({ file }) => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { isAuthenticated } = useAuth();  // assuming you have an authentication context

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!isAuthenticated) {
    return (
      <Box className={classes.viewerContainer}>
        <Typography variant="h5">Please log in to view this content.</Typography>
      </Box>
    );
  }

  return (
    <Box className={classes.viewerContainer}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <Typography variant="subtitle1">Page {pageNumber} of {numPages}</Typography>
      <Box className={classes.buttonsContainer}>
        <Button variant="contained" disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
          Prev Page
        </Button>
        <Button variant="contained" disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
          Next Page
        </Button>
      </Box>
    </Box>
  );
};

export default PdfViewer;
