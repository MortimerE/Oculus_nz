import React, { useContext } from "react";
import { learnRoutesRender, pageRoutes, aboutRoutes } from "../routes/routes";
import Sitemap from "../components/Sitemap";
import Button from '@mui/material/Button';
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import AppContext from '../contexts/AppContext';


export const LearnPage = () => {
  const {state, api} = useContext(AppContext);
  const { scrollTo } = state;
const { setScrollTo } = api;

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
    
      <>

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
      </>
    
  );
};

export default LearnPage;
