import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../contexts/AppContext";
import { Grid } from "@mui/material";


export const BlogArticles = () => {
  const [blogArticles, setBlogArticles] = useState(null);
  const navigate = useNavigate();

  const handleClick = (itemId) => {
    navigate(`/learn/blog/${itemId}`);
  };

  const { state } = useContext(AppContext);
  const { articles } = state;

  useEffect(() => {
    if (articles) {
      setBlogArticles(articles || []);
    }
  }, [articles]);
  const endpoint = import.meta.env.VITE_STRAPIURL;

  return blogArticles ? (
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
        scrollSnapAlign: "start",
      }}
    >
      <Grid
        container
        columns={{ xs: 10 }}
        direction="row"
        sx={{ width: "100%" }}
      >
        {blogArticles.map((item) => (
          <Grid item xs={2} key={item.id} onClick={() => handleClick(item.title)}>
            <img
              src={endpoint + item.thumbnail.data.attributes.url}
              alt={item.title}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.date}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <p>Loading...</p> // Replace with your own loading component
  );
};

export default BlogArticles;
