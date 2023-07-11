import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import AppContext from "../../../contexts/AppContext";
import ArticleReader from "../../embeds/ArticleReader"; // replace this with the correct path
import { styled } from "@mui/system";
import StyledDivider from "../../reusable/StyledDivider";
import PinkButton from "../../reusable/PinkButton";

const Underline = styled("hr")({
  borderColor: "#000000",
  borderWidth: "1px",
});

const GridItem = styled(Box)(({ theme }) => ({
  background: "#f5f5f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  aspectRatio: "1/1",
  padding: theme.spacing(1),
  boxSizing: "border-box",
  borderRadius: "8px",
  cursor: "pointer",
  color: "#000000",
}));

const BlogArticleItemDetails = ({ item }) => {
  const { state, api } = useContext(AppContext);
  const { setScrollTo, articles } = state;
  const navigate = useNavigate();

  const [recommendedArticles, setRecommendedArticles] = useState([]);

  useEffect(() => {
    if (item) {
      if (item.recIsRandom) {
        // Filter out all articles in the same category
        let sameCategoryArticles = articles.filter(
          (article) =>
            article.category === item.category && article.title !== item.title
        );
        if (sameCategoryArticles.length === 0) {
          // If no articles in the same category, use all articles
          sameCategoryArticles = articles.filter(
            (article) => article.title !== item.title
          );
        }
        // Randomize and pick up to three
        sameCategoryArticles.sort(() => Math.random() - 0.5);
        setRecommendedArticles(
          sameCategoryArticles.slice(0, 3).map((article) => article.title)
        );
      } else if (item.recommendations) {
        setRecommendedArticles(item.recommendations.split(", "));
      }
    }
  }, [item, articles]);

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const handleItemClick = (article) => {
    /*const formattedName = article.toLowerCase().replaceAll(" ", "");
    navigate(`/learn/blog/${formattedName}`);*/
    navigate(`/learn/blog/${article}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        justifyContent: "space-between",
        padding: "32px",
      }}
    >
      <Box sx={{ width: "40%", paddingRight: "32px" }}>
        <Typography variant="h3" gutterBottom>
          {item.title}
        </Typography>
        <StyledDivider />
        <Typography variant="body1" gutterBottom>
          {item.abstract}
        </Typography>

        <Typography variant="body1" fontWeight="bold">
          Got a similar topic & you'd like to engage us?
        </Typography>
        <RouterLink to="/" onClick={() => handleScroll("enquire")}>
          <PinkButton onClick={() => {}} text={"Enquire Here"} />
        </RouterLink>

        <Typography variant="h6" gutterBottom>
          You might also like
        </Typography>
        <StyledDivider />
        <Grid container spacing={2} sx={{ marginTop: "16px" }}>
          {recommendedArticles.map((article, i) => (
            <Grid item xs={4} key={i}>
              <GridItem onClick={() => handleItemClick(article)}>
                {article}
              </GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ flex: "1 1 auto", pl: 2, maxHeight: '60vh'}}>
        <ArticleReader data={item.body} />{" "}
        {/* rich text viewer component with markdown passed as prop */}
      </Box>
    </Box>
  );
};

export default BlogArticleItemDetails;
