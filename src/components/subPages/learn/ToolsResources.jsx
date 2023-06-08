import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ToolsAndResourcesItem } from '../components/subPages/toolsAndResources/ToolsAndResourcesItem';
import { ToolsAndResourcesOverview } from '../components/subPages/toolsAndResources/ToolsAndResourcesOverview';
import Sitemap from './Sitemap';
import axios from 'axios';

export const ToolsAndResourcesPage = () => {
  const [toolsAndResourcesItems, setToolsAndResourcesItems] = useState([]);
  const navigate = useNavigate();

  // Fetch data from Strapi CMS
  // You would replace 'YOUR_STRAPI_API_ENDPOINT' with the actual endpoint for your tools and resources items
  useEffect(() => {
    axios.get('YOUR_STRAPI_API_ENDPOINT') 
      .then(response => {
        setToolsAndResourcesItems(response.data);
      })
      .catch(error => {
        console.log('Error fetching tools and resources items:', error);
      });
  }, []);

  const handleClick = (itemId) => {
    navigate(`/tools-and-resources/${itemId}`);
  };

  return (
    <Routes>
      <Route path="/" element={<ToolsAndResourcesOverview toolsAndResourcesItems={toolsAndResourcesItems} />} />
      <Route path=":itemId" element={<ToolsAndResourcesItem />} />
      <Route path="sitemap" element={<Sitemap routes={toolsAndResourcesItems.map(item => ({ path: item.id, name: item.title }))} />} />
    </Routes>
  );
};

export default ToolsAndResourcesPage;
