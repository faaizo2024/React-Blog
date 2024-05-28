import React from 'react';
// import { BlogProvider } from './context/BlogContext';
import { BlogProvider } from './src/Component/BlogContext';
import Header from './src/Component/Header';
import Footer from './src/Component/Footer';
import PostsList from './src/Component/PostsList';

// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import PostsList from './components/PostsList/PostsList';

function App() {
  return (
    <BlogProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <PostsList />
        </main>
        <Footer />
      </div>
    </BlogProvider>
  );
}

export default App;
