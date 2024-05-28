import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from a mock API or local JSON file
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <BlogContext.Provider value={{ posts }}>
      {children}
    </BlogContext.Provider>
  );
};
