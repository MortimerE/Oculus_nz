import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ServicesPage from "../pages/ServicesPage";
import LearnPage from '../pages/LearnPage';
import Contact from '../pages/ContactPage';

import Enquire from '../components/subPages/contact/Enquire';
import LoginPage from '../components/subPages/account/login';
import Manage from '../components/subPages/account/Manage';
import AccountCreation from '../components/subPages/account/CreateAccount';
import RequestsPage from '../components/subPages/learn/Requests';
import Register from '../components/subPages/learn/Register';
import NewsletterSignUpPage from '../components/subPages/learn/Newsletter';

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
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default BaseRoutes;
