import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext';
import StyledDivider from "../../reusable/StyledDivider";

export const ComponentDesign = () => {
  const navigate = useNavigate();
  const {state, api} = useContext(AppContext);
  const { scrollTo } = state;
const { setScrollTo } = api;

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
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
        paddingTop: "20vh",
      }}
    >
      <div
        style={{
          width: "40%",
          height: "70%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          paddingTop: "96px",
          gap: "32px",
        }}
      >
        <p>
          A good enclosure is a sum of its parts, and sometimes those parts need
          some bespoke component engineering. We can do the structural
          engineering for different types of cladding, shades, louvres, pergolas
          or any other bits and bobs that connect to the outside of the
          building.
        </p>
        <Link to="/" onClick={() => handleScroll('enquire')}>
        <Button
          variant="contained"
          style={{
            background: "#ec008c",
            color: "white",
            height: "48px",
            fontSize: ".8em",
            width: "200px",
            marginTop: "auto",
          }}
        >
          ENQUIRE HERE
        </Button>
        </Link>
      </div>
      <div
        style={{
          width: "35%",
          height: "80%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          gap: "32px",
        }}
      >
        <h1 style={{ alignSelf: "flex-end" }}>COMPONENT DESIGN PS1</h1>
        <StyledDivider />
        <ul style={{ marginLeft: "64px" }}>
          <li style={{ marginBottom: "8px", fontSize: '20px' }}>Bespoke Claddings</li>
          <li style={{ marginBottom: "8px", fontSize: '20px' }}>Lourves</li>
          <li style={{ marginBottom: "8px", fontSize: '20px' }}>Shades</li>
          <li style={{ marginBottom: "8px", fontSize: '20px' }}>Brackets</li>
          <li style={{ marginBottom: "8px", fontSize: '20px' }}>Battens</li>
          <li style={{ marginBottom: "8px", fontSize: '20px' }}>Anything Else</li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentDesign;
