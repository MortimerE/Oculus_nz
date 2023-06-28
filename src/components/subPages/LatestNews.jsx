import React, { useState, useContext } from "react";
import { Typography, Button, Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Register from "./contact/Register.jsx";
import AppContext from "../../contexts/AppContext";

// Styled Components
const Title = styled(Typography)`
  text-decoration: underline;
`;

const LatestNews = () => {
  const { state, api } = useContext(AppContext);
  const { latestNewsData } = state;

  const { featuredArticle, newestArticle, nextSeminar } = latestNewsData;

  /* State for featured article
  const [featuredArticle, setFeaturedArticle] = useState({
    title:
      "BADER VENTURA: FIRST SOCIAL HOUSING PASSIVE HOUSE IN NZ APPROACHING COMPLETION",
    link: "/featured-article", // Update this with the actual route or URL when available
  });

  // State for new article
  const [newestArticle, setNewArticle] = useState({
    title: "NEW RESOURCE ON EXTERNAL INSULATION",
    link: "/new-article", // Update this with the actual route or URL when available
  });

  // State for next seminar
  const [nextSeminar, setNextSeminar] = useState({
    title: 'NEXT BUILDING SCIENCE + BULLSH*T SEMINAR: EXTERNAL INSULATION 02.03.2022',
    link: '/next-seminar', // Update this with the actual route or URL when available
    seminar: 'External Insulation' // This should be the exact seminar name in your registration form dropdown
  });*/

  const [showRegister, setShowRegister] = useState(false);

  // Function to handle the closure of Register overlay
  const closeRegister = () => {
    setShowRegister(false);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "60%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1>Latest News</h1>
        <Divider style={{ width: "100%", height: "8px" }} />
        <Typography variant="p">{featuredArticle.title}</Typography>
        <Typography variant="body1">{featuredArticle.description}</Typography>
        <Button
          variant="contained"
          style={{
            background: "#ec008c",
            color: "white",
            height: "48px",
            fontSize: ".8em",
            width: "200px",
          }}
          //   onClick={navigate("/about/our-method")}
        >
          <Link to={featuredArticle.link}>READ HERE</Link>
        </Button>
      </div>
      <div
        style={{
          width: "45%",
          height: "60%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "32px",
          paddingLeft: "64px",
        }}
      >
        <Typography variant="p">{newestArticle.title}</Typography>
        <Button
          variant="contained"
          style={{
            background: "#ec008c",
            color: "white",
            height: "48px",
            fontSize: ".8em",
            width: "200px",
          }}
        >
          <Link to={newestArticle.link}>READ HERE</Link>
        </Button>
        <Typography variant="p">{nextSeminar.title}</Typography>
        {/* Set showRegister to true when the button is clicked */}
        <Button
          variant="contained"
          style={{
            background: "#ec008c",
            color: "white",
            height: "48px",
            fontSize: ".8em",
            width: "200px",
          }}
          onClick={() => setShowRegister(true)}
        >
          REGISTER HERE
        </Button>
        {/* Display the Register component as overlay if showRegister is true */}
        {showRegister && (
          <Register
            onClose={closeRegister}
            selectedSeminars={[nextSeminar.seminar]}
          />
        )}
      </div>
    </div>
  );
};

export default LatestNews;
