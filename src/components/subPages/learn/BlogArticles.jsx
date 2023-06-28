import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../contexts/AppContext';

export const BlogArticles = () => {
  const [blogArticles, setBlogArticles] = useState(null);
  const navigate = useNavigate();
  
  const handleClick = (itemId) => {
    navigate(`/learn/blog/${itemId}`);
  };

  const { state } = useContext(AppContext);
  const { articles } = state;

  useEffect(() => {
    if (articles) {
      setBlogArticles(articles || []);
    }
  }, [articles]);
  const endpoint = import.meta.env.VITE_STRAPIURL;

  return blogArticles ? (
    <div>
      {blogArticles.map(item => (
        <div key={item.id} onClick={() => handleClick(item.title)}>
        <img src={endpoint + item.thumbnail.data.attributes.url} alt={item.title} style={{maxWidth: '200px', height: 'auto'}}/>
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

export default BlogArticles;
