// src/components/BlogCard.js
import React from 'react';
import './BlogCard.css';

function BlogCard({ title, category, image }) {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <div className="category">{category}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default BlogCard;
