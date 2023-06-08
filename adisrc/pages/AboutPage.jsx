import React from "react";
import { aboutRoutesRender, aboutRoutes } from "../routes/routes";

export const AboutPage = () => {
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
                : "64px 64px 160px 64px",
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
