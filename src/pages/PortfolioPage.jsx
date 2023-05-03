import React from "react";

export const PortfolioPage = () => {
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
        <h1>Portfolio Page</h1>
      </div>
    </div>
  );
};

export default PortfolioPage;
