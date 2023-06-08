import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ServicesPage from "../pages/ServicesPage";
import LearnPage from '../pages/LearnPage';

// import { homeRoutes, aboutRoutes } from "../routes/routes";

export const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/learn" element={<LearnPage />} />
    </Routes>
  );
};

export default BaseRoutes;
