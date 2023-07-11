import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PinkButton from "../../reusable/PinkButton";

const RequestsPage = ({ onClose }) => {
  const handleSubmit = () => {
    // Implement request submission logic here
    onClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        maxWidth: "80vw",
        width: "80%",
        borderRadius: "15px",
        margin: "auto",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
        padding: "32px",
        backgroundColor: "black",
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 2, right: 2, color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        I would like to learn about...
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Understanding what information you are looking for helps us create
        specific content for your needs. Please leave your topics of interest
        here and we will try our best to accommodate them in one of our future
        content pieces across our channels. Should you have a specific question
        we will be in touch shortly!
      </Typography>
      <Grid container spacing={4} alignItems="flex-start">
        <Grid
          container
          item
          xs={12}
          sm={6}
          direction="column"
          spacing={2}
          sx={{ height: "100%" }}
          justifyContent={"flex-start"}
        >
          <Grid item>
            <TextField
              size="small"
              variant="outlined"
              sx={{
                border: "#FFFFFF",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF !important",
                "& input": {
                  color: "black",
                },
              }}
              margin="dense"
              fullWidth
              label="First Name"
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              variant="outlined"
              sx={{
                border: "#FFFFFF",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF !important",
                "& input": {
                  color: "black",
                },
              }}
              margin="dense"
              fullWidth
              label="Last Name"
            />
          </Grid>
          <Grid item>
            <TextField
              size="small"
              variant="outlined"
              sx={{
                border: "#FFFFFF",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF !important",
                "& input": {
                  color: "black",
                },
              }}
              margin="dense"
              fullWidth
              label="E-Mail"
              type="email"
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          justifyContent="flex-start"
          sx={{height: '100%'}}
          direction="column"
          spacing={2}
        >
          <Grid item>
            <InputLabel id="topics-label">Topics</InputLabel>
            <TextField
              select
              fullWidth
              size="small"
              variant="outlined"
              sx={{
                border: "#FFFFFF",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF !important",
                "& input": {
                  color: "black",
                },
              }}
              margin="dense"
              labelId="topics-label"
              label="Topics"
            >
              <MenuItem sx={{color: 'black'}} value="topic1">Topic 1</MenuItem>
              <MenuItem sx={{color: 'black'}} value="topic2">Topic 2</MenuItem>
              <MenuItem sx={{color: 'black'}} value="topic3">Topic 3</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              sx={{
                border: "#FFFFFF",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF !important",
                "& input": {
                  color: "black",
                },
              }}
              margin="dense"
              label="Details/Specific Questions"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <PinkButton onClick={handleSubmit} text={"Submit"} />
      </Box>
    </Box>
  );
};

export default RequestsPage;
