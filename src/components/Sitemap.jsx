import React, { useState, useEffect, useContext } from 'react';
import { Box, Link } from "@mui/material";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { homeRoutes, aboutRoutes, servicesRoutes, learnRoutes } from '../routes/routes';
import AppContext from '../contexts/AppContext';

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
  const [currentRoutes, setCurrentRoutes] = useState(initialRoutes);
  const [centerText, setCenterText] = useState(initialCenter);
  const { state, api } = useContext(AppContext);
  const { setScrollTo } = api;
  const [isViewingSubroutes, setIsViewingSubroutes] = useState(false);

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const tileCount = initialRoutes.length + 4;
  const colCount = 6;
  const rowCount = Math.ceil(initialRoutes.length / 4);

  const handleTileClick = (route) => {
    if (route.name.toUpperCase() === centerText) {
      if (centerText === 'LOGO') {
        doNavigate('', '');  // Navigate to homepage
        return;
      }
      else { 
        console.log("branch");
        doNavigate(route.path, '');  // Navigate to page
        return;
      }
    }
    else {
      setCenterText(route.name);
    }
    
    if (newRoutes[route.name].isLeaf) {
      doNavigate(newRoutes[route.name].parent, route.path);
    } else {
      setIsViewingSubroutes(true);
      setCurrentRoutes(newRoutes[route.name].routes);
    }
  };
  
  const navigate = useNavigate();
  const doNavigate = (path, elementId) => {
    if (elementId === '') {
      handleScroll('sitemap');
    } else {
      handleScroll(elementId);
    }
    navigate(`/${path}`);
  };

  const handleBackClick = () => {
    setCurrentRoutes(initialRoutes);
    setCenterText(initialCenter);
    setIsViewingSubroutes(false);
  };

  const newRoutes = {
    About: {routes: aboutRoutes, isLeaf: false},
    Services: {routes: servicesRoutes, isLeaf: false},
    Learn: {routes: learnRoutes, isLeaf: false},
    Contact: {isLeaf: true, parent: ''},
    Enquire: {isLeaf: true, parent: ''},
    Sitemap: {isLeaf: true, parent: ''},
    "Latest News": {isLeaf: true, parent: ''},
    "Enquire Here": {isLeaf: true, parent: ''},
    "About Us": {isLeaf: true, parent: 'About'},
    "Our Team": {isLeaf: true, parent: 'About'},
    "Our Method": {isLeaf: true, parent: 'About'},
    Testimonials: {isLeaf: true, parent: 'About'},
    Events: {isLeaf: true, parent: 'About'},
    Career: {isLeaf: true, parent: 'About'},
    Associations: {isLeaf: true, parent: 'About'},
    "Building Enclosure Design": {isLeaf: true, parent: 'Services'},
    "Construction Monitoring & PS4": {isLeaf: true, parent: 'Services'},
    "Passive House": {isLeaf: true, parent: 'Services'},
    "Passive House2": {isLeaf: true, parent: 'Services'},
    "Component Design PS1": {isLeaf: true, parent: 'Services'},
    Modelling: {isLeaf: true, parent: 'Services'},
    Testing: {isLeaf: true, parent: 'Services'},
    "Investigation & Retrofit": {isLeaf: true, parent: 'Services'},
    "Product Compliance & Engineering": {isLeaf: true, parent: 'Services'},
    "Tools & Resources": {isLeaf: true, parent: 'Learn'},
    "NZBC H1 Changes": {isLeaf: true, parent: 'Learn'},
    "Building Science + BS Seminars": {isLeaf: true, parent: 'Learn'},
    Podcasts: {isLeaf: true, parent: 'Learn'},
    Podcasts2: {isLeaf: true, parent: 'Learn'},
    "Blog & BS": {isLeaf: true, parent: 'Learn'},
    "Blog Articles": {isLeaf: true, parent: 'Learn'},
    Newsletter: {isLeaf: true, parent: 'Learn'},
  };

  useEffect(() => {
    if (initialCenter) {
      setCenterText(initialCenter);
    }
    if (initialRoutes) {
      setCurrentRoutes(initialRoutes);
    }
  }, [initialCenter, initialRoutes]);

  console.log(currentRoutes);
  return currentRoutes && centerText ? (
    <Box
      sx={{
        maxHeight: "100%",
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
      {currentRoutes.map((route, index) =>
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
              key={route.name}
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
              key={route.name}
              onClick={() => handleTileClick(route)}
              sx={{ 
                background: "#FFFFFF",
                position: "relative",
               }}
            >
              <TextBox>
                <p
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
                  {route && route.name ? route.name.toUpperCase() : ""}
                </p>
              </TextBox>
            </GridItem>
        )
      )}
      {isViewingSubroutes &&
        <GridItem
          onClick={handleBackClick}
          sx={{
            background: "#ec008c",
            position: "relative",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Go Back
        </GridItem>
      }
    </Box>
  ):(
    <p>Loading...</p>
  );
};
export default Sitemap;


/*export const Sitemap = (props) => {
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

    const leafRoutes = {
      'Contact': { path: '/', elementId: 'contact' },
      // ...other leaf routes here
    };    

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
      </GridItem> /}
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
*/