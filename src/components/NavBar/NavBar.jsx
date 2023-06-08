import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { styled } from '@mui/material/styles';
import { Popper, AppBar, Toolbar, Typography, IconButton, Box, MenuItem, Menu, ListItemIcon } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';



//import { MenuIcon } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)`
  background-color: #000000;
  height: 12vh;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Dropdown = ({ label, children }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleMouseEnter = () => {
      setOpen(true);
    };

    const handleMouseLeave = () => {
      setOpen(false);
    };

    return (
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Typography ref={anchorRef} style={{ color: 'white', cursor: 'pointer' }}>
          <Link to={`/${label.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>{label}</Link>
        </Typography>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="top-start">
          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <StyledMenu
              open={open}
              onClose={handleMouseLeave}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {children}
            </StyledMenu>
          </Box>
        </Popper>
      </Box>
    );
  };

  const Logo = styled('img')`
  max-height: 10vh;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
`;

  const DropdownContainer = styled(Box)`
    display: flex;
    gap: 1rem;
    `;

    const [searchAnchorEl, setSearchAnchorEl] = useState(null);
    const [userAnchorEl, setUserAnchorEl] = useState(null);
    
    const handleSearchClick = (event) => {
        setSearchAnchorEl(event.currentTarget);
      };
      
      const handleUserClick = (event) => {
        setUserAnchorEl(event.currentTarget);
      };
      
      const handleSearchClose = () => {
        setSearchAnchorEl(null);
      };
      
      const handleUserClose = () => {
        setUserAnchorEl(null);
      };

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Link to="/">
            <Logo src="/Reverse White Oculus Logo transparent bg.png" alt="logo" />
          </Link>
          <DropdownContainer>
            <Dropdown label="About" link="/about">
              <MenuItem onClick={handleClose} component={Link} to="/about/about-us">
                About Us
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about/our-team">
                Our Team
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about/our-method">Our Method</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about/portfolio">Portfolio</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about/testimonials">Testimonials</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about/events">Events</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about/career">Career</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about/associations">Associations</MenuItem>
            </Dropdown>

            <Dropdown label="Services" link="/services">
            <MenuItem onClick={handleClose} component={Link} to="/services/building-enclosure">Building Enclosure</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/design">Design</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/construction">Construction</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/monitoring-ps4">Monitoring & PS4</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/passive-house">Passive House</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/component-design">Component Design</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/ps1">PS1</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/modeling">Modeling</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/testing">Testing</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/investigation-retrofit">Investigation & Retrofit</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/services/product-compliance-engineering">Product Compliance & Engineering</MenuItem>
            </Dropdown>

            <Dropdown label="Portfolio" link="/portfolio">
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/banff-avenue">Banff Avenue</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/aroha-street">Aroha Street</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/galway-street">Galway Street</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/great-north-road-waterview">Great North Road Waterview</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/bader-ventura">Bader Ventura</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/neo-apartments">Neo Apartments</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/20-crescent-road">20 Crescent Road</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/kaplan-house">Kaplan House</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/4-viaduct-harbour">4 Viaduct Harbour</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/fortune-road">Fortune Road</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/woodford-grace">Woodford Grace</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/st-georges">St Georges</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/greys-avenue">Greys Avenue</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/portfolio/hill-crescent">St Georges</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/great-north-road-avondale">Great North Road Avondale</MenuItem>
           </Dropdown>

           <Dropdown label="Learn" link="/learn">
           <MenuItem onClick={handleClose} component={Link} to="/learn/tools-resources">Tools & Resources</MenuItem>
           <MenuItem onClick={handleClose} component={Link} to="/learn/nzbc-h1">NZBC H1</MenuItem>
           <MenuItem onClick={handleClose} component={Link} to="/learn/changes">Changes</MenuItem>
           <MenuItem onClick={handleClose} component={Link} to="/learn/podcasts">Podcasts</MenuItem>
           <MenuItem onClick={handleClose} component={Link} to="/learn/bs-bs-seminars">BS+BS Seminars</MenuItem>
           <MenuItem onClick={handleClose} component={Link} to="/learn/blog-bs">Blog + BS</MenuItem>
           <MenuItem onClick={handleClose} component={Link} to="/learn/newsletter">Newsletter</MenuItem>
           </Dropdown>

           <Dropdown label="Contact">
              <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
                <MenuItem onClick={handleClose}>
                  Contact Us
              </MenuItem></ScrollLink>
           <MenuItem onClick={handleClose} component={Link} to="/contact/linkedin">LinkedIn</MenuItem>
           </Dropdown>
        </DropdownContainer>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMobileMenuClick}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </IconButton>
          <Box>
    <IconButton edge="end" color="inherit" onClick={handleSearchClick}>
      <SearchIcon />
    </IconButton>

    <IconButton edge="end" color="inherit" onClick={handleUserClick}>
      <PersonIcon />
    </IconButton>
  </Box>
        </StyledToolbar>
        <Popover
  open={Boolean(searchAnchorEl)}
  anchorEl={searchAnchorEl}
  onClose={handleSearchClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
>
    <TextField
        autoFocus
        placeholder="Search for an article..."
        onChange={handleSearchClose}
        InputProps={{
        startAdornment: (
            <InputLabel shrink={false} sx={{ color: 'grey' }}>
            Search for an article...
            </InputLabel>
        ),
        }}
    />
</Popover>

<Popover
  open={Boolean(userAnchorEl)}
  anchorEl={userAnchorEl}
  onClose={handleUserClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
>
    <Box sx={{ p: 1 }}>
    <MenuItem onClick={handleUserClose} sx={{ color: 'black' }}>
  <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link>
</MenuItem>
<Divider />
<MenuItem onClick={handleUserClose} sx={{ color: 'black' }}>
  <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
</MenuItem>

    </Box>

</Popover>

      </StyledAppBar>
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* ... */}
      </div>
    </>
  );
};

export default NavBar;
