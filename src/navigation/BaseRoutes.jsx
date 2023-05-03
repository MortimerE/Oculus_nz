import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ServicesPage from "../pages/ServicesPage";
import LearnPage from '../pages/LearnPage';

import Register from '../pages/SubPages/Register';
import Enquire from '../pages/SubPages/Enquire';
import LoginPage from '../pages/SubPages/login';
import Manage from '../pages/SubPages/Manage';
import AccountCreation from '../pages/SubPages/CreateAccount';
import RequestsPage from '../pages/SubPages/Requests';
import NewsletterSignUpPage from '../pages/SubPages/Newsletter';

// import { homeRoutes, aboutRoutes } from "../routes/routes";

export const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/learn/newsletter" element={<NewsletterSignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<AccountCreation />} />
    </Routes>
  );
};

export default BaseRoutes;
