import React, { useState, useEffect } from 'react';
import {
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';

const Register = ({ onClose, selectedSeminars: defaultSeminars }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  //const [selectedSeminars, setSelectedSeminars] = useState([]);
  const [questions, setQuestions] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [receiveNews, setReceiveNews] = useState(false);

  const location = useLocation();
  const defaultSeminar = location.state?.seminar || [];

  const handleSeminarsChange = (event) => {
    setSelectedSeminars(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  const handleHowDidYouHearChange = (event) => {
    setHowDidYouHear(event.target.value);
  };

  const [selectedSeminars, setSelectedSeminars] = useState(defaultSeminar);

  useEffect(() => {
    setSelectedSeminars(defaultSeminar);
  }, [defaultSeminar]);
  

  return (
    <Dialog open onClose={onClose}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '10px' }}>
    <Typography variant="h6" component="div">
      Register Here
    </Typography>
    <IconButton onClick={onClose}>
      <CloseIcon />
    </IconButton>
  </Box>
      <DialogContent>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DialogTitle>
          Register Here
        </DialogTitle>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 2, right: 2 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h4" align="center" color="0000000">
          Register Here
        </Typography>
        <Typography variant="body1">
          Keen to join us for all our seminars in 2023? Register below! Thursdays,
          3:30pm - 4:30pm, online. Don't worry if you can't make it, we will send
          out a recording afterwards. (Online events only)
        </Typography>
        <hr />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          select
          label="Which seminars would you like to register for?"
          value={selectedSeminars}
          onChange={handleSeminarsChange}
          SelectProps={{
            multiple: true,
            renderValue: (selected) => selected.join(", "),
          }}
        >
          <MenuItem value="Seminar A">Seminar A</MenuItem>
          <MenuItem value="Seminar B">Seminar B</MenuItem>
          <MenuItem value="Seminar C">Seminar C</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Do you have any questions you'd like to have answered live?"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          select
          variant="outlined"
          name="howDidYouHear"
          label="How did you hear about this event?"
          value={howDidYouHear}
          onChange={handleHowDidYouHearChange}
        >
          <MenuItem value="Social media">Social media</MenuItem>
          <MenuItem value="Website">Website</MenuItem>
          <MenuItem value="Email">Email</MenuItem>
          <MenuItem value="Word of mouth">Word of mouth</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="receiveNews" color="primary" />}
          label="Would you like to receive news from Oculus?"
        />
        <Typography variant="body1" color="textSecondary">
          By ticking 'Yes', you will sign up for our every so often Newsletter.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
    </DialogContent>
    </Dialog>
  );
        }
        export default Register;