import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../contexts/AppContext";
import Requests from "../contact/Requests";
import PinkButton from "../../reusable/PinkButton";

const Underline = styled("hr")({
  borderColor: "#000000",
  borderWidth: "1px",
});

const GridItem = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  aspectRatio: "1/1",
  padding: theme.spacing(1),
  boxSizing: "border-box",
  borderRadius: "8px",
  cursor: "pointer",
  color: "#000000",
}));

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

export const ToolsResources = () => {
  const navigate = useNavigate();

  const [overlayVisible, setOverlayVisible] = useState(false);

  // Get the resources data from the context
  const { state } = useContext(AppContext);
  const { resources } = state;
  const [resourceItems, setResourceItems] = useState([]);

  useEffect(() => {
    if (resources) {
      setResourceItems(resources || []);
    }
  }, [resources]);

  const handleItemClick = (resource) => {
    const formattedName = resource.title.toLowerCase().replaceAll(" ", "");
    navigate(`/learn/tools-resources/${formattedName}`);
  };

  // Filter resources where 'isFeatured' is true
  const featuredResources = resourceItems.filter(
    (resourceItems) => resourceItems.isFeatured
  );

  return resourceItems.length > 0 ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        padding: "32px",
      }}
    >
      <Box
        sx={{
          flex: "1",
          paddingRight: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: "16px",
          paddingBottom: '64px'
        }}
      >
        <Typography variant="h3" gutterBottom>
          Tools & Resources
        </Typography>
        <Underline />
        <Typography variant="body1" gutterBottom>
          These resources have been created by Oculus to provide advice and
          guidance. All resource articles follow international best practice,
          and are backed by science.
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          Is there any specific topic you’d like to learn about / require help
          with? Drop them below
        </Typography>
        {/* <Button variant="contained" onClick={() => setOverlayVisible(true)}>I Would Like to Learn About...</Button> */}
        <PinkButton
          onClick={() => setOverlayVisible(true)}
          text={"I WOULD LIKE TO LEARN ABOUT..."}
        />
        {overlayVisible && (
          <Overlay>
            <Requests onClose={() => setOverlayVisible(false)} />
          </Overlay>
        )}
      </Box>

      <Box sx={{ flex: "1", paddingLeft: "16px", overflowY: "auto" }}>
        <Grid container spacing={2}>
          {featuredResources.map((resource, index) => (
            <Grid item xs={4} key={index}>
              <GridItem onClick={() => handleItemClick(resource)}>
                {resource.title}
              </GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  ) : (
    <p>Loading...</p> // Or replace with your own loading component
  );
};

export default ToolsResources;
