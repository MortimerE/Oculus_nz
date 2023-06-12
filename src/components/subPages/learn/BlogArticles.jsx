import React, { useState } from 'react';
import { BlogArticleItem } from './BlogArticleItem';
import { useNavigate } from 'react-router-dom';

const dummyData = [
  {
    id: 1,
    title: 'First Blog Article',
    author: 'Author 1',
    date: 'Date 1',
    image: '/path/to/image1.jpg',
    summary: 'This is a summary of the first blog article...',
    content: 'Full content of the first blog article...',
  },
  // Add more dummy blog articles here...
];

export const BlogArticles = () => {
  const [blogArticles, setBlogArticles] = useState(dummyData);
  const navigate = useNavigate();
  
  const handleClick = (itemId) => {
    navigate(`/blog/${itemId}`);
  };

  return (
    <div>
      {blogArticles.map(article => (
        <div key={article.id} onClick={() => handleClick(article.id)}>
          <img src={article.image} alt={article.title} /> 
          <p>{article.title}</p>
          <p>{article.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogArticles;
