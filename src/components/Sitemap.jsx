import React, { useState, useEffect, useContext } from 'react';
import { Box, Link } from "@mui/material";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { aboutRoutes, servicesRoutes, learnRoutes } from '../routes/routes';

const GridItem = styled(Box)(({ theme }) => ({
  gridColumn: "span 1",
  gridRow: "span 1",
  aspectRatio: "1 / 1",
  //padding: theme.spacing(2),
  padding: theme.spacing(0.5), // Reduce padding size
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  transition: "all 0.3s ease",
}));

const ActiveGridItem = styled(GridItem)({
  gridColumn: "span 2",
  gridRow: "span 2",
});

const TextBox = styled(Box)({
  display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",  // add this to fill the container
              width: "100%",  // add this to fill the container
});

export const Sitemap = (props) => {
  const { initialRoutes, initialCenter } = props;
  const [routesStack, setRoutesStack] = useState([initialRoutes]);
  const [routes, setRoutes] = useState([routesStack]);
  const [centerText, setCenterText] = useState(initialCenter);

  const tileCount = initialRoutes.length + 4;
  const rowCount = tileCount <= 14 ? 2 : 3;
  const colCount = Math.ceil(tileCount / rowCount);

  const handleTileClick = (route) => {
    setCenterText(route.name);

    // Here, you need to have a mapping of route names to their corresponding route array
    const newRoutes = {
      About: aboutRoutes,
      Services: servicesRoutes,
      Learn: learnRoutes,
      // ...add other mappings here
    }[route.name];

    if (newRoutes) {
      setRoutesStack([...routesStack, newRoutes]);
    } else {
      doNavigate(route.name.toLowerCase()); // assuming the route names match the URL paths
    }
  };


  const handleBackClick = () => {
    if (routesStack.length > 1) {
      const newRoutesStack = routesStack.slice(0, -1);
      setRoutesStack(newRoutesStack);
      setCenterText(newRoutesStack[newRoutesStack.length - 1].name);
    }
  };


  useEffect(() => {
    if (initialCenter) {
      setCenterText(initialCenter);
    }
    if (initialRoutes) {
      setRoutes(initialRoutes);
    }
  }, [initialCenter, initialRoutes]);

  const doNavigate = (link) => {
    navigate(`/${link}`);
  }

  return routesStack[routesStack.length - 1] && centerText ? (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        background: "#000000",
        display: "grid",
        gridTemplateColumns: `repeat(${colCount}, 1fr)`,
        gridAutoRows: "1fr",
        padding: "64px",
        paddingTop: "24vh",
        gap: "10px", // Add gap between cells
        boxSizing: "border-box",
      }}
    >
      {/* <GridItem
        onClick={() => setActiveIndex(-1)}
        sx={{
          background: activeIndex === -1 ? "#ec008c" : "#FFFFFF",
          position: "relative" // For inner elements positioning
        }}
      >
        <p style={{ color: "#000000", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
          Oculus
        </p>
      </GridItem> */}
      {routesStack[routesStack.length - 1].map((route, index) =>
        index === 2 ? (
          <>
            <ActiveGridItem
              key={"main-tile"}
              onClick={() => doNavigate(route.name)}
              sx={{
                background: centerText === 'LOGO' ? '#FFFFFF' : "#ec008c",
                position: "relative", // For inner elements positioning
                padding: 8,
                // boxSizing: 'border-box'
              }}
            >
              {centerText === "LOGO" ? (
                <img
                  src="/Reverse Pink Oculus Logo AG new.png"
                  objectFit="scale-down"
                  height="100%"
                />
              ) : (
                <p
                  style={{
                    color: "#FFFFFF",
                    position: "absolute",
                    top: "50%",
                    textAlign: "center",
                    transform: "translateY(-50%)",
                    fontWeight: 700,
                    fontSize: "2rem",
                  }}
                >
                  {centerText.toUpperCase()}
                </p>
              )}
            </ActiveGridItem>
            <GridItem
              key={index}
              onClick={() => handleTileClick(route)}
              sx={{
                background: "#FFFFFF",
                position: "relative", // For inner elements positioning
              }}
            >
              <TextBox><p
                style={{
                  color: "#000000",
                  position: "absolute",
                  top: "50%",
                  textAlign: "center",
                  transform: "translateY(-50%)",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {route.name.toUpperCase()}
              </p></TextBox>
            </GridItem>
          </>
        ) : (
          <GridItem
              key={index}
              onClick={() => handleTileClick(route)}
              sx={{
                background: "#FFFFFF",
                position: "relative", // For inner elements positioning
              }}
            >
              <TextBox><p
                style={{
                  color: "#000000",
                  position: "absolute",
                  top: "50%",
                  textAlign: "center",
                  transform: "translateY(-50%)",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {route.name.toUpperCase()}
              </p></TextBox>
            </GridItem>
        )
      )}
      <Button
        variant="contained"
        onClick={handleBackClick}
        style={{
          gridRow: 3,
          gridColumn: `${colCount}`,
          alignSelf: "flex-end",
          background: "grey",
          color: "#FFFFFF",
          marginTop: "1rem",
        }}
      >
        Go Back
      </Button>
    </Box>
  ) : (
      <ActiveGridItem
              key={"main-tile"}
              onClick={() => doNavigate(route.name)}
              sx={{
                background: centerText === 'LOGO' ? '#FFFFFF' : "#ec008c",
                position: "relative", // For inner elements positioning
                padding: 8,
                // boxSizing: 'border-box'
              }}
            >
                <p
                  style={{
                    color: "#FFFFFF",
                    position: "absolute",
                    top: "50%",
                    textAlign: "center",
                    transform: "translateY(-50%)",
                    fontWeight: 700,
                    fontSize: "2rem",
                  }}
                >
                  {centerText.toUpperCase()}
                </p>
            </ActiveGridItem>
  );
};

export default Sitemap;

/*
import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const GridItem = styled(Box)(({ theme }) => ({
  gridColumn: "span 1",
  gridRow: "span 1",
  aspectRatio: '1 / 1',
  padding: theme.spacing(0.5), // Reduce padding size
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  transition: "all 0.3s ease",
}));

const ActiveGridItem = styled(GridItem)({
  gridColumn: "span 2",
  gridRow: "span 2",
  aspectRatio: '2 / 2',
});

export const Sitemap = (props) => {
  const { routes } = props;
  const [activeIndex, setActiveIndex] = React.useState(-1);

  React.useEffect(() => {
    setActiveIndex(-1);
  }, [routes]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "#000000",
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)", // Increase number of cells
        gridAutoRows: "1fr",
        gap: "10px", // Add gap between cells
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <GridItem
        onClick={() => setActiveIndex(-1)}
        sx={{
          background: activeIndex === -1 ? "#ec008c" : "#FFFFFF",
          position: "relative" // For inner elements positioning
        }}
      >
        <p style={{ color: "#000000", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
          Oculus
        </p>
      </GridItem>
      {routes.map((route, index) => (
        index === activeIndex ? (
          <ActiveGridItem
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              background: "#ec008c",
              position: "relative" // For inner elements positioning
            }}
          >
            <p style={{ color: "#000000", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
              {route.name}
            </p>
          </ActiveGridItem>
        ) : (
          <GridItem
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              background: "#FFFFFF",
              position: "relative" // For inner elements positioning
            }}
          >
            <p style={{ color: "#000000", position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
              {route.name}
            </p>
          </GridItem>
        )
      ))}
    </Box>
  );
};

export default Sitemap;*/
