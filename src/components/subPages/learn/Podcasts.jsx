import React, { useState, useContext } from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Radio } from "@mui/icons-material"; // Replace with podcast icons or images
import AppContext from "../../../contexts/AppContext";
import PinkButton from "../../reusable/PinkButton";
import StyledDivider from "../../reusable/StyledDivider";

const PodcastImage = styled("img")({
  width: "100%",
  height: "auto",
});

const images1 = [
  {src: "/spotify.png", link: "https://open.spotify.com/embed-podcast/show/2XAVUE9618A37iR6HQPuZc", name: "Spotify"},
  {src: "/apple.png", link: "https://podcasts.apple.com/us/podcast/the-20-degree-podcast/id1670757626", name: "Apple Podcasts"},
  {src: "/googlepod.png", link: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81ZjYwZjYwOC9wb2RjYXN0L3Jzcw==", name: "Google Podcasts"},
  {src: "/pocketcasts.png", link: "https://pocketcasts.fm/20degree", name: "Pocket Casts"},
];

const images2 = [
  {src: "/spotify.png", link: "https://open.spotify.com/embed-podcast/show/2XAVUE9618A37iR6HQPuZc", name: "Spotify"},
  {src: "/apple.png", link: "https://podcasts.apple.com/us/podcast/the-20-degree-podcast/id1670757626", name: "Apple Podcasts"},
  {src: "/googlepod.png", link: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81ZjYwZjYwOC9wb2RjYXN0L3Jzcw==", name: "Google Podcasts"},
  {src: "/pocketcasts.png", link: "https://pocketcasts.fm/20degree", name: "Pocket Casts"},
];


export const Podcast = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        padding: "24vh 64px 64px 64px",
        alignItems: "center",
      }}
    >
      <Box sx={{ flex: "1", paddingRight: "16px" }}>
        <Typography variant="h3" gutterBottom>
          PODCASTS
        </Typography>
        <Typography variant="h5" gutterBottom>
          THE 20 DEGREE PODCAST
        </Typography>
        <StyledDivider />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <PodcastImage src="/20deg.png" alt="Podcast" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              Season 1: Building Science Fundamentals
            </Typography>
            <Typography variant="body1">
              Season 2: New Zealand Building Code One episode per code clause
            </Typography>
            <Typography variant="body1">
              Season 3: Assemblies & Materials
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "16px" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
                    <iframe src="https://open.spotify.com/embed-podcast/show/2XAVUE9618A37iR6HQPuZc" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                `,
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/* Repeat for other platforms */}
        </Box>
      </Box>

      <Box sx={{ flex: "1", paddingLeft: "16px", alignSelf: "flex-start", paddingTop: "3vh" }}>
        <Typography variant="body1">
          The 20 Degree podcast, hosted by Peter Raimondo + Jon Davies, is a
          building science podcast discussing the basics of the building
          enclosure and how it affects the people inside.
        </Typography>
        <Typography variant="body1">
          They keep it fun but technical and go on heaps of tangents as they
          explore the niches and nuances of how to keep the inside in and the
          outside out.
        </Typography>
        <Typography variant="body1">
          Learn and laugh in the office or on your drive to work while you hear
          about how to design and install a high performance building envelope.
        </Typography>
          <Grid container spacing={2}>
          {images1.map((image, index) => (
            <Grid item xs={3} key={index}>
              <img
                src={image.src}
                alt={`Podcast Thumbnail ${image.name}`}
                style={{ width: "100%" }}
                onClick={() => window.open(image.link)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export const Podcast2 = () => {
  const navigate = useNavigate();
  const { state, api } = useContext(AppContext);
  const { scrollTo } = state;
  const { setScrollTo } = api;

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

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
      <Box sx={{ flex: "1", paddingRight: "16px" }}>
        <Typography variant="h3" gutterBottom>
          PODCASTS
        </Typography>
        <Typography variant="h5" gutterBottom>
          GAB LEARNS
        </Typography>
        <StyledDivider />
        <Typography variant="body1">
          Gab asks the questions every Kiwi wants answers to.... and Peter helps
          out. As a Senior Building Enclosure Engineer at Oculus Architectural
          Engineering Ltd Peter explains the fundamentals of buildings, gives
          real-life examples and advises on how to solve performance issues in
          our homes).Gab Learns is a building science podcast for everyone. Tune
          in to learn about your home - how you can make it warmer, dryer and
          more comfortable for yourself and your family. Gab will learn some
          things, you’ll learn some things, and if not, there'll be laughs along
          the way.Gab Learns! And so will you.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Read our Gab Learns blog articles here
        </Typography>
        <Link to="blog-articles" onClick={() => handleScroll("blog-articles")}>
          <PinkButton onClick={() => {}} text={"BLOG ARTICLES"} />
        </Link>
      </Box>

      <Box sx={{ flex: "1", paddingLeft: "16px", alignSelf: "center" }}>
        <Grid container spacing={2} alignItems="flex-start" style={{ alignSelf: "flex-start" }}>
          <Grid item xs={6}>
            <PodcastImage src="/gablearns.png" alt="Podcast" />
          </Grid>
          <Grid item xs={6} style={{ alignSelf: "center" }}>
            <Typography variant="body1">Season 1: XXXX</Typography>
            <Typography variant="body1">Season 2: XXXX</Typography>
            <Typography variant="body1">Season 3: XXXXX</Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "16px" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: `
                    <iframe src="https://open.spotify.com/embed-podcast/show/0US6qG9VxsLYIqCv3lmGba?si=d55c73d0591c47dc" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                `,
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/*<IconButton
            onClick={() =>
              window.open(
                "https://open.spotify.com/show/0US6qG9VxsLYIqCv3lmGba?si=d55c73d0591c47dc",
                "_blank"
              )
            }
          >
            <Radio />
          </IconButton>*/}
          <Grid container spacing={2}>
          {images1.map((image, index) => (
            <Grid item xs={3} key={index}>
              <img
                src={image.src}
                alt={`Podcast Thumbnail ${image.name}`}
                style={{ width: "100%" }}
                onClick={() => window.open(image.link)}
              />
            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>
    </Box>
  );
};
