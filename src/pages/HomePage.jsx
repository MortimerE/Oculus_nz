import React from "react";
import { homeRoutes, pageRoutes, aboutRoutes } from "../routes/routes";
import Sitemap from "../components/Sitemap";
import Button from '@mui/material/Button';


export const HomePage = () => {
  
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        position: 'relative',
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        scrollSnapType: "y mandatory",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          scrollSnapAlign: "start",
          padding: "0 64px 160px 64px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <p
            style={{ fontSize: "1.8rem", marginBottom: '64px' }}
          >{`${"Making high performance buildings simple by keeping the inside in and the outside out".toUpperCase()}`}</p>
          <Button style={{ background: "#ec008c", color: "#FFFFFF" }}>
            Learn More
          </Button>
        </div>
      </div>
      {/* <Sitemap routes={pageRoutes} /> */}
      {homeRoutes.map((route) => (
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100%",
            border: "1px solid green",
            alignItems: "center",
            justifyContent: "center",
            scrollSnapAlign: "start",
          }}
        >
          {route.element}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
