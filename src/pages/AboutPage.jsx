import React, { useContext } from "react";
import { aboutRoutesRender, aboutRoutes } from "../routes/routes";
import AppContext from "../contexts/AppContext";
import { scroller } from "react-scroll";
import { PageView } from "../components/reusable/PageView";

import PinkButton from "../components/reusable/PinkButton";

export const AboutPage = () => {
  const { state, api } = useContext(AppContext);
  const { scrollTo } = state;
  const { setScrollTo } = api;

  React.useEffect(() => {
    // Temporarily disable scroll snap
    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.style.scrollSnapType = "none";
    }

    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
        ignoreCancelEvents: true,
      });

      setTimeout(() => {
        if (scrollContainer) {
          scrollContainer.style.scrollSnapType = "y mandatory";
        }
      }, 100);
      // Reset the scroll target so it doesn't affect other pages
      setScrollTo("");
    }
  }, [scrollTo, setScrollTo]);

  const pageConfig = {
    headerPos: "left",
    title: "About Us",
    columns: [
      <>
        <p>
          Oculus is a group of passionate enclosure / facade engineers on a
          mission to provide guidance and resources to design buildings with
          comfort, health and performance as top priority.
        </p>
        <ul style={{ marginLeft: "32px" }}>
          <li>Founded in 2018 by James Powers & Shawn McIsaac</li>
          <li>Team of 25</li>
          <li>Across all of New Zealand</li>
        </ul>
        {/* <p>description</p>
        <ul style={{ marginLeft: "32px" }}>
          <li>Founded in founded</li>
          <li>Team of team</li>
          <li>Across locale</li>
        </ul> */}
        <PinkButton onClick={() => {}} text={"Our Method"} />
      </>,
      <img
        style={{
          width: "100%",
          // maxWidth: '100%',
          maxHeight: "100%",
          objectFit: "scale-down",
        }}
        src={"./enclosure-diagram-x.png"}
      />,
    ],
  };
  return (
    <>
      {aboutRoutesRender.map((route) => (
        <div
          id={route.path}
          style={{
            position: "relative",
            display: "flex",
            height: "100vh",
            width: "100%",
            border: "1px solid green",
            alignItems: "center",
            justifyContent: "flex-end",
            scrollSnapAlign: "start",
            padding: route.path.includes("sitemap") ? "" : "0 0 24vh 0",
          }}
          key={route.name}
        >
          {route.element}
        </div>
      ))}
    {/* <div
      id={"test"}
      style={{
        position: "relative",
        display: "flex",
        height: "100vh",
        width: "100%",
        border: "1px solid green",
        alignItems: "center",
        justifyContent: "flex-end",
        scrollSnapAlign: "start",
        padding: "0 0 160px 0",
      }}
      key={"test"}
    >
      <PageView pageConfig={pageConfig} />
    </div> */}
    </>
  );
};

export default AboutPage;
