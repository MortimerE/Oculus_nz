import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Requests from "../contact/Requests";
import { Link } from "react-scroll";
import AppContext from "../../../contexts/AppContext";
import PinkButton from "../../reusable/PinkButton";

const UnderlinedTitle = styled(Typography)(({ theme }) => ({
  textDecoration: "underline",
  marginBottom: theme.spacing(2),
}));

const categoryOptions = [
  "Mould",
  "Insulation",
  "Building enclosure",
  "Gab Learns",
  "Building Science + Bullsh*t Seminars",
  "Videos",
];

const authorOptions = [
  "Shawn McIsaac",
  "James Powers",
  "Peter Raimondo",
  "Denise Martin",
  "Gab Davenport",
  "Angelika Gross",
];

const yearOptions = ["2019", "2020", "2021", "2022", "2023"];

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

export const BlogBS = () => {
  const navigate = useNavigate();
  const { state, api } = useContext(AppContext);
  const { scrollTo } = state;
  const { setScrollTo } = api;

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };
  const [overlayVisible, setOverlayVisible] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        padding: "24vh 64px 64px 64px",
        alignItems: "flex-end",
      }}
    >
      <Box
        sx={{
          flex: "1",
          paddingRight: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <UnderlinedTitle variant="h3" gutterBottom>
            BLOG & BS
          </UnderlinedTitle>
          <Typography variant="body1" gutterBottom>
            These articles are a bit more editorial, opinionated, and
            off-the-cuff written by members of the team. They’re interesting and
            conversation-generating, but less definitive and polished.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }} gutterBottom>
            Are you looking for some thoughts and rants about a specific topic?
            Drop it below.
          </Typography>

          <PinkButton
            onClick={() => setOverlayVisible(true)}
            text={"I Would Like to Learn About..."}
          />
          {overlayVisible && (
            <Overlay>
              <Requests onClose={() => setOverlayVisible(false)} />
            </Overlay>
          )}
          <Box sx={{ marginTop: "16px" }}>
            <Link
              to="blog-articles"
              onClick={() => handleScroll("blog-articles")}
            >
              <PinkButton onClick={() => {}} text={"OPEN BLOG"} />
            </Link>
          </Box>
        </Box>
      </Box>

      <Box sx={{ flex: "1", paddingLeft: "16px" }}>
        <Typography variant="h5" sx={{ textAlign: "right" }} gutterBottom>
          SEARCH & FILTER
        </Typography>
        <Grid container spacing={2} marginBottom="16px">
          <Grid item xs={6}>
            <TextField
              select
              label="Category"
              variant="outlined"
              fullWidth
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
              SelectProps={{ native: true }}
            >
              {categoryOptions.map((option) => (
                <option style={{ color: "black" }} key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Author"
              variant="outlined"
              fullWidth
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
              SelectProps={{ native: true }}
            >
              {authorOptions.map((option) => (
                <option style={{ color: "black" }} key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label="Time (Year)"
              variant="outlined"
              fullWidth
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
              SelectProps={{ native: true }}
            >
              {yearOptions.map((option) => (
                <option style={{ color: "black" }} key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <PinkButton onClick={() => {}} text="Apply Filter" />
          </Grid>
        </Grid>
        <Box
          component="form"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            label="Search keywords"
            variant="outlined"
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
            fullWidth
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
