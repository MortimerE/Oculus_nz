import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext';

export const Modelling = () => {
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
          width: "30%",
          height: "80%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1>MODELLING</h1>
        <Divider style={{ width: "100%", height: "8px" }} />
        <h2>PHPP</h2>
        <p>
          The Passive House Planning Package (PHPP) is a complex spreadsheet
          that counts all of the energy inputs and outputs of the building to
          check how much energy it takes to make a comfortable interior
          environment.
        </p>
        <p>
          We can use it to help you design a passive house certified building,
          or simply to optimise your building enclosure and increase efficiency
          to reduce operational carbon and HVAC costs.
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
          width: "30%",
          height: "63%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h2>THERMAL MODELLING</h2>
        <p>
          Thermal modelling of the whole building relies on accurate thermal
          bridge modelling of components, structure, junctions, and connections.
        </p>
        <p>
          We can use thermal bridge modelling software such as THERM and FLIXO
          to help compare the thermal performance of different junction options
          to optimise design. That performance can then be fed into the overall
          envelope model to ensure an accurate result.
        </p>
      </div>
      <div
        style={{
          width: "30%",
          height: "63%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <h2>HYGROTHERMAL (WUFI)</h2>
        <p>
          For floor, roof, and wall assemblies, long-term durability relies on
          them staying dry.
        </p>
        <p>
          Hygrothermal modelling through WUFI checks on the heat, air, and
          moisture flows through different wall assembly layers to diagnose any
          interstitial condensation (or dew point) problems before they arise.
        </p>
        <p>
          Some assemblies work and some trap moisture and grow mould. WUFI can
          show you which one is which.
        </p>
      </div>
    </div>
  );
};

export default Modelling;
