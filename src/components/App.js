import React from 'react';
import './App.css';
import data from '../metal.json';
import Heading from './Heading/Heading'
import MetalMeta from './Metal/MetalMeta';
import Band from './Band/Band';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      {data.map((band) => (
        <Band key={band.name} band={band} />
      ))}
    </div>
  );
}

export default App;
