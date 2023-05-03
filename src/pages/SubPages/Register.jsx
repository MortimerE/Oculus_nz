import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [selectedSeminars, setSelectedSeminars] = useState([]);
  const [questions, setQuestions] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [receiveNews, setReceiveNews] = useState(false);

  const handleSeminarsChange = (event) => {
    setSelectedSeminars(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleHowDidYouHearChange = (event) => {
    setHowDidYouHear(event.target.value);
  };
  

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Register Here
        </Typography>
        <hr />
        <Typography variant="body1">
          Keen to join us for all our seminars in 2023? Register below! Thursdays,
          3:30pm - 4:30pm, online. Don't worry if you can't make it, we will send
          out a recording afterwards. (Online events only)
        </Typography>
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
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
        }
        export default Register;