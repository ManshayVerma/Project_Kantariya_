// src/App.js
import React from 'react';
import Header from './components/Header.jsx';
import BlogSection from './components/BlogSection.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
