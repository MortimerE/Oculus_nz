import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ScrollContext } from '../../../contexts/ScrollContext';

export const PassiveHouse = () => {
  const navigate = useNavigate();
  const { setScrollTo } = React.useContext(ScrollContext);

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "85%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1>PASSIVE HOUSE</h1>
        <Divider style={{ width: "100%", height: "8px" }} />
        <h2>Design</h2>
        <p>
          A Passive House (or Passivhaus) is a building that provides year-round
          comfortable indoor conditions with extremely low energy demand. The
          focus in Passive House is to optimise the building envelope for the
          local climate and reduce the energy demand needed to keep an even,
          comfortable temperature throughout the house.
        </p>
        <p>
          It can work for any building, and at almost any pricepoint. Why go
          passive with your house?
        </p>
        <h3>HEALTH, COMFORT, ECONOMY AND ENERGY EFFICIENCY</h3>
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
          width: "45%",
          height: "80%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <p>
          <b>Stages of the design phase</b>
        </p>
        <p>1. Design Feasibility Study</p>
        <p>2. Detailed Design Phase</p>
        <p>3. Developed Design Phase</p>
        <div style={{ width: "100%", marginTop: '16px', flexGrow: 1, border: "1px solid blue" }}>
          Diagram goes here
        </div>
      </div>
    </div>
  );
};

export default PassiveHouse;
