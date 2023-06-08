import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Monitoring = () => {
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
          height: "55%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          paddingTop: '96px',
          gap: "32px",
        }}
      >
        <p>
          Ensuring a robust, defect free install is just as important as a good
          design.
        </p>
        <p>
          We provide on-site monitoring to review mock-ups, observe testing, and
          generally provide support and a second (or third) set of eyes to check
          that everything is installed properly the first time.
        </p>
        <p>
          We also review shop drawings, liaise with suppliers, and sort out any
          questions or details based on hidden site conditions and/or beyond
          what’s shown on the drawings.
        </p>
        <Button
          variant="contained"
          style={{
            background: "#ec008c",
            color: "white",
            height: "48px",
            fontSize: ".8em",
            width: "200px",
            // marginTop: "auto",
          }}
        >
          ENQUIRE HERE
        </Button>
      </div>
      <div
        style={{
          width: "50%",
          height: "55%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1 style={{ alignSelf: "flex-end" }}>CONSTRUCTION MONITORING & PS4</h1>
        <Divider
          style={{ width: "100%", height: "8px", alignSelf: "flex-end" }}
        />
        <ul style={{ marginLeft: "64px" }}>
          <li style={{ marginBottom: "8px" }}>
            Construction Monitoring Levels are based on size and complexity of
            the project/assemblies
          </li>
          <li style={{ marginBottom: "8px" }}>
            We usually recommend CM3 (a site visit every week or two)
          </li>
          <li style={{ marginBottom: "8px" }}>
            We issue site reports with observations and recommendations for
            remediations
          </li>
          <li style={{ marginBottom: "8px" }}>
            We can review proposals for design changes and issue letters for
            consent amendments
          </li>
          <li>
            At the end of envelope construction, we check installers/PS3s, close
            out defects, and issue an enclosure PS4
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Monitoring;
