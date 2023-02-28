import data from '../../metal.js'
import React from 'react';
import './MetalMeta.css';

function MetalMeta() {
    const numBands = data.length;
    return (
        <div className='bands'>
            <h1>Metal Bands 🤘</h1>
            <h2>Bands: {numBands}</h2>
        </div>
    )
}

export default MetalMeta;