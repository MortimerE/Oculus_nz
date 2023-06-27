import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext';

export const PortfolioOverview = () => {
  const { state } = useContext(AppContext);
  const { portfolio } = state;
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    if (portfolio) {
      setPortfolioItems(portfolio || []);
    }
  }, [portfolio]);

  const navigate = useNavigate();

  const handleClick = (itemId) => {
    navigate(`/portfolio/${itemId}`);
  };
  
  return portfolioItems ? (
    <div>
      {portfolioItems.map(item => (
        <div key={item.id} onClick={() => handleClick(item.title)}>
          <img src={item.thumbnail} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.buildingType}</p>
          <p>{item.location}</p>
        </div>
      ))}
    </div>
  ) : (
    <p>Loading...</p> // Replace with your own loading component
  );  
};

export default PortfolioOverview;

