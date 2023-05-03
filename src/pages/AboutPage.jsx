import React from "react";
import { aboutRoutesRender, aboutRoutes } from "../routes/routes";

export const AboutPage = () => {
  console.log(aboutRoutesRender);
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        position: "relative",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        scrollSnapType: "y mandatory",
      }}
    >
      {aboutRoutesRender.map((route) => (
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
          key={route.name}
        >
          {route.element}
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
