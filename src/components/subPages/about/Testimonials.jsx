import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { useNavigate } from "react-router-dom";
import StyledDivider from "../../reusable/StyledDivider";

export const Testimonials = () => {
  const navigate = useNavigate();

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
          gap: "8px",
        }}
      >
        <h1 style={{ marginBottom: "24px" }}>TESTIMONIALS</h1>
        <StyledDivider />
        <p style={{marginTop: '24px'}}>Here is what our clients think.</p>
        <p style={{ marginBottom: "24px" }}>Want to work with us too?</p>
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
          Our Services
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
      ></div>
    </div>
  );
};

export default Testimonials;
