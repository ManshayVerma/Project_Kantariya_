// src/components/BlogSection.js
import React, { useState } from 'react';
import './BlogSection.css';

const blogs = [
  {
    id: 1,
    category: 'Finance',
    title: 'Top 5 Ways to Revolutionize Your Accounting Processes',
    readTime: '8 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/d9a8/fbe2/d1ad3dd0be2ed567a5773d7aad996d88?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVEF6gBHO4IiZiKQWHzXmfagzGNgD~8LfVJkyVeb8NfnysQVQZ7K4riJ~tFFZV5KA1nyZu3TWI1iAD4BGFD9D~9BQjc6e7cJkqgkk075c-~QKescJSHii54PfX3hxGh~ASy-2xa6tNhfUgJwuWSt2fugXr--5UoJKLQMfrIw~89z2HPF5gjC2JuU7MgAYgYAqyQNIOLnydGvAQduH8IOxlFNBSxi7b7W5Vv~O9C1aW0SQR07nmdYPi1r5L4QnnKh~fM7QsL1QnBZTcmPPN5smb8om~gXOaDbnv69qBasLmYid~WDJITIvVRpTVwC2iuc84FCaRg-P2ZQz67qqm3EHw__',
  },
  {
    id: 2,
    category: 'Banking',
    title: 'The Ultimate Guide to Maximizing Efficiency',
    readTime: '10 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/302c/4683/7e3845bbdea2197c24406e62abc1de5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llpGLC0hOCgNlWyZMSq9knNBXMcohBiH7qrm6azrWgS45FqfvK8NtBrcmBvX1iD7z4eji0DU~0UeyQuAG-iH6Q30ED5cY7E7PqDhaFSNwxFBhPeMY0m44H2rlJx-epuLdDw0Tt6OQw3sS0d8n8rD5Qd-P026Z5L-1Yr9ThOLeU-hmf5b9rfTJeykIQ6kOiFAsjy77PaRRC3DGBnhvbaA~mHcFzXGIt2nJ4l9xA2IqV6U~U3YAqsgW5aFxlDI2TeH3P3v6DuhtjHKtSB3r5BYl2EkLEMS4Vbhfnh4wbVBF8rCINNUdAMAnXYrt1Au1JHdHbbbBDwXnqkpBXSChFZH5g__',
  },
  {
    id: 3,
    category: 'Accounting',
    title: 'The Future of Financial Automation',
    readTime: '8 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/302c/4683/7e3845bbdea2197c24406e62abc1de5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llpGLC0hOCgNlWyZMSq9knNBXMcohBiH7qrm6azrWgS45FqfvK8NtBrcmBvX1iD7z4eji0DU~0UeyQuAG-iH6Q30ED5cY7E7PqDhaFSNwxFBhPeMY0m44H2rlJx-epuLdDw0Tt6OQw3sS0d8n8rD5Qd-P026Z5L-1Yr9ThOLeU-hmf5b9rfTJeykIQ6kOiFAsjy77PaRRC3DGBnhvbaA~mHcFzXGIt2nJ4l9xA2IqV6U~U3YAqsgW5aFxlDI2TeH3P3v6DuhtjHKtSB3r5BYl2EkLEMS4Vbhfnh4wbVBF8rCINNUdAMAnXYrt1Au1JHdHbbbBDwXnqkpBXSChFZH5g__',
  },
  {
    id: 4,
    category: 'Accounting',
    title: 'The Future of Financial Automation',
    readTime: '8 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/302c/4683/7e3845bbdea2197c24406e62abc1de5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llpGLC0hOCgNlWyZMSq9knNBXMcohBiH7qrm6azrWgS45FqfvK8NtBrcmBvX1iD7z4eji0DU~0UeyQuAG-iH6Q30ED5cY7E7PqDhaFSNwxFBhPeMY0m44H2rlJx-epuLdDw0Tt6OQw3sS0d8n8rD5Qd-P026Z5L-1Yr9ThOLeU-hmf5b9rfTJeykIQ6kOiFAsjy77PaRRC3DGBnhvbaA~mHcFzXGIt2nJ4l9xA2IqV6U~U3YAqsgW5aFxlDI2TeH3P3v6DuhtjHKtSB3r5BYl2EkLEMS4Vbhfnh4wbVBF8rCINNUdAMAnXYrt1Au1JHdHbbbBDwXnqkpBXSChFZH5g__',
  },
  {
    id: 5,
    category: 'Finance',
    title: 'Top 5 Ways to Revolutionize Your Accounting Processes',
    readTime: '8 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/d9a8/fbe2/d1ad3dd0be2ed567a5773d7aad996d88?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVEF6gBHO4IiZiKQWHzXmfagzGNgD~8LfVJkyVeb8NfnysQVQZ7K4riJ~tFFZV5KA1nyZu3TWI1iAD4BGFD9D~9BQjc6e7cJkqgkk075c-~QKescJSHii54PfX3hxGh~ASy-2xa6tNhfUgJwuWSt2fugXr--5UoJKLQMfrIw~89z2HPF5gjC2JuU7MgAYgYAqyQNIOLnydGvAQduH8IOxlFNBSxi7b7W5Vv~O9C1aW0SQR07nmdYPi1r5L4QnnKh~fM7QsL1QnBZTcmPPN5smb8om~gXOaDbnv69qBasLmYid~WDJITIvVRpTVwC2iuc84FCaRg-P2ZQz67qqm3EHw__',
  },
  
  {
    id: 6,
    category: 'Banking',
    title: 'The Ultimate Guide to Maximizing Efficiency',
    readTime: '10 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/302c/4683/7e3845bbdea2197c24406e62abc1de5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llpGLC0hOCgNlWyZMSq9knNBXMcohBiH7qrm6azrWgS45FqfvK8NtBrcmBvX1iD7z4eji0DU~0UeyQuAG-iH6Q30ED5cY7E7PqDhaFSNwxFBhPeMY0m44H2rlJx-epuLdDw0Tt6OQw3sS0d8n8rD5Qd-P026Z5L-1Yr9ThOLeU-hmf5b9rfTJeykIQ6kOiFAsjy77PaRRC3DGBnhvbaA~mHcFzXGIt2nJ4l9xA2IqV6U~U3YAqsgW5aFxlDI2TeH3P3v6DuhtjHKtSB3r5BYl2EkLEMS4Vbhfnh4wbVBF8rCINNUdAMAnXYrt1Au1JHdHbbbBDwXnqkpBXSChFZH5g__',
  },
  {
    id: 7,
    category: 'Finance',
    title: 'Top 5 Ways to Revolutionize Your Accounting Processes',
    readTime: '8 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/d9a8/fbe2/d1ad3dd0be2ed567a5773d7aad996d88?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVEF6gBHO4IiZiKQWHzXmfagzGNgD~8LfVJkyVeb8NfnysQVQZ7K4riJ~tFFZV5KA1nyZu3TWI1iAD4BGFD9D~9BQjc6e7cJkqgkk075c-~QKescJSHii54PfX3hxGh~ASy-2xa6tNhfUgJwuWSt2fugXr--5UoJKLQMfrIw~89z2HPF5gjC2JuU7MgAYgYAqyQNIOLnydGvAQduH8IOxlFNBSxi7b7W5Vv~O9C1aW0SQR07nmdYPi1r5L4QnnKh~fM7QsL1QnBZTcmPPN5smb8om~gXOaDbnv69qBasLmYid~WDJITIvVRpTVwC2iuc84FCaRg-P2ZQz67qqm3EHw__',
  },
  {
    id: 8,
    category: 'Banking',
    title: 'The Ultimate Guide to Maximizing Efficiency',
    readTime: '10 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/302c/4683/7e3845bbdea2197c24406e62abc1de5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llpGLC0hOCgNlWyZMSq9knNBXMcohBiH7qrm6azrWgS45FqfvK8NtBrcmBvX1iD7z4eji0DU~0UeyQuAG-iH6Q30ED5cY7E7PqDhaFSNwxFBhPeMY0m44H2rlJx-epuLdDw0Tt6OQw3sS0d8n8rD5Qd-P026Z5L-1Yr9ThOLeU-hmf5b9rfTJeykIQ6kOiFAsjy77PaRRC3DGBnhvbaA~mHcFzXGIt2nJ4l9xA2IqV6U~U3YAqsgW5aFxlDI2TeH3P3v6DuhtjHKtSB3r5BYl2EkLEMS4Vbhfnh4wbVBF8rCINNUdAMAnXYrt1Au1JHdHbbbBDwXnqkpBXSChFZH5g__',
  },
  {
    id: 9,
    category: 'Accounting',
    title: 'The Future of Financial Automation',
    readTime: '8 min read',
    imageUrl: 'https://s3-alpha-sig.figma.com/img/302c/4683/7e3845bbdea2197c24406e62abc1de5a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=llpGLC0hOCgNlWyZMSq9knNBXMcohBiH7qrm6azrWgS45FqfvK8NtBrcmBvX1iD7z4eji0DU~0UeyQuAG-iH6Q30ED5cY7E7PqDhaFSNwxFBhPeMY0m44H2rlJx-epuLdDw0Tt6OQw3sS0d8n8rD5Qd-P026Z5L-1Yr9ThOLeU-hmf5b9rfTJeykIQ6kOiFAsjy77PaRRC3DGBnhvbaA~mHcFzXGIt2nJ4l9xA2IqV6U~U3YAqsgW5aFxlDI2TeH3P3v6DuhtjHKtSB3r5BYl2EkLEMS4Vbhfnh4wbVBF8rCINNUdAMAnXYrt1Au1JHdHbbbBDwXnqkpBXSChFZH5g__',
  },
  // Add more blog data here
];

const categories = ['All', 'Finance', 'Banking', 'Accounting', 'Lorem Ipsum'];

function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <section className="blog-section">
      <h2 className="blog-title1">Insights & Innovations:<br></br>Let’s Explore the <em>Future of Finance</em></h2>

      <div className="filter-buttons">
        {categories.map(category => (
          <button   
            key={category}
            className={`filter-button ${category === selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-info">
              <span className="blog-category">{blog.category}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-read-time">{blog.readTime}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button>&lt;</button>
        <span>Page 1 of 6</span>
        <button>&gt;</button>
      </div>

      {/* Banner Section */}
      <div className="banner">
        <h3>Transform Your Financial Processes with Neo CFO</h3>
        <a href="#schedule-demo" className="banner-btn">SCHEDULE A DEMO</a>
      </div>
    </section>
  );
}

export default BlogSection;
