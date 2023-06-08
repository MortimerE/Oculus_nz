import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { useParams } from 'react-router-dom';
import PortfolioItemDetails from './PortfolioItemDetails';

export const PortfolioItem = () => {
const dummyPortfolioItem = {
    id: 1,
    title: "Sample Project",
    description: "This is a sample project used for demonstration purposes. It involves multiple components, complex logic, and showcases best practices in coding standards.",
    image: "https://via.placeholder.com/150", // This is a link to a placeholder image. Replace it with your own image link.
    subtitle: "A demo project",
    };

  const [itemData, setItemData] = useState(null);
  const { itemId } = useParams(); // Get the item ID from the URL
  

  useEffect(() => {
    /*
    // Fetch data for the specific item from the Strapi CMS
    axios.get(`YOUR_STRAPI_API_ENDPOINT/${itemId}`)
      .then(response => {
        setItemData(response.data);
      })
      .catch(error => {
        console.log('Error fetching portfolio item:', error);
      });*/
      setItemData(dummyPortfolioItem); // Remove this line when you have the API endpoint ready
  }, [itemId]); // Rerun this effect when the item ID changes
  return itemData ? (
    <PortfolioItemDetails title={itemData.title} description={itemData.description} />
  ) : (
    <p>Loading...</p> // Replace with your own loading component
  );
};

export default PortfolioItem;
