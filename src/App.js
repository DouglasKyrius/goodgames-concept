import React from 'react';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Trending from './components/trending/Trending';
import Recommended from './components/recommended/Recommended';
import New from './components/new/New';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Trending />
        <Recommended />
        <New />
      </main>
    </div>
  );
}

export default App;
