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
import RequestsPage from '../components/subPages/contact/Requests';
import Register from '../components/subPages/contact/Register';
import NewsletterSignUpPage from '../components/subPages/contact/NewsletterSignUp';
import PortfolioItem from '../components/subPages/portfolio/PortfolioItem';
import Resource from '../components/subPages/learn/Resource';
import BlogArticleItem from "../components/subPages/learn/BlogArticleItem";
import Seminar from "../components/subPages/learn/Seminar";
// import { homeRoutes, aboutRoutes } from "../routes/routes";

export const BaseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio/*" element={<PortfolioPage />} />
      <Route path="/portfolio/:itemId" element={<PortfolioItem />} />
      <Route path="/learn/*" element={<LearnPage />} />
      <Route path="/learn/tools-resources/:itemId" element={<Resource />} />
      <Route path="/learn/newsletter-sign-up" element={<NewsletterSignUpPage />} />
      <Route path="/learn/blog/:itemId" element={<BlogArticleItem />} />
      <Route path='/learn/seminars/:itemId' element={<Seminar />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<AccountCreation />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default BaseRoutes;
