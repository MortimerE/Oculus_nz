import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Compliance = () => {
  const navigate = useNavigate();

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
          height: "60%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1>PRODUCT COMPLIANCE & ENGINEERING</h1>
        <Divider style={{ width: "100%", height: "8px" }} />
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
      </div>
      <div
        style={{
          width: "30%",
          height: "45%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h2>CODE COMPLIANCE</h2>
        <p>codes will go here</p>
      </div>
      <div
        style={{
          width: "30%",
          height: "45%",
          // flexGrow: 1,
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
  );
};

export default Compliance;
