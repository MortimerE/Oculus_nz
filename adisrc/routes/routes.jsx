// {homeRoutes.map((route) => {
//   <Route
//     path={`/${route.path}`}
//     element={route.element}
//     key={route.path}
//   />;
// })}

// {aboutRoutes.map((route) => {
//   <Route
//     path={`/${route.path}`}
//     element={route.element}
//     key={route.path}
//   />;
// })}

import Sitemap from "../components/Sitemap";

import { AboutUs } from "../components/subPages/about/AboutUs";
import { OurMethod } from "../components/subPages/about/OurMethod";
import { OurTeam } from "../components/subPages/about/OurTeam";
import { Testimonials } from "../components/subPages/about/Testimonials";
import { Events } from "../components/subPages/about/Events";
import { Career } from "../components/subPages/about/Career";

import { EnclosureDesign } from '../components/subPages/services/EnclosureDesign';
import { Monitoring } from '../components/subPages/services/Monitoring';
import { PassiveHouse } from '../components/subPages/services/PassiveHouse';
import { PassiveHouse2 } from '../components/subPages/services/PassiveHouse2';
import { ComponentDesign } from '../components/subPages/services/ComponentDesign';
import { Modelling } from '../components/subPages/services/Modelling';
import { Testing } from '../components/subPages/services/Testing';
import { Investigation } from '../components/subPages/services/Investigation';
import { Compliance } from '../components/subPages/services/Compliance';


export const pageRoutes = [
  { path: "about", element: <h1>About</h1>, name: "About" },
  { path: "services", element: <h1>Services</h1>, name: "Services" },
  { path: "learn", element: <h1>Learn</h1>, name: "Learn" },
  {
    path: "product-pathways",
    element: <h1>Product Pathways</h1>,
    name: "Product Pathways",
  },
  {
    path: "nzbc-h1-changes",
    element: <h1>NZBC H1 Changes</h1>,
    name: "NZBC H1 Changes",
  },
  { path: "our-team", element: <h1>Our Team</h1>, name: "Our Team" },
  { path: "portfolio", element: <h1>Portfolio</h1>, name: "Portfolio" },
  {
    path: "passive-house",
    element: <h1>Passive House</h1>,
    name: "Passive House",
  },
  { path: "podcasts", element: <h1>Podcasts</h1>, name: "Podcasts" },
  {
    path: "bader-ventura",
    element: <h1>Bader Ventura Case Study</h1>,
    name: "Bader Ventura Case Study",
  },
];
export const homeRoutes = [
  {
    path: "sitemap",
    element: <Sitemap routes={pageRoutes} centerText={'Oculus'} />,
    name: "Sitemap",
  },
  { path: "latest-news", element: <h1>Latest News</h1>, name: "Latest News" },
  { path: "contact", element: <h1>Contact</h1>, name: "Contatct" },
  { path: "enquire", element: <h1>Enquire Here</h1>, name: "Enquire Here" },
];

export const aboutRoutes = [
  { path: "about/about-us", element: <AboutUs />, name: "About Us" },
  { path: "about/our-team", element: <OurTeam />, name: "Our Team" },
  { path: "about/our-method", element: <OurMethod />, name: "Our Method" },
  {
    path: "about/testimonials",
    element: <Testimonials />,
    name: "Testimonials",
  },
  { path: "about/events", element: <Events />, name: "Events" },
  { path: "about/career", element: <Career />, name: "Career" },
  {
    path: "about/associations",
    element: <h1>Associations</h1>,
    name: "Associations",
  },
];

export const aboutRoutesRender = [
  { path: "/about/sitemap", element: <Sitemap routes={aboutRoutes} centerText={'About Oculus'} />, name: 'About Sitemap' },
  ...aboutRoutes,
];
export const servicesRoutes = [
  { path: "enclosure-design", element: <EnclosureDesign />, name: "Building Enclosure Design" },
  { path: "monitoring", element: <Monitoring />, name: "Construction Monitoring & PS4" },
  { path: "passive-house", element: <PassiveHouse />, name: "Passive House" },
  { path: "passive-house2", element: <PassiveHouse2/>, name: "Passive House2" },
  {
    path: "component-design",
    element: <ComponentDesign />,
    name: "Component Design PS1",
  },
  { path: "modelling", element: <Modelling />, name: "Modelling" },
  { path: "testing", element: <Testing />, name: "Testing" },
  {
    path: "investigation",
    element: <Investigation />,
    name: "Investigation & Retrofit",
  },
  {
    path: "compliance",
    element: <Compliance />,
    name: "Product Compliance & Engineering",
  },
];

export const servicesRoutesRender = [
  { path: "sitemap-about", element: <Sitemap routes={servicesRoutes} centerText={'Oculus Services'} />, name: 'About Sitemap' },
  ...servicesRoutes,
];