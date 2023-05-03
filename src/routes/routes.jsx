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
import Enquire from '../pages/SubPages/Enquire';

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
    element: <Sitemap routes={pageRoutes} />,
    name: "Sitemap",
  },
  { path: "latest-news", element: <h1>Latest News</h1>, name: "Latest News" },
  { path: "contact", element: <h1>Contact</h1>, name: "Contatct" },
  { path: "enquire", element: <Enquire />, name: "Enquire Here" },
];

export const aboutRoutes = [
  { path: "about-us", element: <h1>About Us</h1>, name: "About Us" },
  { path: "our-team", element: <h1>Our Team</h1>, name: "Our Team" },
  { path: "our-method", element: <h1>Our Method</h1>, name: "Our Method" },
  {
    path: "testimonials",
    element: <h1>Testimonials</h1>,
    name: "Testimonials",
  },
  { path: "events", element: <h1>Events</h1>, name: "Events" },
  { path: "career", element: <h1>Career</h1>, name: "Career" },
  {
    path: "associations",
    element: <h1>Associations</h1>,
    name: "Associations",
  },
];

export const aboutRoutesRender = [
  { path: "sitemap-about", element: <Sitemap routes={aboutRoutes} />, name: 'About Sitemap' },
  ...aboutRoutes,
];