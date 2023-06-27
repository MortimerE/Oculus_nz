import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AppContext from '../../../contexts/AppContext';

export const AboutUs = () => {
  const navigate = useNavigate();
  const {state, api} = useContext(AppContext);
  const { aboutUsData } = state;

  const {
    description,
    founded,
    team,
    locale,
    teamPhoto,
  } = aboutUsData;

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
          gap: "32px",
        }}
      >
        <h1>ABOUT US</h1>
        <Divider style={{width: '100%', height: '8px'}} />
        {/*}
        <p>
          Oculus is a group of passionate enclosure / facade engineers on a
          mission to provide guidance and resources to design buildings with
          comfort, health and performance as top priority.
        </p>
        <ul style={{ marginLeft: "32px" }}>
          <li>Founded in 2018 by James Powers & Shawn McIsaac</li>
          <li>Team of 25</li>
          <li>Across all of New Zealand</li>
        </ul>
      */}
        <p>{description}</p>
        <ul style={{ marginLeft: "32px" }}>
          <li>Founded in {founded}</li>
          <li>Team of {team}</li>
          <li>Across {locale}</li>
        </ul>
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
          Our Method
        </Button>
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
        <img src={teamPhoto} alt="Oculus Team" />
      </div>
    </div>
  );
};

export default AboutUs;
