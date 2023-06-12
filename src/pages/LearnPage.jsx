import React from "react";
import { learnRoutesRender, pageRoutes, aboutRoutes } from "../routes/routes";
import Sitemap from "../components/Sitemap";
import Button from '@mui/material/Button';
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import { ScrollContext } from '../contexts/ScrollContext';


export const LearnPage = () => {
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
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
      {/* <Sitemap routes={pageRoutes} /> */}
      {learnRoutesRender.map((route, index) => (
        <Element name={route.path} key={index}>
          <div
            id={route.path}
            style={{
              position: 'relative',
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

export default LearnPage;
