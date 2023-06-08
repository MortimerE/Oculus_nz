import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Link } from 'react-scroll';

const Contact = () => {
  const [activeComponent, setActiveComponent] = useState('contact');
  const [imageUrl, setImageUrl] = useState('./vite.svg'); // state to hold the image URL

  const handleEnquireClick = () => {
    // to be implemented...
  };

  return (
    <div>
      {activeComponent === 'contact' && (
        <Box
          sx={{
            flexGrow: 1,
            padding: (theme) => theme.spacing(4),
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                underline="true"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '28px',
                  marginBottom: (theme) => theme.spacing(2),
                }}
              >
                WE'D LOVE TO HEAR FROM YOU
              </Typography>
              <Typography variant="h4" gutterBottom>
                Do you want to work with us?
              </Typography>
              <Link
                to="enquire" // this should be the exact name you used in Element component in HomePage
                spy={true}
                smooth={true}
                duration={500} // Time in milliseconds for the scroll event
              >
                <Button variant="contained" color="primary">
                  Enquire Here
                </Button>
              </Link>
              <Typography variant="body2" gutterBottom>
                General <br/>
                09 123 456 <br/>
                Accounts <br/>
                027 863 7263 <br/>
                If you have current services with us and you need urgent help <br/>
                0225601312 
              </Typography>
              <Typography variant="body2" gutterBottom>
                We prefer video conferencing, it saves time and allows us to connect from anywhere in NZ
              </Typography>
            </Grid>
            <Grid item xs={1} md={1}>
              <img src={imageUrl} alt="Map" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Contact;



