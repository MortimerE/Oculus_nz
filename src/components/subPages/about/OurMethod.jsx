import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React from "react";
import { useNavigate } from "react-router-dom";

export const OurMethod = () => {

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
          width: "60%",
          height: "60%",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Arrow Diagram goes here
      </div>
      <div
        style={{
          width: "40%",
          height: "60%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1>OUR METHOD</h1>
        <Divider style={{ width: "100%", height: "8px" }} />
        <p>
          We concentrate on the building envelope: the roof, the walls, the
          windows, the underground and all the connections in between. We help
          create a design that is simple and cost effective but high
          performance.
        </p>
        <p>
          Since the enclosure works together with the rest of the building, we
          work collaboratively with the rest of the project team to create a
          design that works for everyone.
        </p>
        <p>
          One that’s easy to construct, energy efficient, good for the
          environment, and most importantly: healthy, low-maintenance and
          comfortable for the occupants.
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
        //   onClick={navigate("/services")}
        >
          Our Services
        </Button>
      </div>
    </div>
  );
};

export default OurMethod;
