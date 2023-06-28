import React from "react";
import { homeRoutes, pageRoutes, aboutRoutes } from "../routes/routes";
import Sitemap from "../components/Sitemap";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ImageCarousel from "../components/embeds/ImageCarousel";
import { Element } from "react-scroll";
import { scroller } from "react-scroll";
import { ScrollContext } from "../contexts/ScrollContext";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { scrollTo, setScrollTo } = React.useContext(ScrollContext);

  React.useEffect(() => {
    // Temporarily disable scroll snap
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.style.scrollSnapType = "none";
    }

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
        ignoreCancelEvents: true,
      });

      setTimeout(() => {
        if (scrollContainer) {
          scrollContainer.style.scrollSnapType = "y mandatory";
        }
      }, 100);
      // Reset the scroll target so it doesn't affect other pages
      setScrollTo("");
    }
  }, [scrollTo]);

  const images = ["./vite.svg", "image2.jpg", "image3.jpg"]; // replace these with the URLs or paths to your actual images

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        id="scroll-container"
        style={{
          width: "100%",
          height: "100vh",
          // position: 'relative',
          overflowY: "scroll",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          scrollSnapType: "y mandatory",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            height: "100vh",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            scrollSnapAlign: "start",
            padding: "0 64px 160px 64px",
            boxSizing: "border-box",
            backgroundImage:
              "url(home-bg1.png), url(home-bg2.png), url(home-bg3.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            animation: "cycleBackground 15s infinite",
            "@keyframes cycleBackground": {
              "0%": { backgroundImage: "url(home-bg1.png)" },
              "33%": { backgroundImage: "url(home-bg2.png)" },
              "66%": { backgroundImage: "url(home-bg3.png)" },
            },
            // backgroundOrigin: 'border-box',
            // backgroundPosition: 'center center'
          }}
        >
          {/* <ImageCarousel images={images} /> */}
          <div
            style={{
              height: "100%",
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              position: "absolute",
              zIndex: "0",
            }}
          >
            <p
              style={{
                fontSize: "1.8rem",
                marginTop: "64px",
                marginBottom: "64px",
                color: 'black'
              }}
            >{`${"Making high performance buildings simple by keeping the inside in and the outside out".toUpperCase()}`}</p>
            <Button
              component={Link}
              to="/about"
              style={{ background: "#ec008c", color: "#FFFFFF" }}
            >
              Learn More
            </Button>
          </div>
        </Box>
        {/* <Sitemap routes={pageRoutes} /> */}
        {homeRoutes.map((route, index) => (
          <Element name={route.path} key={index}>
            <div
              id={route.path}
              style={{
                position: "relative",
                display: "flex",
                height: "100vh",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                scrollSnapAlign: "start",
              }}
            >
              {route.element}
            </div>
          </Element>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
