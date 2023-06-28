import React, { useContext } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import AppContext from "../../../contexts/AppContext";

const Underline = styled("hr")({
  borderColor: "#000000",
  borderWidth: "1px",
});

export const Associations = () => {
  const { state, api } = useContext(AppContext);
  const { aboutUsData } = state;

  const { associations = ["./vite.svg"] } = aboutUsData;
  const images = associations;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      <Box
        sx={{
          width: "65%",
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <Typography variant="h3">Associations</Typography>
        <Underline />
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={3} key={index}>
              <img
                src={image}
                alt={`Association ${index + 1}`}
                style={{ width: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
