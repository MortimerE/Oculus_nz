import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { useNavigate } from "react-router-dom";
import StyledDivider from "../../reusable/StyledDivider";

export const OurTeam = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "FirstName LastName",
      position: "Position1",
      email: "email1@email.com",
      status: "",
    },
    {
      name: "FirstName LastName",
      position: "Position2",
      email: "email2@email.com",
      status: "",
    },
    {
      name: "FirstName LastName",
      position: "Position3",
      email: "email3@email.com",
      status: "",
    },
    {
      name: "FirstName LastName",
      position: "Position4",
      email: "email4@email.com",
      status: "",
    },
    {
      name: "FirstName LastName",
      position: "Position5",
      email: "email5@email.com",
      status: "",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginLeft: '64px',
        marginRight: '64px'
      }}
    >
      <div
        style={{
          width: "45%",
          height: "20%",
          //   flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          marginBottom: "32px",
            gap: "32px",
        }}
      >
        <h1>OUR TEAM</h1>
        <StyledDivider />
      </div>
      <div
        style={{
          width: "100%",
          height: "50%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {teamMembers.map((member, index) => {
  return (
    <div
      key={index}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "200px",
        width: "180px",
        minHeight: "300px",
        gap: "8px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "180px",
          background: "gray",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        picture goes here
      </div>
      <div style={{ width: "100%" }}>{member.name}</div>
      <div style={{ width: "100%" }}>{member.position}</div>
      <div style={{ width: "100%" }}>{member.email}</div>
    </div>
  );
})}

      </div>
    </div>
  );
};

export default OurTeam;
