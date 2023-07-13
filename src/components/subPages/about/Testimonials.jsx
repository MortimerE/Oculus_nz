import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import StyledDivider from "../../reusable/StyledDivider";
import { Link } from "react-router-dom";

const quotes = [
  {
    text: "Oculus is incredible",
    author: "Customer"
  },
  {
    text: "Best buildings on or off land",
    author: "President of New Zealand"
  },
  {
    text: "Bernard has fantastic facial hair",
    author: "Adi"
  },
];

export const Testimonials = () => {
  const navigate = useNavigate();

  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveQuoteIndex((activeQuoteIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeQuoteIndex]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "flex-end",
        justifyContent: "center",
        marginLeft: '64px',
        marginRight: '64px'
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
          gap: "8px",
        }}
      >
        <h1 style={{ marginBottom: "24px" }}>TESTIMONIALS</h1>
        <StyledDivider />
        <p style={{marginTop: '24px'}}>Here is what our clients think.</p>
        <p style={{ marginBottom: "24px" }}>Want to work with us too?</p>
        <Link to="/services">
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
          Our Services
        </Button>
        </Link>
      </div>
      <div
        style={{
          width: "55%",
          height: "60%",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
      sx={{
        position: "relative",
        display: "flex",
        height: "60vh",
        width: "40vw",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        scrollSnapAlign: "start",
        padding: "0 64px 160px 64px",
        boxSizing: "border-box",
      }}>
        <Typography variant="h4" fontStyle="italic" component="p" gutterBottom>
        "{quotes[activeQuoteIndex].text}"
      </Typography>
      <Typography variant="h6" component="p">
        - {quotes[activeQuoteIndex].author}
      </Typography>
      </Box>
      </div>
    </div>
  );
};

export default Testimonials;
