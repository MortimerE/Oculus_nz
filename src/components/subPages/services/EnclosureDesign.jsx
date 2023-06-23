import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ScrollContext } from '../../../contexts/ScrollContext';

export const EnclosureDesign = () => {
  const navigate = useNavigate();
  const { setScrollTo } = React.useContext(ScrollContext);

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
        justifyContent: "space-between",
        marginLeft: "64px",
        marginRight: "64px",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "60%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h1>BUILDING ENCLOSURE DESIGN</h1>
        <Divider style={{ width: "100%", height: "8px" }} />
        <p>
          Our expertise goes beyond the vertical facade to include below-grade
          waterproofing, windows, walls, cladding, roofs, decks and all the
          other components in between.
        </p>
        <p>
          This comprehensive approach means easier consents, more robust
          assemblies, simplified junctions, quicker answers during design, and
          ultimately a much more holistic building envelope solution.
        </p>
        <p>There are three different ways we can get involved on a project.</p>
        <Link to="/" onClick={() => handleScroll('enquire')}>
                <Button
                  variant="contained"
                  style={{
                    background: "#ec008c",
                    color: "white",
                    height: "48px",
                    fontSize: ".8em",
                    width: "200px",
                    marginTop: 'auto'
                  }}
                >
                  ENQUIRE HERE
                </Button>
              </Link>
      </div>

      <div
        style={{
          width: "45%",
          height: "60%",
          // flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
        }}
      >
        <h2>ENCLOSURE DESIGN (PS1)</h2>
        <p>
          We accept primary design responsibility for all enclosure elements and
          junctions. We work closely with the architect to guide the design and
          rely on precedent testing, appraisals, design guides and other
          manufacturer’s data for compliance.
        </p>
        <h2>ENCLOSURE DESIGN PEER REVIEW (PS2)</h2>

        <p>
          We review the building enclosure design from another designer to
          satisfy council requirements and ensure the design is robust and
          compliant.
        </p>
        <p>
          <b>Enclosure Design Review or Detail Drawings</b>
        </p>
        <p>
          We provide independent design advice, recommendations and/or assembly
          details to simplify construction and give flexibility and confidence
          to work outside of prescriptive details to try something different or
          innovative.
        </p>
      </div>
    </div>
  );
};

export default EnclosureDesign;
