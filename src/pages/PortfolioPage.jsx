import React, { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PortfolioItem } from "../components/subPages/portfolio/PortfolioItem";
import { PortfolioOverview } from "../components/subPages/portfolio/PortfolioOverview";
import { Sitemap } from "../components/Sitemap";
import Grid from '@mui/material/Grid';
import AppContext from "../contexts/AppContext";
//import axios from 'axios';

export const PortfolioPage = () => {
  const { state } = useContext(AppContext);
  const { portfolio } = state;
  const [portfolioItems, setPortfolioItems] = useState([]);
  useEffect(() => {
    if (portfolio) {
      setPortfolioItems(portfolio || []);
    }
  }, [portfolio]);
  /*const [portfolioItems, setPortfolioItems] = useState([
    {
      id: "1",
      image: "https://placeimg.com/640/480/arch",
      title: "Project 1",
      subtitle: "This is project 1",
    },
    {
      id: "2",
      image: "https://placeimg.com/640/480/nature",
      title: "Project 2",
      subtitle: "This is project 2",
    },
    {
      id: "3",
      image: "https://placeimg.com/640/480/people",
      title: "Project 3",
      subtitle: "This is project 3",
    },
    // ... add more as needed
  ]);

  //const [portfolioItems, setPortfolioItems] = useState([]);
  useEffect(() => {
    axios.get('YOUR_STRAPI_API_ENDPOINT')
      .then(response => {
        setPortfolioItems(response.data);
      })
      .catch(error => {
        console.log('Error fetching portfolio items:', error);
      });
  }, []);*/

  return (
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
        // gap: '64px',
        // scrollSnapType: "y mandatory",
      }}
    >
      <Routes>
  <Route path="sitemap" element={<Sitemap routes={portfolioItems.map(item => ({ path: item.id, name: item.title }))} />} />
  <Route path="/" element={<PortfolioOverview />} />
  <Route path=":itemId" element={<PortfolioItem />} />
</Routes>
    </div>
  );
};

{
  /* 
<div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: "48px",
          // scrollSnapAlign: "start",
        }}
      >
        <h1>Portfolio</h1>
      </div>
      <div style={{ width: "100%" }}>
        <Grid container spacing={2} columns={{ xs: 2, md: 10 }}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={1} md={2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  maxWidth: "200px",
                  width: "180px",
                  minHeight: "300px",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    background: "gray",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <img
                    src={item.image}
                    objectFit="scale-down"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div style={{ width: "100%" }}>{item.title}</div>
                <div style={{ width: "100%" }}>{item.subtitle}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div> */
}
export default PortfolioPage;
