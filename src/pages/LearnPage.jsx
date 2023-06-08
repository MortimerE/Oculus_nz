import React from "react";
import { learnRoutes, pageRoutes, aboutRoutes } from "../routes/routes";
import Sitemap from "../components/Sitemap";
import Button from '@mui/material/Button';
import { Element } from 'react-scroll';


export const LearnPage = () => {

  return (
    <div
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
      {learnRoutes.map((route, index) => (
        <Element name={route.path} key={index}>
          <div
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
