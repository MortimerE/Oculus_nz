import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext';


export const Testing = () => {
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
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      <div
        style={{
          width: "40%",
          height: "65%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingTop: "96px",
          gap: "32px",
        }}
      >
        <h2>BLOWER DOOR TEST</h2>
        <p>
          Blower door tests check the airtightness of the enclosure.
          Interpreting test reports from testing companies such as Shelby
          Wright, we can feed information into the envelope design including:
        </p>
        <ul style={{ marginLeft: "64px" }}>
          <li style={{ marginBottom: "8px" }}>Enclosure integrity</li>
          <li style={{ marginBottom: "8px" }}>Smoke control systems</li>
          <li style={{ marginBottom: "8px" }}>
            Pressurized stairwells (fire safety)
          </li>
          <li style={{ marginBottom: "8px" }}>Green star Buildings</li>
          <li style={{ marginBottom: "8px" }}>
            Homestar buildings, standalone, multi-residential
          </li>
          <li style={{ marginBottom: "8px" }}>Passive Houses</li>
        </ul>
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
          height: "65%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1 style={{ alignSelf: "flex-end" }}>TESTING</h1>
        <Divider
          style={{ width: "100%", height: "8px", alignSelf: "flex-end" }}
        />
        <h2>WINDOW TESTING: AMAA 501 & 502</h2>
        <p>
          Reliance on water and/or pressure testing on the installation of
          windows during construction is a key part of our construction
          monitoring service.
        </p>
        <p>
          While lab tests can assist in selection of components during design,
          site testing of installed windows checks on the connection between the
          window and adjacent components in-situ.
        </p>
        <p>
          We started a trend of testing windows on our construction monitoring
          projects, and we are now seeing a transition to us observing tests by
          Shelby Wright or window manufacturers.
        </p>
      </div>
    </div>
  );
};

export default Testing;
