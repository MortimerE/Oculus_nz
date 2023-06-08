import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Investigation = () => {
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
          width: "45%",
          height: "65%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1>INVESTIGATION & RETROFIT</h1>
        <Divider style={{ width: "100%", height: "8px" }} />
        <h2>INVESTIGATION & CONDITION ASSESSMENT</h2>
        <p>
          Is this water a leak or condensation? Is something damaged, or was it
          the design or installation? Why are certain areas warmer or colder
          than others? What do these stains mean?
        </p>
        <p>
          With a bit drawing review, testing, and site observations, we can
          answer all of these questions. We identify water entry, dew point
          issues, and hot/cold spots and we know how to fix them.
        </p>
        <p>
          We can also assess the condition of existing roofing, cladding,
          tanking, windows or anything else on the outside of the building to
          help you plan early for future maintenance.
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
          width: "45%",
          height: "50%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <h2>RETROFIT & REMEDIATION</h2>
        <p>
          Retrofitting an older building or just doing routine maintenance? Let
          us help you improve the performance and durability of the building at
          the same time to get you the best long-term value for your project.
        </p>
        <p>
          Whether it’s a brand new building, a heritage building, or leaky
          building needing remediation, we design and construction monitor
          holistic repairs and replacements that fix a problem at the source and
          prevent it from reappearing in the future.
        </p>
      </div>
    </div>
  );
};

export default Investigation;
