import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";
import DiscoveryCallOverlay from "./DiscoveryCall";
import StyledDivider from "../../reusable/StyledDivider";

const buildingTypes = ["Type A", "Type B", "Type C"];
const projectStages = ["Stage A", "Stage B", "Stage C"];

const Overlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)", // Opaque
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000, // High z-index to ensure it's on top of all other elements
}));

const Enquire = () => {
  const [overlayVisible, setOverlayVisible] = React.useState(false);
  const [isRequestCollected, setIsRequestCollected] = useState(false);

  const [projectLocation, setProjectLocation] = React.useState("");
  const [buildingType, setBuildingType] = React.useState("");
  const [isBookingCall, setIsBookingCall] = React.useState(false);

  const handleProjectLocationChange = (event) => {
    setProjectLocation(event.target.value);
  };

  const handleBuildingTypeChange = (event) => {
    setBuildingType(event.target.value);
  };

  const handleBookingButtonClick = () => {
    setIsBookingCall(true);
    setOverlayVisible(true);
  };

  const handleAttachmentChange = (event) => {
    // Implement attachment handling logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submit logic here
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "flex-end",
        marginLeft: "64px",
        marginRight: "64px",
        marginBottom: "64px",
      }}
    >
      <div
        style={{ width: "55%", alignSelf: "flex-start", marginBottom: "24px" }}
      >
        <Typography
          variant="p4"
          sx={{
            fontWeight: "bold",
            fontSize: "28px",
            marginBottom: (theme) => theme.spacing(2),
          }}
        >
          ENQUIRE HERE
        </Typography>
        <StyledDivider />
        <Typography variant="p" gutterBottom>
          Thank you for your interest in working with us! Please fill in as much
          as you can so that we can make the most of our phone call together.
        </Typography>
      </div>
      <form onSubmit={handleSubmit} style={{ width: "100%", height: "60%" }}>
        <div
          style={{
            minWidth: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "64px",
          }}
        >
          <Grid container direction="column" style={{ flexGrow: 1 }}>
            <Grid item xs={12}>
              <TextField
                required
                // margin="dense"
                variant="outlined"
                size="small"
                fullWidth
                label="Name or Address of Project"
                sx={{
                  border: "#FFFFFF",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF !important",
                  "& input": {
                    color: "black",
                  },
                }}
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                select
                fullWidth
                size="small"
                label="Project Location"
                value={projectLocation}
                onChange={handleProjectLocationChange}
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
              >
                <MenuItem value="Location A" sx={{color: 'black'}}>Location A</MenuItem>
                <MenuItem value="Location B" sx={{color: 'black'}}>Location B</MenuItem>
                <MenuItem value="Location C" sx={{color: 'black'}}>Location C</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{
                  border: "#FFFFFF",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF !important",
                  "& input": {
                    color: "black",
                  },
                }}
                margin="dense"
                size="small"
                required
                fullWidth
                label="Company Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                label="Your Full Name"
                sx={{
                  border: "#FFFFFF",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF !important",
                  "& input": {
                    color: "black",
                  },
                }}
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                label="Your Email"
                type="email"
                sx={{
                  border: "#FFFFFF",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF !important",
                  "& input": {
                    color: "black",
                  },
                }}
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                label="Your Phone Number"
                type="tel"
                sx={{
                  border: "#FFFFFF",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF !important",
                  "& input": {
                    color: "black",
                  },
                }}
                margin="dense"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                // rows={4}
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
                name="howCanWeHelp"
                label="How Can We Help You With Your Project?"
                required
              />
            </Grid>
          </Grid>
          <Grid container direction="column" sx={{ flexGrow: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                variant="outlined"
                size="small"
                name="buildingType"
                label="What Type of Building?"
                sx={{
                  border: "#FFFFFF",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF !important",
                  "& input": {
                    color: "black",
                  },
                }}
                margin="dense"
              >
                {buildingTypes.map((option) => (
                  <MenuItem sx={{color: 'black'}} key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                size="small"
                sx={{
                  border: "#FFFFFF",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF !important",
                  "& input": {
                    color: "black",
                  },
                }}
                margin="dense"
                variant="outlined"
                name="projectStage"
                label="What Stage of Design is Your Project?"
              >
                {projectStages.map((option) => (
                  <MenuItem sx={{color: 'black'}} key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                // rows={4}
                size="small"
                sx={{
                  border: "#FFFFFF",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF !important",
                  "& input": {
                    color: "black",
                  },
                }}
                margin="dense"
                variant="outlined"
                name="otherInformation"
                label="Other Relevant Information"
              />
            </Grid>
            <Grid item xs={12} style={{ marginTop: "16px" }}>
              <Typography variant="p">Attachments:</Typography>
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                name="attachments"
                onChange={handleAttachmentChange}
                multiple
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="receiveNews"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  />
                }
                label="Would you like to receive news from us?"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body1">
                Would you like to book a discovery call so we can discuss your
                enquiry?
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{marginTop: '8px'}}>
              <Button
                style={{
                  background: "#ec008c",
                  color: "white",
                  height: "36px",
                  fontSize: ".8em",
                  width: "200px",
                  float: "right",
                }}
                variant="contained"
                onClick={handleBookingButtonClick}
              >
                BOOK A CALL
              </Button>
            </Grid>
            {isRequestCollected && (
              <Grid item xs={12}>
                <Typography variant="body2" color="success.main">
                  Your booking request will be submitted with the enquiry form.
                </Typography>
              </Grid>
            )}
            {overlayVisible && (
              <Overlay>
                <DiscoveryCallOverlay
                  onClose={() => setOverlayVisible(false)}
                  isRequestCollected={setIsRequestCollected}
                />
              </Overlay>
            )}

            <Grid item xs={12} sx={{marginTop: '8px'}}>
              <Button
                variant="contained"
                style={{
                  background: "#ec008c",
                  color: "white",
                  height: "36px",
                  fontSize: ".8em",
                  width: "200px",
                  float: "right",
                }}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default Enquire;
