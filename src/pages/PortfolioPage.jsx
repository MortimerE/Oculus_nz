import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PortfolioItem } from '../components/subPages/portfolio/PortfolioItem';
import { PortfolioOverview } from '../components/subPages/portfolio/PortfolioOverview';
import { Sitemap } from '../components/Sitemap';
//import axios from 'axios';

export const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: '1',
      image: 'https://placeimg.com/640/480/arch',
      title: 'Project 1',
      subtitle: 'This is project 1',
    },
    {
      id: '2',
      image: 'https://placeimg.com/640/480/nature',
      title: 'Project 2',
      subtitle: 'This is project 2',
    },
    {
      id: '3',
      image: 'https://placeimg.com/640/480/people',
      title: 'Project 3',
      subtitle: 'This is project 3',
    },
    // ... add more as needed
  ]);

  //const [portfolioItems, setPortfolioItems] = useState([]);
/*
  useEffect(() => {
    axios.get('YOUR_STRAPI_API_ENDPOINT')
      .then(response => {
        setPortfolioItems(response.data);
      })
      .catch(error => {
        console.log('Error fetching portfolio items:', error);
      });
  }, []);*/

  return (
    <Routes>
      <Route path="sitemap" element={<Sitemap routes={portfolioItems.map(item => ({ path: item.id, name: item.title }))} />} />
      <Route path="/" element={<PortfolioOverview />} />
      <Route path=":itemId" element={<PortfolioItem />} />
    </Routes>
  );
};

export default PortfolioPage;