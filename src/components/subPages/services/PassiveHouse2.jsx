import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ScrollContext } from '../../../contexts/ScrollContext';

export const PassiveHouse2 = () => {
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
          height: "80%",
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
        <h2>Certification</h2>
        <p>
          A huge benefit of the Passive House (or Passivhaus) process is the
          independent certification. Its rigorous set of checks and balances
          ensure that the model accurately reflects real world performance and
          that the building will work as designed.
        </p>
        <p>
          Are you a Passive House designer with a design needing certification?
          We can help.
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
        <div
          style={{
            width: "100%",
            marginTop: "16px",
            flexGrow: 1,
            border: "1px solid blue",
          }}
        >
          Image goes here
        </div>
      </div>
    </div>
  );
};

export default PassiveHouse2;
