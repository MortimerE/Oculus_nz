import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Link } from "react-scroll";
import AppContext from "../contexts/AppContext";

const Contact = () => {
  const [activeComponent, setActiveComponent] = useState("contact");
  const [imageUrl, setImageUrl] = useState("./vite.svg"); // state to hold the image URL
  const { state, api } = useContext(AppContext);
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
        justifyContent: "center",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      {activeComponent === "contact" && (
        <Box
          sx={{
            flexGrow: 1,
            padding: (theme) => theme.spacing(4),
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h4"
              underline="true"
              sx={{
                fontWeight: "bold",
                fontSize: "28px",
                marginBottom: (theme) => theme.spacing(2),
              }}
            >
              WE'D LOVE TO HEAR FROM YOU
            </Typography>
            <Typography variant="p" gutterBottom>
              Do you want to work with us?
            </Typography>
            <Link to="enquire" onClick={() => handleScroll("enquire")}>
              <Button
                style={{
                  background: "#ec008c",
                  color: "white",
                  height: "48px",
                  fontSize: ".8em",
                  width: "200px",
                  marginBottom: "8px",
                }}
                variant="contained"
              >
                Enquire Here
              </Button>
            </Link>
            <Typography variant="body2" gutterBottom>
              General <br />
              09 123 456 <br />
              <br />
              Accounts <br />
              027 863 7263 <br />
              <br />
              If you have current services with us and you need urgent help{" "}
              <br />
              0225601312
            </Typography>
            <Typography variant="body2" gutterBottom>
              We prefer video conferencing, it saves time and allows us to
              connect from anywhere in NZ
            </Typography>
          </div>
          <Grid item xs={1} md={1}>
            <img
              src={imageUrl}
              alt="Map"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default Contact;
