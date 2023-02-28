import React from 'react';
import './App.css';
import Heading from './Heading/Heading'
import MetalMeta from './Metal/MetalMeta';
import BandList from './BandList/BandList';
import SearchBar from './Search/SearchBar';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <SearchBar />
      <BandList />
    </div>
  );
}

export default App;
