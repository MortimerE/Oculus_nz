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
import Enquire from '../components/subPages/contact/Enquire';
import LatestNews from '../components/subPages/LatestNews';
import Contact from '../pages/ContactPage';

import { AboutUs } from "../components/subPages/about/AboutUs";
import { OurMethod } from "../components/subPages/about/OurMethod";
import { OurTeam } from "../components/subPages/about/OurTeam";
import { Testimonials } from "../components/subPages/about/Testimonials";
import { Events } from "../components/subPages/about/Events";
import { Career } from "../components/subPages/about/Career";
import { Associations } from "../components/subPages/about/Associations";

import { EnclosureDesign } from '../components/subPages/services/EnclosureDesign';
import { Monitoring } from '../components/subPages/services/Monitoring';
import { PassiveHouse } from '../components/subPages/services/PassiveHouse';
import { PassiveHouse2 } from '../components/subPages/services/PassiveHouse2';
import { ComponentDesign } from '../components/subPages/services/ComponentDesign';
import { Modelling } from '../components/subPages/services/Modelling';
import { Testing } from '../components/subPages/services/Testing';
import { Investigation } from '../components/subPages/services/Investigation';
import { Compliance } from '../components/subPages/services/Compliance';

import { ToolsResources } from '../components/subPages/learn/ToolsResources';
import { H1Changes } from '../components/subPages/learn/H1Changes';
import { ScienceSeminars } from '../components/subPages/learn/ScienceSeminars';
import { Podcast } from '../components/subPages/learn/Podcasts';
import { Podcast2 } from '../components/subPages/learn/Podcasts';
import { BlogBS } from '../components/subPages/learn/BlogBS';
import { BlogArticles } from '../components/subPages/learn/BlogArticles';
import { Newsletter } from '../components/subPages/learn/Newsletter';

export const pageRoutes = [
  { path: "about", element: <AboutUs />, name: "About" },
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
  { path: "podcasts", element: <Podcast />, name: "Podcasts" },
  {
    path: "bader-ventura",
    element: <h1>Bader Ventura Case Study</h1>,
    name: "Bader Ventura Case Study",
  },
];

export const homeRoutes = [
  {
    path: "sitemap",
    element: <Sitemap initialRoutes={pageRoutes} centerText={'LOGO'} />,
    name: "Sitemap",
  },
  { path: "contact", element: <Contact />, name: "Contact" },
  { path: "enquire", element: <Enquire />, name: "Enquire Here" },
];

export const homeRoutesShowLatest = [
  {
    path: "sitemap",
    element: <Sitemap initialRoutes={pageRoutes} centerText={'Oculus'} />,
    name: "Sitemap",
  },
  { path: "latest-news", element: <LatestNews />, name: "Latest News" },
  { path: "contact", element: <Contact />, name: "Contact" },
  { path: "enquire", element: <Enquire />, name: "Enquire Here" },
];

export const aboutRoutes = [
  { path: "about-us", element: <AboutUs />, name: "About Us" },
  { path: "our-team", element: <OurTeam />, name: "Our Team" },
  { path: "our-method", element: <OurMethod />, name: "Our Method" },
  {
    path: "testimonials",
    element: <Testimonials />,
    name: "Testimonials",
  },
  { path: "events", element: <Events />, name: "Events" },
  { path: "career", element: <Career />, name: "Career" },
  {
    path: "associations",
    element: <Associations />,
    name: "Associations",
  },
];

export const aboutRoutesRender = [
  { path: "/about/sitemap", element: <Sitemap initialRoutes={aboutRoutes} centerText={'About Oculus'} />, name: 'About Sitemap' },
  ...aboutRoutes,
];
export const servicesRoutes = [
  { path: "enclosure-design", element: <EnclosureDesign />, name: "Building Enclosure Design" },
  { path: "construction-monitoring", element: <Monitoring />, name: "Construction Monitoring & PS4" },
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
  { path: "sitemap-about", element: <Sitemap initialRoutes={servicesRoutes} centerText={'Oculus Services'} />, name: 'About Sitemap' },
  ...servicesRoutes,
];

export const learnRoutes = [
  { path: "tools-resources", element: <ToolsResources />, name: "Tools & Resources" },
  { path: "nzbc-changes", element: <H1Changes />, name: "NZBC H1 Changes" },
  { path: "science-seminars", element:<ScienceSeminars />, name: "Building Science + BS Seminars" },
  { path: "podcasts", element:<Podcast />, name: "Podcasts" },
  { path: "podcasts2", element:<Podcast2 />, name: "Podcasts2" },
  { path: "blog-bs", element: <BlogBS />, name: "Blog & BS" },
  { path: "blog-articles", element: <BlogArticles />, name: "Blog Articles" },
  { path: "newsletter", element: <Newsletter />, name: "Newsletter" },
];

export const learnRoutesRender = [
  { path: "sitemap-learn", element: <Sitemap initialRoutes={learnRoutes} centerText={'Building Science is not a guessing game - learn with us'} />, name: 'Learn Sitemap' },
  ...learnRoutes,
];