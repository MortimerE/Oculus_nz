import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import BlogArticleItemDetails from './BlogArticleItemDetails';
import AppContext from '../../../contexts/AppContext'; // replace YOUR_CONTEXT

export const BlogArticleItem = () => {
  const [itemData, setItemData] = useState(null);
  const { itemId } = useParams(); // Get the item ID from the URL

  // Context
  const { state } = useContext(AppContext); // replace YOUR_CONTEXT
  const { articles } = state; // Replace with the correct state variable name
  const [articleItems, setArticleItems] = useState([]);
  
  useEffect(() => {
    if (articles) {
      setArticleItems(articles || []);
    }
  }, [articles]);

  useEffect(() => {
    // Find the specific item by its id from the context data
    const item = articleItems.find(item => item.title === itemId);
    if (item) {
      setItemData(item);
    }
  }, [itemId, articleItems]); // Rerun this effect when the item ID or articleItems array changes

  return itemData ? (
    <BlogArticleItemDetails item={itemData} />
  ) : (
    <p>Loading...</p> // Replace with your own loading component
  );
};

export default BlogArticleItem;


