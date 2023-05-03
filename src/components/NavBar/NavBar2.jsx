import React from "react";
import { LogoContainer, Nav, NavContainer, NavMenu } from "./NavBarElements";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <LogoContainer>
            <Link to="/">
              <h2 style={{ color: "white" }}>Logo</h2>
            </Link>
          </LogoContainer>
          <NavMenu>
            <Link to="/about">
              <p style={{ color: "white" }}>About</p>
            </Link>
            <Link to="/services">
              <p style={{ color: "white" }}>Services</p>
            </Link>
            <Link to="/portfolio">
              <p style={{ color: "white" }}>Portfolio</p>
            </Link>
            <Link to="/learn">
              <p style={{ color: "white" }}>Learn</p>
            </Link>
          </NavMenu>
          <div
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: "1.8rem",
              cursor: "pointer",
              transform: "translate(-100%, 60%)",
              color: 'white'
            }}
          >
            <MenuIcon />
          </div>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
