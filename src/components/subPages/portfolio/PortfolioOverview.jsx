import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PortfolioOverview = () => {
  // Dummy data
  const dummyData = [
    {
      id: 1,
      title: "Project 1",
      subtitle: "This is project 1",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Project 2",
      subtitle: "This is project 2",
      image: "https://via.placeholder.com/150"
    },
    // Add as many objects as you like
  ];

  const [portfolioItems, setPortfolioItems] = useState(dummyData);
  //const [portfolioItems, setPortfolioItems] = useState([]);
  const navigate = useNavigate();
/*
  useEffect(() => {
    // Fetch data from Strapi CMS
    axios.get('YOUR_STRAPI_API_ENDPOINT') 
      .then(response => {
        setPortfolioItems(response.data);
      })
      .catch(error => {
        console.log('Error fetching portfolio items:', error);
      });
  }, []);
*/
  const handleClick = (itemId) => {
    navigate(`/portfolio/${itemId}`);
  };
  
  return (
    <div>
      {portfolioItems.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          <img src={item.image} alt={item.title} /> // You need to replace 'image', 'title' and 'subtitle' with actual keys from your API data
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioOverview;
