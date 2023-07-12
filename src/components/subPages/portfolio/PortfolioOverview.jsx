import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../contexts/AppContext";
import { Grid } from "@mui/material";

export const PortfolioOverview = () => {
  const { state } = useContext(AppContext);
  const { portfolio } = state;
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    if (portfolio) {
      setPortfolioItems(portfolio || []);
    }
  }, [portfolio]);

  const navigate = useNavigate();

  const handleClick = (itemId) => {
    console.log(itemId);
    navigate(`/portfolio/${itemId}`);
  };

  const endpoint = import.meta.env.VITE_STRAPIURL;

  return portfolioItems ? (
    <div
      style={{
        width: "100%",
        height: "100vh",
        // height: "auto",
        position: "relative",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "24vh 64px 100px 64px",
        boxSizing: "border-box",
        scrollSnapAlign: 'start',
        // gap: '64px',
        // scrollSnapType: "y mandatory",
      }}
    >
      <h1 style={{alignSelf: 'flex-start', marginBottom: '32px'}}>PORTFOLIO</h1>
      <Grid
        container
        columns={{ xs: 10 }}
        direction="row"
        sx={{ width: "100%" }}
      >
        {portfolioItems.map((item) => (
          <Grid
            item
            xs={2}
            key={item.id}
            onClick={() => handleClick(item.title)}
          >
            <img
              src={endpoint + item.thumbnail.data.attributes.url}
              alt={item.title}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <p>{item.title}</p>
            <p>{item.buildingType}</p>
            <p>{item.location}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <p>Loading...</p> // Replace with your own loading component
  );
};

export default PortfolioOverview;
