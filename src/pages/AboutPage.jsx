import React from "react";
import { aboutRoutesRender, aboutRoutes } from "../routes/routes";
import { ScrollContext } from '../contexts/ScrollContext';
import { scroller } from 'react-scroll';

export const AboutPage = () => {
  const { scrollTo, setScrollTo } = React.useContext(ScrollContext);

  React.useEffect(() => {
    // Temporarily disable scroll snap
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.style.scrollSnapType = 'none';
    }

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 0,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container',
        ignoreCancelEvents: true,
      });

      setTimeout(() => {
        if (scrollContainer) {
          scrollContainer.style.scrollSnapType = 'y mandatory';
        }
      }, 100);
      // Reset the scroll target so it doesn't affect other pages
      setScrollTo("");
    }
  }, [scrollTo, setScrollTo]);
  
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
          position: "relative",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        {aboutRoutesRender.map((route) => (
          <div
            id={route.path}
            style={{
              position: "relative",
              display: "flex",
              height: "100vh",
              width: "100%",
              border: "1px solid green",
              alignItems: "center",
              justifyContent: "center",
              scrollSnapAlign: "start",
              padding: route.path.includes("sitemap")
                ? ""
                : "0 0 160px 0",
            }}
            key={route.name}
          >
            {route.element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;