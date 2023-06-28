import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Career = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      <div
        style={{
          width: "100%",
          // flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: '32px'
        }}
      >
        <div
          style={{
            width: "45%",
            height: "75%",
            //   flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "32px",
          }}
        >
          <h1>CAREER</h1>
          <Divider style={{ width: "100%", height: "8px" }} />
          <p>
            We are the largest and most influential building enclosure
            specialists in New Zealand. We do this by improving the buildings in
            New Zealand, so that people can have warm and dry homes, workplaces
            and schools.
          </p>
          <p>
            <b>
              Our Values of Individuality, Stewardship, Resourcefulness and
              Transparency
            </b>{" "}
            drive everything we do here at Oculus and speak to who we are. We
            are passionate; working together and striving to always develop and
            grow - both as a business, as individuals and in our contributions
            within our industry - whilst looking after ourselves and each other.
          </p>
        </div>
        <div
          style={{
            width: "55%",
            height: "75%",
            // flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            gap: '32px',
          }}
        >
          <p style={{textAlign: 'left'}}>
            <b>Benefits</b>
          </p>
          <ul style={{ marginLeft: "32px" }}>
            <li>Competetive salary/benefits</li>
            <li>Flexible working opportunities</li>
            <li>
              Annual training allowance to support you in your personal
              development
            </li>
          </ul>
          <p style={{ marginBottom: "-24px" }}>
            <b>Want to be part of the team?</b>
          </p>
          <p>
            <b>Contact Lesley on lesley@oculusltd.co.nz</b>
          </p>
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
            CONTACT LESLEY
          </Button>
        </div>
      </div>
      <div style={{ width: "100%", height: '10%' }}>Employee testimonials go here</div>
    </div>
  );
};

export default Career;
