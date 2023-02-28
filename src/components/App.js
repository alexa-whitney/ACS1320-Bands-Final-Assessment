import React from 'react';
import './App.css';
import Heading from './Heading/Heading'
import MetalMeta from './Metal/MetalMeta';
import BandList from './BandList/BandList';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <BandList />
    </div>
  );
}

export default App;
