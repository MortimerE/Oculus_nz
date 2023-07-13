import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext';
import StyledDivider from "../../reusable/StyledDivider";


export const Compliance = () => {
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
        flexDirection: "column",
        alignItems: "flex-end",
        width: "100%",
        height: "100vh",
        justifyContent: "flex-start",
        marginLeft: "64px",
        marginRight: "64px",
        paddingTop: "15vh",
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          alignSelf: "flex-end",
          gap: "32px",
          paddingTop: "8vh",
        }}
      >
        <h2>PRODUCT COMPLIANCE & ENGINEERING</h2>
        <StyledDivider />
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          paddingTop: "2vh",
        }}
      >
        <div
          style={{
            width: "30%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "32px",
          }}
        >
          <h2>COMPLIANCE PATHWAY</h2>
        <p>
          We can generate building code clause compliance pathway reports for
          building enclosure components and assemblies.
        </p>
        <p>
          This is similar to an appraisal or technical statement in that it
          relies data sheets and domestic or international test reports to
          outline its compliance with the relevant building code clauses.
        </p>
        </div>

        <div
          style={{
            width: "30%",
            height: "45%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <h2>CODE COMPLIANCE</h2>
        <img src={"./codes.png"} style={{objectFill: 'fill', width: '100%', margin: "0px"}}/>
        </div>

        <div
          style={{
            width: "30%",
            height: "45%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <h2>ENGINEERING JUDMENT</h2>
        <p>
          We can also evaluate components or assemblies to issue engineering
          judgement letters explaining compatibility, extrapolations or limits
          of usage, and/or similarities to tested components or systems.
        </p>
        <p>
          This is to answer specific questions from consultants or councils and
          relies on bespoke engineering, previous testing/research by others,
          and or new bespoke testing.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
