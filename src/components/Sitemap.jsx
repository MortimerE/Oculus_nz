import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const GridItem = styled(Box)(({ theme }) => ({
  gridColumn: "span 1",
  gridRow: "span 1",
  aspectRatio: '1 / 1',
  //padding: theme.spacing(2),
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
        width: "100%",
        background: "#000000",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridAutoRows: "1fr",
        padding: "64px",
        paddingTop: "1",
        gap: "10px", // Add gap between cells
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