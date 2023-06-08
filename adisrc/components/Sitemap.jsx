import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Sitemap = (props) => {
  const { routes, centerText } = props;
  const tileCount = routes.length + 4;
  const rowCount = tileCount <= 14 ? 2 : 3;
  const colCount = Math.ceil(tileCount / rowCount);


  console.log(tileCount, rowCount, colCount);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: `repeat(${colCount}, 1fr)`,
          gridTemplateRows: `repeat(${rowCount}, 1fr)`,
          height: "50%",
          width: "100%",
        }}
      >
        <div
          style={{
            gridColumn: "3 / 5",
            gridRow: "1 / 3",
            background: "#ec008c",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ color: "#000000" }}>{centerText}</p>
        </div>
        {routes.map((route, index) => (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              //   gridRow: `${(index/colCount) + 1}`,
              //   gridColumn: `${(index/rowCount)}`
            }}
            key={index}
          >
          <Link to={`/${route.path}`}>
            <p style={{ color: "#000000" }}>{route.name}</p>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;
