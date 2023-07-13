import React, { useState, useEffect } from 'react';
import {
  Box,
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
import PinkButton from '../../reusable/PinkButton';

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
    <Dialog open onClose={onClose}
    PaperProps={{
      sx: {
        p: 4,
        backgroundColor: 'black',
        maxWidth: '80vw',
        width: '80%',
        borderRadius: '15px',
        borderColor: '#999',
        borderWidth: '1px',
        borderStyle: 'solid',
        margin: 'auto',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      },
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid gray', padding: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', backgroundColor: 'black', }}>
      <Typography variant="h4" sx={{ mb: 2, color: 'white' }}>
      Register Here
    </Typography>
    <IconButton onClick={onClose} sx={{ position: 'absolute', top: 2, right: 2, color: '#999' }}>
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
          sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: 'white',},},'& .MuiInputBase-input': {color: 'white',}, '& .MuiFormLabel-root': {color: '#999',}, '& .Mui-focused': {color: 'white',},}}
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
          sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: 'white',},},'& .MuiInputBase-input': {color: 'white',}, '& .MuiFormLabel-root': {color: '#999',}, '& .Mui-focused': {color: 'white',},}}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: 'white',},},'& .MuiInputBase-input': {color: 'white',}, '& .MuiFormLabel-root': {color: '#999',}, '& .Mui-focused': {color: 'white',},}}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          fullWidth
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: 'white',},},'& .MuiInputBase-input': {color: 'white',}, '& .MuiFormLabel-root': {color: '#999',}, '& .Mui-focused': {color: 'white',},}}
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
          sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: 'white',},},'& .MuiInputBase-input': {color: 'white',}, '& .MuiFormLabel-root': {color: '#999',}, '& .Mui-focused': {color: 'white',},}}
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
          sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: 'white',},},'& .MuiInputBase-input': {color: 'white',}, '& .MuiFormLabel-root': {color: '#999',}, '& .Mui-focused': {color: 'white',},}}
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
          sx={{'& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#999',},'&:hover fieldset': {borderColor: 'white',},'&.Mui-focused fieldset': {borderColor: 'white',},},'& .MuiInputBase-input': {color: 'white',}, '& .MuiFormLabel-root': {color: '#999',}, '& .Mui-focused': {color: 'white',},}}
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
    control={
      <Checkbox 
        name="receiveNews"
        color="default" 
        sx={{
          color: '#999', 
          '&.Mui-checked': { color: 'white' },
        }} 
        />
        }
        label="Would you like to receive news from Oculus?"
        sx={{ color: '#999', '&:hover': { color: 'white' } }}
      />

        <Typography variant="body1" color="#999">
          By ticking 'Yes', you will sign up for our every so often Newsletter.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <PinkButton onClick={handleSubmit} text="Submit" />
      </Grid>
    </Grid>
    </DialogContent>
    </Dialog>
  );
        }
        export default Register;