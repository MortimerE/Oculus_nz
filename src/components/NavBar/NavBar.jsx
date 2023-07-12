import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../contexts/AppContext";
import { Link as ScrollLink } from "react-scroll";
import { styled } from "@mui/material/styles";
import {
  Popper,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  MenuItem,
  Menu,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import Popover from "@mui/material/Popover";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import { SearchBar } from "../embeds/Search";

//import { MenuIcon } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)`
  background-color: #000000;
  height: 12vh;
  zIndex: 5;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row; // Aligns children horizontally
  justify-content: space-around; // Distributes children evenly with space around them
  zIndex: 5;
`;

const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    background-color: #f1f1f1;
  }
  & .MuiMenuItem-root {
    color: black;
    min-width: 160px;
  }
  & .MuiMenuItem-root:hover {
    background-color: #ddd;
  }
`;


const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { state, api } = useContext(AppContext);
  const { scrollTo } = state;
  const { setScrollTo } = api;

  const { portfolio } = state;
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    if (portfolio) {
      setPortfolioItems(portfolio || []);
    }
  }, [portfolio]);

  const handleScroll = (scrollTarget) => {
    setScrollTo(scrollTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const DropdownContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 4vw;
    cursor: pointer;
    z-index: 5;
  `;

  const DropdownItems = styled(Box)`
    display: none;
    position: absolute;
    z-index: 5;
    background-color: #f1f1f1;
    border-radius: 4px;
    min-width: 160px;
    color: black;
    top: 44px;
    maxwidth: "";
  `;

  const Dropdown = ({ label, link, children }) => {
    return (
      <DropdownContainer
        onMouseEnter={() => {
          document.getElementById(label).style.display = "block";
        }}
        onMouseLeave={() => {
          document.getElementById(label).style.display = "none";
        }}
      >
        <Typography style={{ color: "white" }}>
          <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
            {label}
          </Link>
        </Typography>
        <DropdownItems id={label}>{children}</DropdownItems>
      </DropdownContainer>
    );
  };

  const Logo = styled("img")`
    max-height: 10vh;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 5px;
    z-index: 7;
  `;

  const [userAnchorEl, setUserAnchorEl] = useState(null);

  const handleUserClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleUserClose = () => {
    setUserAnchorEl(null);
  };

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Link to="/">
            <Logo
              src="/Reverse White Oculus Logo transparent bg.png"
              alt="logo"
            />
          </Link>
          <DropdownContainer>
            <Dropdown label="About" link="/about">
              <Link to="/about" onClick={() => handleScroll("about-us")}>
                <MenuItem>About Us</MenuItem>
              </Link>
              <Link to="/about" onClick={() => handleScroll("our-team")}>
                <MenuItem>Our Team</MenuItem>
              </Link>
              <Link to="/about" onClick={() => handleScroll("our-method")}>
                <MenuItem>Our Method</MenuItem>
              </Link>
              <Link to="/about" onClick={() => handleScroll("testimonials")}>
                <MenuItem>Testimonials</MenuItem>
              </Link>
              <Link to="/about" onClick={() => handleScroll("events")}>
                <MenuItem>Events</MenuItem>
              </Link>
              <Link to="/about" onClick={() => handleScroll("career")}>
                <MenuItem>Career</MenuItem>
              </Link>
              <Link to="/about" onClick={() => handleScroll("associations")}>
                <MenuItem>Associations</MenuItem>
              </Link>
            </Dropdown>

            <Dropdown label="Services" link="/services">
              <Link
                to="/services"
                onClick={() => handleScroll("enclosure-design")}
              >
                <MenuItem>Enclosure Design</MenuItem>
              </Link>
              <Link
                to="/services"
                onClick={() => handleScroll("construction-monitoring")}
              >
                <MenuItem>Construction Monitoring</MenuItem>
              </Link>
              <Link
                to="/services"
                onClick={() => handleScroll("passive-house")}
              >
                <MenuItem>Passive Design</MenuItem>
              </Link>
              <Link
                to="/services"
                onClick={() => handleScroll("passive-house2")}
              >
                <MenuItem>Passive Certification</MenuItem>
              </Link>
              <Link
                to="/services"
                onClick={() => handleScroll("component-design")}
              >
                <MenuItem>Component Design</MenuItem>
              </Link>
              <Link to="/services" onClick={() => handleScroll("modelling")}>
                <MenuItem>Modelling</MenuItem>
              </Link>
              <Link to="/services" onClick={() => handleScroll("testing")}>
                <MenuItem>Testing</MenuItem>
              </Link>
              <Link
                to="/services"
                onClick={() => handleScroll("investigation")}
              >
                <MenuItem>Investigation & Retrofit</MenuItem>
              </Link>
              <Link to="/services" onClick={() => handleScroll("compliance")}>
                <MenuItem>Product Compliance & Engineering</MenuItem>
              </Link>
            </Dropdown>

            <Dropdown label="Portfolio" link="/portfolio">
            {portfolioItems
              .filter(item => item.isFeatured)
              .map(item => (
                <MenuItem key={item.id} component={Link} to={`/portfolio/${item.title.replace(/ /g, '-').toLowerCase()}`}>
                  {item.title}
                </MenuItem>
              ))}
          </Dropdown>

            <Dropdown label="Learn" link="/learn">
              <Link to="/learn" onClick={() => handleScroll("tools-resources")}>
                <MenuItem>Tools & Resources</MenuItem>
              </Link>
              <Link to="/learn" onClick={() => handleScroll("nzbc-changes")}>
                <MenuItem>NZBC H1</MenuItem>
              </Link>
              <Link
                to="/learn"
                onClick={() => handleScroll("science-seminars")}
              >
                <MenuItem>BS+BS Seminars</MenuItem>
              </Link>
              <Link to="/learn" onClick={() => handleScroll("podcasts")}>
                <MenuItem>20 Degrees</MenuItem>
              </Link>
              <Link to="/learn" onClick={() => handleScroll("podcasts2")}>
                <MenuItem>Gab Learns</MenuItem>
              </Link>
              <Link to="/learn" onClick={() => handleScroll("blog-bs")}>
                <MenuItem>Blog + BS</MenuItem>
              </Link>
              <Link to="/learn" onClick={() => handleScroll("blog-articles")}>
                <MenuItem>Articles</MenuItem>
              </Link>
              <Link to="/learn" onClick={() => handleScroll("newsletter")}>
                <MenuItem>Newsletter</MenuItem>
              </Link>
            </Dropdown>

            <Link to="/" onClick={() => handleScroll("contact")}>
              <p>Contact</p>
            </Link>
          
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuClick}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </IconButton>
          <Box>
              <SearchBar onClick={() => console.log("click!")}/>
              <IconButton edge="end" color="inherit" onClick={handleUserClick}>
                <PersonIcon />
              </IconButton>
            </Box>
          </DropdownContainer>
          <Popover
            open={Boolean(userAnchorEl)}
            anchorEl={userAnchorEl}
            onClose={handleUserClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box sx={{ p: 1 }}>
              <MenuItem onClick={handleUserClose} sx={{ color: "black" }}>
                <Link
                  to="/login"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Log In
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleUserClose} sx={{ color: "black" }}>
                <Link
                  to="/signup"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Sign Up
                </Link>
              </MenuItem>
            </Box>
          </Popover>
        </StyledToolbar>
      </StyledAppBar>
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? "open" : ""}`}>
        {/* ... */}
      </div>
    </>
  );
};

export default NavBar;
