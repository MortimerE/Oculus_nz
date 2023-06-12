import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogArticleItemDetails from './BlogArticleItemDetails';

export const BlogArticleItem = () => {
const dummyBlogArticleItem = {
    id: 1,
    title: "Sample Article",
    description: "This is a sample article used for demonstration purposes. It involves multiple components, complex logic, and showcases best practices in coding standards.",
    image: "https://via.placeholder.com/150", // This is a link to a placeholder image. Replace it with your own image link.
    subtitle: "A demo article",
    };

  const [itemData, setItemData] = useState(null);
  const { itemId } = useParams(); // Get the item ID from the URL
  

  useEffect(() => {
      setItemData(dummyBlogArticleItem); // Remove this line when you have the API endpoint ready
  }, [itemId]); // Rerun this effect when the item ID changes

  return itemData ? (
    <BlogArticleItemDetails title={itemData.title} description={itemData.description} />
  ) : (
    <p>Loading...</p> // Replace with your own loading component
  );
};

export default BlogArticleItem;

